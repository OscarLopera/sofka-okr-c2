const { filterUser } = require('../../application/calendar/index')
const UserRepository = require('../../domain/user/UserRepository')
const OKRRepository = require('../../domain/okr/okr/Okr-repository')
const mockUserRepository = new UserRepository();
const mockOkrRepository = new OKRRepository();
const { usersDummies, okrDummies, userError, okrError} = require("./dummies/index")


describe('Get users by OKR id', () => {

    test('should bring list of users', async () => {

        mockUserRepository.getUsersById = () => usersDummies

        mockOkrRepository.getByOkrId = () => okrDummies

        const id = "611205b7c39a061e98cce51d"

        const users = await filterUser(id, mockOkrRepository, mockUserRepository)

        expect(typeof users).toEqual("object")
        expect (users.length).toEqual(1)
        expect(users[0].id).toEqual("610de277a8823b52ac859fdb")
        expect(users[0].name).toEqual("juan")
        expect(users[0].email).toEqual("juan@gmail.com")
        expect(users[0].urlPhoto).toEqual("https://lh3.googleusercontent.com/ogw/ADea4I5m38rsb3mMMr0Lnosn5W_3JFp5Rx2ErzzkRTOD=s32-c-mo")
        expect(users[0].phone).toEqual("12345678")
        expect(users[0].isFirstTime).toEqual(true)
        expect(users[0].verticalId).toEqual(true)
        expect(users[0].role).toEqual("prfsd165f1s56dueba")

    })

    test('should bring a void list',async () => {

        mockUserRepository.getUsersById = () => usersDummies

        mockOkrRepository.getByOkrId = () => okrDummies

        const id = "611205b7c39a061e98cce51d"


        const users = await filterUser(id, mockOkrRepository, mockUserRepository)

        expect(typeof users).toEqual("object")
        expect (users.length).toEqual(1)
    })

})

