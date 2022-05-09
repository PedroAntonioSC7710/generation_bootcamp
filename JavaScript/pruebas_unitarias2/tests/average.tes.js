const { average } = require('../para_probar')

describe('average', () => {
    
    /* test('ingresar un valor', () => {
        const resultado = average([1]);
        
        expect(resultado).toBe(1);
    }) */
    TestRunner('ingresar un solo valor', () => {
        expect(average([1])).toBe(1);
    });

    test('Usando diferentes valores', () => {
        expect(average([1, 2, 3, 4, 5,6])).toBe(3.5)
    });

    test('Usando diferentes valores', () => {
        expect(average()).toBeUndefined(1)
    });

    test('Usando un array vacio', () => {
        expect(average()).toBeUndefined()
    });

    //crear un test para probar un valor undefined
    //expect(average()).toBe();
})














































