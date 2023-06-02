function calcularDias() {
    // declarando var's
    let niverInput = document.getElementById("niver");
    let feriasInput = document.getElementById("ferias");

    let niver = new Date(niverInput.value);
    let ferias = new Date(feriasInput.value);
    let hoje = new Date();

    // dias faltantes para o aniversário
    let proximoAniversario;
    if (niver.getMonth() < hoje.getMonth() || (niver.getMonth() === hoje.getMonth() && niver.getDate() < hoje.getDate())) {
        proximoAniversario = new Date(hoje.getFullYear() + 1, niver.getMonth(), niver.getDate());
    }

    else {
        // ve se o niver ja foi esse ano
        proximoAniversario = new Date(hoje.getFullYear(), niver.getMonth(), niver.getDate());
    }
    let diasAteAniversario = Math.ceil((proximoAniversario - hoje) / (1000 * 60 * 60 * 24));
    // formula para transformar de milisegundos para dias

    // dias faltantes para as férias
    let diasAteFerias = Math.ceil((ferias - hoje) / (1000 * 60 * 60 * 24));
    // formula para transformar de milisegundos para dias

    // resultados
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Dias até Aniversário: ${diasAteAniversario}<br>Dias até Férias: ${diasAteFerias}`;
    
}