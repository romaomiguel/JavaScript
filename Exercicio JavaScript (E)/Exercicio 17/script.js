function tabuada() {
    //VARIAVEIS
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) { //SE NUM FOR IGUAL A 0
        window.alert('Por favor, Digite um numero!')
    }else { //SE NÃO
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) { //ENQUANTO
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //USADO PARA IDENTIFICAR NO BACKEND
            tab.appendChild(item) //APARECER NA OPTION
            c++
        }
    }
}