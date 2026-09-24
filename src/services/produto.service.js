import pool from "../config/db.js";

class ProdutoService {

    async getAll() {
        const res = await pool.query("SELECT * FROM produtos");
        return res.rows;
    }
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
export default ProdutoService;