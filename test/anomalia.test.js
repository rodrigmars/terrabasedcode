// import { jest, it, expect } from '@jest/globals';
import { jest, describe, xdescribe, expect, test, xtest, it, xit } from '@jest/globals';

const poliedros = {
    status: true,
    sour: ['círculo', 'hiperbolóide', 'esferoide', 'prisma', 'elipse',
        'poliedro', 'paralelogramo', 'oval', 'tetraedro', 'quadrado']
};

function convertToBinary(divided) {

    function getQuotient(a, b) {
        return Math.trunc(a / b)
    }

    const divisor = 2
    let remainder = []

    while (1) {

        remainder.push(divided % divisor)
        divided = getQuotient(divided, divisor)

        if (divisor > divided) {
            remainder.push(divided)
            break
        }

    }

    return ~~remainder.reverse().toString().replaceAll(',', '')
}


describe('Base binaria', _ => {

    it('Binary conversion should return 1100', () => {

        expect(convertToBinary(12)).toEqual(1100)
    })
})

xdescribe('Test poliedros', () => {

    it('....', () => {
        expect(poliedros.status).toBeTruthy();
    });

    it('...', () => {
        expect(poliedros.status).toBeFalsy();
    });
});


function getUsers() {
    return ['12', 4421, 45]
}


describe('Simulando testes', _ => {

    it(`Should mock function ultra successfully returned`, () => {

        const mockUltra = jest.fn()

        mockUltra.mockImplementationOnce(() => true)

        mockUltra()

        expect(mockUltra).toHaveReturned()

    })

    it(`Should mock function ultra returned true`, () => {

        const mockUltra = jest.fn()

        mockUltra.mockImplementationOnce(() => true)

        expect(mockUltra()).toBe(true)

    })

    xit(`Should return name 'Leia'`, () => {

        // const mockGetUsers = jest.fn()

        // mockGetUsers.mockReturnValueOnce(['Leia'])

        // expect(mockGetUsers()[0]).toBe('Leia')

        const dados = [1, 5, 8, 9, 8, 6, 1, 5]

        expect(dados).toHaveLength(8)

        expect(dados).toContain(5)

        expect(dados).not.toContain(3)

        expect([]).toEqual([])

        expect(undefined).toBeUndefined()

        expect(null).toBeNull()

        expect(typeof '').toBe('string')

        expect(typeof 10).toBe('number')

        expect(typeof {}).toBe('object')

        expect(typeof true).toBe('boolean')

    })

})



describe('Modulo de teste para avaliação', _ => {

    it('Iniciando uma saída válida >>', () => {
        expect(5).toBe(5)
    })

    it.skip('Segundo teste negativo para avaliação', () => {
        expect(6).toBe(7)
    })

    xit('Aguarda resultado verdadeiro', () => {
        expect(true).toBe(null)
    })

})

describe.skip("...", _ => {
    it("", () => {

        expect(true).toBe(1)

    })
})

xdescribe("...", _ => {


})

