const { sumar, restar } = require('./scripts');

test('Probando nuestra primera prueba unitaria', () => {
    // aqui colocar todo el codigo de mi prueba unitaria
});


describe('Validaciones de la funcion sumar', () => {
    test('La funcion sumar debe estar definida', () => {
        expect(typeof(sumar)).toBe('function');
    })
    
    test('La suma de 2 + 2 debe ser 4', () => {
        expect(sumar(2, 2)).toBe(4);
    })
    
    test('La suma de 2 + 3 debe ser 5', () => {
        expect(sumar(2, 3)).toBe(5);
    })
})

describe('Validaciones de la funcion restar', () => {
    test('La funcion restar debe estar definida', () => {
        expect(typeof(restar)).toBe('function');
    })
    
    test('La resta de 2 - 2 debe ser 0', () => {
        expect(restar(2, 2)).toBe(0);
    })
    
    test('La resta de 2 - 3 debe ser -1', () => {
        expect(restar(2, 3)).toBe(-1);
    })
})


test('La 5 debe ser igual a 5', () => {
    expect({ name: 'Luis'}).toEqual({ name: 'Luis'});
})