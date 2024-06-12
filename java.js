async function getAddressByCep(){
    const cep = document.getElementById('cep').value;

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        const brr = data.bairro;
        const loc = data.localidade;

        document.getElementById('log').innerText = data.logradouro != "" ? data.logradouro : "--";
        document.getElementById('brr').innerText = data.bairro != "" ? data.bairro :  "--";
        document.getElementById('loc').innerText = data.localidade;

    } catch (error) {
        alert(error.message);
    }
}

async function getAddressByMeteo(){
    const lat = document.getElementById(`lat`).value;
    const long = document.getElementById(`long`).value;

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m`);
        const data = await response.json();

        const temp = data.current.temperature_2m;
        
        document.getElementById(`temp`).innerText = `Previsão de tempo de acordo com a região: ${temp}°C`;
    } catch (error) {
        alert(error.message);
    }
}