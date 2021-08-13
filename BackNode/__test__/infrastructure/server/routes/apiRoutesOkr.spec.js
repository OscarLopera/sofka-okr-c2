const app = require("../../../../index");
const request = require('supertest')
const mongoose = require('mongoose')


describe("Routes Okr API test", () => {
            let testServer
            beforeAll(() => {
                testServer = app.listen(4000)
                jest.setTimeout = 60000
            })

            afterAll((done) => {
                testServer.close(done)
                mongoose.connection.close()
                console.log("mongo cerrado")
            })

            var id
            var body

    it("Create Okr Post Path Happy",async ()=>{
        const Okr = {
            title: "Titulo del Okr",
            managerId: "a1b2c3d",
            verticalId: "a1b2c3d",
            objective: "Vamos por ello",
        }

        const response = await request(app).post('/api/okr/new').send(Okr)

        expect(response.error).toBe(false)
        expect(response.statusCode).toBe(201)
        expect(response.body.message).toBe("Se creó el Okr exitosamente")
        id = response.body.dataId
        body = response.body
    })

    it("Create Okr Post Path Sad",async ()=>{
        const Okr = {
                title: "Titulo del Okr",
                managerId: "a1b2c3d",
                verticalId: "a1b2c3d",
                objective: "onjetivo",
                currentProgress: 50,
        }

        const response = await request(app).post('/api/okr/new').send(Okr)

        expect(''+response.error).toBe("Error: cannot POST /api/okr/new (402)")
        expect(response.statusCode).toBe(402)
    })

    it("Get Okr Get Path Happy",async ()=>{
        const idOkr = id
        const response = await request(app).get(`/api/okr/allokrsbyuser/${idOkr}`)

        expect(response.error).toBe(false)
        expect(response.statusCode).toBe(200)
        expect(response.body.body).not.toBeNull()
        expect(Array.isArray(response.body.body)).toBe(false)
    })
 
    it("Delete Okr Delete Path Happy",async ()=>{
        
        const idOkr = id
        const response = await request(app).delete(`/api/okr/delete/${idOkr}`)

        //expect(response.error).toBe(false)
        expect(response.statusCode).toBe(201)
        expect(response.body.message).toBe("Okr Eliminado")
    })

    it("Delete Okr Delete Path Sad",async ()=>{
        const idOkr = "noexisto"

        const response = await request(app).delete(`/api/kr/delete/${idOkr}`)

        expect(''+response.error).toBe("Error: cannot DELETE /api/kr/delete/noexisto (402)")
        expect(response.statusCode).toBe(402)
    })

})