let number1= Number(prompt("Digite o primeiro numero:"));
let number2 = Number(prompt("Digit o segundo numero"));

let sum = number1 + number2;
let subtraction = number1 - number2;
let multiplicacion = number1*number2;
let division = number1/number2;
let rest = number1%number2;

let sumPar = sum%2;



alert(`A soma dos numero é: ${sum}`)
alert(`A subtração dos numero é: ${subtraction}`)
alert(`A multiplicação dos numero é: ${multiplicacion}`)
alert(`A divisão dos numero é: ${division}`)
alert(`O resto dos numero é: ${rest}`)

if(sumPar==0){
    alert("A soma dos numeros é par")
}else{
    alert("A soma dos numeros é impar")
}

if(subtraction==0){
    alert("Os números são iguais")
}else{
    alert("Os numeros inseridos são diferentes")
}



