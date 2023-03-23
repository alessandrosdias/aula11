
const usuariocontroller = (app) => {
  
  app.get('/usuarios', function (req, res) {
    res.send('VocÊ está em usuario')
  })
  app.post('/usuarios', function (req, res) {
    res.send(req.body)
  })
}
 export default usuariocontroller