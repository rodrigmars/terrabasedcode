function getUsers() {
    return ['12', 4421, 45]
}


describe('Simulando testes', _ => {

    it(`Should return name 'Leia'`, () => {

        const mockGetUsers = jest.fn()

        mockGetUsers.mockReturnValueOnce(['Leia'])

        expect(mockGetUsers()[0]).toBe('Leia')

        expect().toBe("asdasd")

        expect().toBeNull()

        expect()
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

