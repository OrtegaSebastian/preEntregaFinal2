const express = require('express');
const chartController = require("../controllers/carrito");

const router = express.Router();

router.get('/', (req, res) => {
    chartController.getAll(req, res);
});

router.get('/:id', (req, res) => {
    chartController.getById(req, res);
});

router.post('/', (req, res) => {
    res.send('POST');
});

router.put('/', (req, res) => {
    res.send('PUT');
});

router.delete('/', (req, res) => {
    res.send('DELETE');
});

module.exports = router;