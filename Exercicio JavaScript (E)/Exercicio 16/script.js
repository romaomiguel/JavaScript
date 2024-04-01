function contar() {
    //PEGANDO AS VARIAVEIS
    let inicio = document.getElementById('txtinicio').value
    let fim = document.getElementById('txtfim').value
    let passo = document.getElementById('txtpasso').value
    let res = document.getElementById('res')

    if (inicio == 0 && fim == 0 && passo == 0){
        alert('[ERRO] FALTAM DADOS!')
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if(p <= 0){
            alert('Passo Invalido! CONSIDERANDO PASSO 1')
            p = 1
        }if (i < f) {
            //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c+=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            //CONTAGEM REGRESSIVA
            for(let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}