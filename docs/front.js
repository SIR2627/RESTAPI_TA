async function getAlunos() {
        const response = await fetch("http://localhost:3000/alunos");
        console.log(response);
        const alunos = await response.json();
        console.log(alunos);
        return alunos;
    }

    async function mostraAlunos() {
        const alunos = await getAlunos();
        const divalunos = document.getElementById("alunos");
        console.log(divalunos);
        divalunos.innerHTML = "";

        const paluno = document.createElement("p");

        alunos.forEach(aluno => {
            const paluno = document.createElement("p");
            const baluno = document.createElement("button");
            baluno.addEventListener("click", apagaAluno);
            baluno.textContent = "Apagar";
            baluno.dataset.id = aluno.id;
            paluno.textContent = aluno.nome;
            paluno.appendChild(baluno);
            divalunos.appendChild(paluno);
        });
        
    }

    async function apagaAluno(e) {
        const botaoclicado = e.target;
        const alunosId = botaoclicado.dataset.id;
        const url = `http://localhost:3000/alunos/${alunosId}`;
        console.log(url);
        const response = await fetch(url,{method:"DELETE"});
        //console.log(botaoclicado.dataset.id)
        mostraAlunos();
    }

    JSON.stringify
    mostraAlunos();