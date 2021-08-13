const { getalluser } = require('../../../application/calendar/index')
const KRRepository = require('../../../domain/okr/kr/KrRepository')
const UserRepository = require('../../../domain/user/UserRepository')
const OKRRepository = require('../../../domain/okr/okr/Okr-repository')

const mockUserRepository = new UserRepository();
const mockOkrRepository = new OKRRepository();
const mockKrRepository = new KRRepository();
const { usersDummies, okrDummies, krDummies} = require("./dummies/index")


describe('Get all users', () => {

    test('get all user', async () => {


        mockUserRepository.getUsers = () => usersDummies

        const users = await getalluser(mockUserRepository)

        expect(typeof users).toEqual("object")
        expect (users.length).toEqual(2)
        expect(users[0].id).toEqual("610de277a8823b52ac859fdb")
        expect(users[0].name).toEqual("juan")
        expect(users[0].email).toEqual("juan@gmail.com")
        expect(users[0].urlPhoto).toEqual("https://lh3.googleusercontent.com/ogw/ADea4I5m38rsb3mMMr0Lnosn5W_3JFp5Rx2ErzzkRTOD=s32-c-mo")
        expect(users[0].phone).toEqual("12345678")
        expect(users[0].firstTime).toEqual(true)
        expect(users[0].verticalId).toEqual("prfsd165f1s56dueba")
        expect(users[0].rol).toEqual("estudiante")
        expect(users[1].id).toEqual("610de277a6663b52ac859fdb")
        expect(users[1].name).toEqual("julio")
        expect(users[1].email).toEqual("julio@gmail.com")
        expect(users[1].urlPhoto).toEqual("https://lh3.googleusercontent.com/ogw/ADea4I5m38rsb3mMMr0Lnosn5W_3JFpdfg5Rx2ErzzkRTOD=s32-c-mo")
        expect(users[1].phone).toEqual("55555555")
        expect(users[1].firstTime).toEqual(true)
        expect(users[1].verticalId).toEqual("sd1f65s151620")
        expect(users[1].rol).toEqual("calidad")
    })

    test('should bring a void list',async () => {
        
        mockUserRepository.getUsers = () => usersDummies

        const users = await getalluser(mockUserRepository)

        expect(typeof users).toEqual("object")
        expect (users.length).toEqual(2)
    })

})

