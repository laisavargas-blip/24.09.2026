import { Router } from "express";
import { produtoService } from '../services/produto.service.js'
export const produtoRouter = Router();


produtoRouter.get("/", async (req, res) => {
    const produtos = await produtoService.getAll();

    return res.json(produtos);
});

produtoRouter.post("/", async (req, res) => {
    const produto = await produtoService.create(req.body);
    return res.status(201).json(produto);
});