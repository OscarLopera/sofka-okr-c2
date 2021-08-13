const app = require("../../../../index");
const request = require('supertest')
const mongoose = require('mongoose')


describe("Routes Kr API test", () => {
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

    it("Create Kr Post Path Happy",async ()=>{
        const kr = {
            title:"pruebas routes",
            idOkr:"6112f6ce70e2131bb4730d2f",
            description:"lorep ipsum pruebas",
            managerName:"perri2",
            managerEmail:"perri2@loqsea.com",
            startDate:"2020/08/05",
            endDate:"2020/08/08",
            loadValue:10,
            progress:100
        }

        const response = await request(app).post('/api/kr/new').send(kr)

        expect(response.error).toBe(false)
        expect(response.statusCode).toBe(201)
        expect(response.body.message).toBe("kr created")
        id = response.body.dataId
    })

    it("Create Kr Post Path Sad",async ()=>{
        const kr = {
            idOkr:"6112f6ce70e2131bb4730d2f",
            description:"lorep ipsum2",
            managerName:"perri2",
            managerEmail:"perri2@loqsea.com",
            startDate:"2020/08/05",
            endDate:"2020/08/08",
            loadValue:10,
            progress:100
        }

        const response = await request(app).post('/api/kr/new').send(kr)

        expect(''+response.error).toBe("Error: cannot POST /api/kr/new (402)")
        expect(response.statusCode).toBe(402)
    })

    it("Update Kr Progress Patch Path Happy",async ()=>{
        
        const update = {
            "progress": 50
        }

        const response = await request(app).patch(`/api/kr/update/${id}`).send(update)

        //expect(response.error).toBe(false)
        expect(response.statusCode).toBe(201)
        expect(response.body.message).toBe("Avance de kr actualizado")
    })

    it("Update Kr Progress Patch Path Sad",async ()=>{
        
        const update = {
            "progress": 50
        }

        const response = await request(app).patch(`/api/kr/update/heynoexisto`).send(update)

        expect(''+response.error).toBe("Error: cannot PATCH /api/kr/update/heynoexisto (402)")
        expect(response.statusCode).toBe(402)
    })
  
    it("Delete Kr Delete Path Happy",async ()=>{
        
        const idkr = id
        const response = await request(app).delete(`/api/kr/delete/${idkr}`)

        //expect(response.error).toBe(false)
        expect(response.statusCode).toBe(201)
        expect(response.body.message).toBe("kr delete")
    })

    it("Delete Kr Delete Path Sad",async ()=>{
        const idkr = "noexisto"

        const response = await request(app).delete(`/api/kr/delete/${idkr}`)

        expect(''+response.error).toBe("Error: cannot DELETE /api/kr/delete/noexisto (402)")
        expect(response.statusCode).toBe(402)
    })

})