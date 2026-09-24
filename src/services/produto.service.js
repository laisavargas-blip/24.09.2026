import {pool} from "../config/db.js";

class ProdutoService {

    // Buscar todos os produtos
    async getAll() {

        // Verificar qual banco a API está utilizando
        const teste = await pool.query(
            "SELECT current_database() AS banco, current_schema() AS schema"
        );

        console.log("Banco conectado pela API:", teste.rows[0]);

        // Buscar os produtos
        const res = await pool.query(
            "SELECT * FROM public.produtos"
        );

        return res.rows;
    }

    // Criar um produto
    async create(dados) {

        const res = await pool.query(
            `INSERT INTO produtos
            (nome, marca, categoria, preco, quantidade_estoque)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [
                dados.nome,
                dados.marca,
                dados.categoria,
                dados.preco,
                dados.quantidade_estoque
            ]
        );

        return res.rows[0];
    }

}

export const produtoService = new ProdutoService();