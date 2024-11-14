let heroi = "jogador1"
let vitoriasEDerrotas = [150, 49];
let saldoVitoria = calculoVitoria(vitoriasEDerrotas);
let estatisticaDeVitoria = porcentagemVitoria(vitoriasEDerrotas)
let nivel = definirNivel(saldoVitoria)


function calculoVitoria(array) {

    return array[0] - array[1]
}

function porcentagemVitoria(array) {

    estatistica = (array[0] / (array[0] + array[1])) * 100
    return `${estatistica.toFixed(2)}%`
}

function definirNivel(vitorias, nivel = 0) {
    const rankings = [
        {max: 10, ranking: 'Ferro'},
        {max: 20, ranking: 'Bronze'},
        {max: 50, ranking: 'Prata'},
        {max: 80, ranking: 'Ouro'},
        {max: 90, ranking: 'Diamante'},
        {max: 100, ranking: 'Lendário'},
        {min: 101, ranking: 'Imortal'}
    ]

    if (vitorias <= rankings[nivel].max || vitorias >= rankings[nivel].min) {
        return rankings[nivel].ranking
    } else {
        return definirNivel(vitorias, nivel +1)
    }
}

console.log(`O ${heroi} tem um saldo de ${saldoVitoria} vitórias, tendo ${estatisticaDeVitoria} de taxa de vitórias, e está no nível de ${nivel}`)