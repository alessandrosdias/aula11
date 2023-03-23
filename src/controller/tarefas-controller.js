
const tarefascontroller = (app) => {

  app.get('/tarefas', function (req, res) {
    res.send('VocÊ está em tarefas')
  })

  app.post('/tarefas', function (req, res) {
    res.send('VocÊ está em tarefas')
  })

}
export default tarefascontroller