const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello TA!')
})

app.get("/alunos/:alunoid", (req, res) => {
    const alunoid = req.params.alunoid;
    const max = req.query.max;
    res.send(`Aluno ID: ${alunoid} max: ${max}`); 
  }
)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})