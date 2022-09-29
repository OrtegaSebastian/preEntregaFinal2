const fs = require('fs')
const filename = '../../files/carrito.json';
const path = require('path');


// save(Object): Number - Recibe un objeto, lo guarda en el file, devuelve el id asignado.
const save = async (objCarrito)  =>{
    let carrito = [];
    const data = await fs.promises.readFile(path.resolve(__dirname, `${filename}`),"utf-8")
    if(data){
        carrito = JSON.parse(data);
        const id = carrito.length +1;
        objCarrito.id = id;     
        carrito.push(objCarrito);
            const carritosString = JSON.stringify(carrito);
            await fs.promises.writeFile(path.resolve(__dirname, `${filename}`), carritosString);
            return objCarrito;
        }
        else{
            objCarrito.id = 1;
            carrito.push(objCarrito);
            const carritosString = JSON.stringify(carrito);
            await fs.promises.writeFile(path.resolve(__dirname, `${filename}`), carritosString);
            return objCarrito;
        }      
}

// Metodo getById(Number)
const getById = async (id) => {
    if (fs.existsSync(path.resolve(__dirname, `${filename}`))){
        const data = fs.readFileSync(path.resolve(__dirname, `${filename}`), 'utf-8');
        const dataParseada = JSON.parse(data);
        if (dataParseada) {
            const carrito = dataParseada.find((carrito) => carrito.id == id);
            if (carrito) {
                return carrito;
            }
        }
    }
    return {};
}

// Metodo getAll()
const getAll = async () =>{
    if (fs.existsSync(__dirname, `${filename}`)){
        const data = fs.readFileSync(path.resolve(__dirname, `${filename}`), 'utf-8');
        const dataParseada = JSON.parse(data);
        if (dataParseada) {
            return dataParseada;
        }else{
            return 'Not data Found';
        }
    }
    return 'File not Found'; 
}

// Metodo deleteById(Number)
const deleteById = async (id) => {
    const data = fs.readFileSync(path.resolve(__dirname, `${filename}`), "utf-8");
    const dataParseada = JSON.parse(data);
    const dataFiltrada = dataParseada.filter((objeto) => objeto.id !== id);
    const dataString = JSON.stringify(dataFiltrada);
    fs.writeFileSync(path.resolve(__dirname, `${filename}`), dataString);
    return dataFiltrada;
}

// Metodo updateById(id, cartcut)
const updateById = async (id, carritoNew)=> {
    if (fs.existsSync(path.resolve(__dirname, `${filename}`))){
        const data = fs.readFileSync(path.resolve(__dirname, `${filename}`), 'utf-8');
        const dataParseada = JSON.parse(data);
        if (dataParseada) {
            const carrito = dataParseada.find((carrito) => carrito.id == id);
            if (carrito) {
                const carritoToUpdate = { id, ...carritoNew };
                let productFiltered = dataParseada.filter((objeto) => objeto.id !== id);
                productFiltered.push(carritoToUpdate);
                const dataString = JSON.stringify(productFiltered);
                console.log(dataString);
                fs.writeFileSync(path.resolve(__dirname, `${filename}`), dataString);
                return carritoToUpdate;
            }
        }
    }
    return {};
}

module.exports = {
    save,
    getById,
    getAll,
    deleteById,
    updateById
};

