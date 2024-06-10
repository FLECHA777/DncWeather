async function getAddressByCep(){
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data.cep);
        document.getElementById('logradouro').value.innerText = data.logradouro;
        document.getElementById('bairro').value.innerText = data.bairro;
        document.getElementById('localidade').value.innerText = data.uf;
    } catch (error) {
        alert("Digite um cep valido!");
    }
}