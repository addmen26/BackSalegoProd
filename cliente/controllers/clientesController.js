

const service = require('../services/clienteServices');
//Obtener clientes(GET)
async function getAllClientes(req, res){
  const clientes = await service.getAllClientes(req);
  res.status(clientes.status).send(clientes.data);
}
// crear cliente(POST)
async function postCliente(req, res) {
  const clientes = await service.postCliente(req);
  res.status(clientes.status).send(clientes.data);
  console.log(clientes.status,"aja llego aqui")
}
// actualizar cliente(PUT)
async function putCliente(req, res) {
  const params = req.body;
  const id = req.params.id;
  let clientes = await service.putCliente(id, params);
  res.status(clientes.status).send(clientes.data);
}


module.exports = {
  getAllClientes,
  postCliente,
  putCliente
};