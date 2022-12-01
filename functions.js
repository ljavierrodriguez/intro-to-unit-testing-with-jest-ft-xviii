function sumar(a, b){
    return a + b;
} 

function restar(a, b){
    return a - b;
} 


function multiplicar(a, b){
    return a * b;
} 


function dividir(a, b){
    return a / b;
} 

const PI = 3.14;

const ACTIVE = false;

//module.exports = PI;

/* module.exports = {
    PI,
    ACTIVE
} */

// o 

//exports.PI = PI;

module.exports = {
    sumar, 
    restar,
    multiplicar,
    dividir,
    PI,
    ACTIVE
}