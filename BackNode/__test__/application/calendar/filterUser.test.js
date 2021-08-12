const { filterUser } = require('../../../application/calendar/index')
const KRRepository = require('../../../domain/okr/kr/KrRepository')
const UserRepository = require('../../../domain/user/UserRepository')
const OKRRepository = require('../../../domain/okr/okr/Okr-repository')

const mockUserRepository = new UserRepository();
const mockOkrRepository = new OKRRepository();
const mockKrRepository = new KRRepository();
const { usersDummies, okrDummies, krDummies} = require("./dummies/index")


describe('Get users by OKR id', () => {

    test('should bring list of users', async () => {

        mockUserRepository.getUsersById = () => usersDummies
        mockUserRepository.getUsersByEmail = () => usersDummies
        mockOkrRepository.getByOkrId = () => okrDummies
        mockKrRepository.getAllKr = () => krDummies

        const id = "611205b7c39a061e98cce51d"

        const users = await filterUser(id, mockOkrRepository, mockKrRepository, mockUserRepository)

        expect(typeof users).toEqual("object")
        expect (users.length).toEqual(1)
        expect(users[0].id).toEqual("610de277a8823b52ac859fdb")
        expect(users[0].name).toEqual("juan")
        expect(users[0].email).toEqual("juan@gmail.com")
        expect(users[0].urlPhoto).toEqual("https://lh3.googleusercontent.com/ogw/ADea4I5m38rsb3mMMr0Lnosn5W_3JFp5Rx2ErzzkRTOD=s32-c-mo")
        expect(users[0].phone).toEqual("12345678")
        expect(users[0].firstTime).toEqual(true)
        expect(users[0].verticalId).toEqual("prfsd165f1s56dueba")
        expect(users[0].rol).toEqual("estudiante")
    })

    test('should bring a void list',async () => {
        
        mockUserRepository.getUsersById = () => usersDummies
        mockUserRepository.getUsersByEmail = () => usersDummies
        mockOkrRepository.getByOkrId = () => okrDummies
        mockKrRepository.getAllKr = () => krDummies

        const id = "611205b7c39a061e98cce51d"


        const users = await filterUser(id, mockOkrRepository, mockKrRepository, mockUserRepository)

        expect(typeof users).toEqual("object")
        expect (users.length).toEqual(1)
    })

})

