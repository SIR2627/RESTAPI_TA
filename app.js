const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express()
const port = 3000

dotenv.config();

const alunoSchema = new mongoose.Schema({
  nome: String,
  idade : Number,
  cursoId: String
});

const Aluno = mongoose.model('Aluno', alunoSchema);

connectDB().catch(err => console.log(err));

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
}

app.get('/', (req, res) => {
  res.send('Hello TA!')
})

app.get("/alunos", async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.json(alunos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/alunos/:id", async (req,res) => {
  const id = req.params.id;
  oid = new mongoose.Types.ObjectId(id);
  console.log(oid);
  const aluno = await Aluno.find({_id:oid}).exec();
  res.json(aluno);
})

/*
app.get("/alunos/:alunoid", (req, res) => {
    const alunoid = req.params.alunoid;
    const max = req.query.max;
    res.send(`Aluno ID: ${alunoid} max: ${max}`); 
  }
)
*/


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})