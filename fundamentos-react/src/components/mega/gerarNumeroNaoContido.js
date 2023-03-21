export function gerarNumeros(min, max, tamanhoArray) {
    const sequencia = Array(tamanhoArray)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(min, max, nums)
            return [...nums, novoNumero]
        }, [])
        .sort((a, b) => a - b)
    console.log(sequencia)
    return sequencia
}

function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
}