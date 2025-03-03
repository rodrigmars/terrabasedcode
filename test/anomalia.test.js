
describe('Modulo de teste para avaliação', () => {

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

