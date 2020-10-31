var inputCPF = document.getElementById("cpf");
var displayNome = document.getElementById('nome');

if (localStorage.getItem("data")){

        var data = JSON.parse(localStorage.getItem("data"))
        console.log(data);
        displayNome.innerText = titleize(data.nome_completo).split(" ")[0];

    }else{
        
		if (location.href.split('/')[location.href.split('/').length-1] == 'nossoAluno.html')  location.href = location.href.split(location.href.split('/')[location.href.split('/').length-1]).join("home.html");
}


function login() {

    if(TestaCPF(inputCPF.value))
    {
        var data;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                if (!JSON.parse(this.response)["404"]){
                    console.log(JSON.parse(this.response));
                    localStorage.setItem("data", padronize(this.response));
                    location.href = location.href.split(location.href.split('/')[location.href.split('/').length-1]).join("nossoAluno.html");
                }else{
                    alert("aluno não encontrado")
                }
            }
        });

        xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.sertao.ifrs.edu.br:8443/aluno/"+inputCPF.value+"?key=b'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMjAxOTMwOTczNSIsImV4cCI6WyI3NzciXX0.xL4HJI3benIOVokDd0Bf6UTUar1wZtm4nA28P41uTKs'");
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(data);
    }
    else
    {
        alert("Desculpe mas o CPF digitado é invalido");
    }
};

function logout(){
    if (confirm("Tem certeza que desaja sair?")) {
        localStorage.setItem("data", '');
        location.href = location.href.split(location.href.split('/')[location.href.split('/').length-1]).join("home.html");
    }
  
  }


/*
    @param CPF
    @return boolean true/false
*/
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

function padronize(obg){

    var result = {};
    obg = JSON.parse(obg);

    if(obg.sig){
        result.nome_completo = obg.sig.nome_completo
        result.matricula = obg.sig.cursos[0].matricula
        result.nome_curso = obg.sig.cursos[0].nome_curso
        result.cod_curso = obg.sig.cursos[0].cod_curso
        result.status_discente = obg.sig.cursos[0].status_discente
        result.login = obg.sig.login
    }else{
        result.nome_completo = obg.campus.nome_completo
        result.matricula = obg.campus.cursos[0].matricula
        result.nome_curso = obg.campus.cursos[0].nome_curso[0]
        result.cod_curso = obg.campus.cursos[0].cod_curso[0]
        result.login = obg.campus.login
        result.status_discente = "Ativo"
    }

    return JSON.stringify(result);
}

function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}