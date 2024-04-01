
let valores = [1, 5, 6, 2, 9]
let pos = valores.indexOf(5)
if (pos == -1){
    console.log('O valor não foi encontrado')
}else {
    console.log(`o valor esta na posição ${pos}`) 
} //Buscando Valores


/*let valores = [1, 5, 6, 2, 9]
for (let pos in valores) {
    console.log(`A posiçao ${pos} tem o valor${valores[pos]}`)
} 
- Exibição de array, jeito simplificado*/


/*let valores = [1, 5, 6, 2, 9]
valores.sort()
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 
- exibição da array*/


/*let num = [5,4,3,2,6]
num.push(7)
num.sort()

console.log(num)
console.log(`o vetor tem ${num.length} posição`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

num.push(valor) - acrescenta um elemento no array e coloca o valor desejado
num.length - comprimento do array
num.sort(valor) - coloca em ordem crescente */