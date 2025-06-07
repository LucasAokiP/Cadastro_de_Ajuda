const limpar = () => {
    document.getElementById("nome").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("contato").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}

const preencherFormulario = (endereco) => {
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.estado;
}

//verificaçao se o Cep é valido
const eNumero = (Numero) => /^[0-9]+$/.test(Numero);

//confere se o Cep tem o tamanho certo
const cepValido = (Cep) => Cep.length == 8 && eNumero(Cep);

const pesquisarCep = async() =>{
    limpar();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(Cep.value)){
        const dados = await fetch(url);
        const addres =await dados.json();

        if(addres.hasOwnPropety('erro')){
            alert('CEP não encontrado');
        }
        else{
            preencherFormulario(addres);
        }
    }
    else{
        alert('CEP incorreto');
    }
}

document.getElementById('cep').addEventListener('focuosout',pesquisarCep);