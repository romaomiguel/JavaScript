let valores = [];

function adicionar() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('tabela');
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = valores.push(num.value);
        tab.innerHTML = '';
        valores.forEach(valor => {
            let item = document.createElement('option');
            item.text = `Valor ${valor} foi adicionado`;
            tab.appendChild(item);
        });
    }
}
//forEach - Para cada valor; é um loop
//valor é uma variavel
