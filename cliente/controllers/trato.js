const service = require('../services/tratoServices');

async function getTrato(req, res){
  const trato = await service.getTrato(req);
  res.status(trato.status).send(trato.data);
}
// crear trato(POST)
async function postTrato(req, res) {
  const trato = await service.postTrato(req);
  res.status(trato.status).send(trato.data);
  console.log(trato.status)
 
}
async function putTrato(req, res) {
  const params = req.body;
  const id = req.params.id;
  let trato = await service.putTrato(id, params);
  res.status(trato.status).send(trato.data);
}



module.exports = {
  getTrato,
  postTrato,
  putTrato
  
};