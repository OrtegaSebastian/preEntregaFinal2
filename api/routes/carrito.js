const express = require('express');
const carritosController = require('../controllers/carrito'); 

const routerCarrito = express.Router();

routerCarrito.get('/', async (req, res) => {
    const response = await carritosController.getAll();
    res.send(response);
});

routerCarrito.get('/:id/Usuario/:idUsuario', async (req, res) => {
    const id = parseInt(req.params.id);
    const idUsuario = parseInt(req.params.body)
    const response = await carritosController.getById(id, idUsuario);
    res.send(response);
});

routerCarrito.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);  
    const response = await carritosController.getById(id);
    res.send(response);
});

routerCarrito.post('/', async (req, res) => {
    const carrito = req.body;
    const response = await carritosController.save(carrito);
    res.send(response);
});

routerCarrito.put('/:id', async (req, res) => {
    const carrito = req.body;
    const id = parseInt(req.params.id);
    const response = await carritosController.updateById(id, carrito);
    res.send(response);
});

routerCarrito.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await carritosController.deleteById(id);
    res.send(response);
});

module.exports = routerCarrito