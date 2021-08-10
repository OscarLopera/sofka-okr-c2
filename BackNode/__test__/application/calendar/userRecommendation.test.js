const {userRecommendationByName} = require('../../../application/calendar/index')
const UserRepository = require('../../../domain/user/UserRepository')
const mockUserRepository = new UserRepository()
const {usersDummies,userError} = require("./dummies/users")


describe('Get users by name with Regex', () => {

    test('should bring list of users',async () => {
        //given
        mockUserRepository.getUsersByName= () => usersDummies
        let name = "j"

        //when
        const users = await userRecommendationByName(name,mockUserRepository)

        //then
        expect(typeof users).toEqual("object")
        expect (users.length).toEqual(2)
        expect(users[0].id).toEqual("610de277a8823b52ac859fdb")
        expect(users[0].name).toEqual("juan")
        expect(users[0].email).toEqual("juan@gmail.com")
        expect(users[0].urlPhoto).toEqual("https://lh3.googleusercontent.com/ogw/ADea4I5m38rsb3mMMr0Lnosn5W_3JFp5Rx2ErzzkRTOD=s32-c-mo")
        expect(users[0].phone).toEqual("12345678")
        expect(users[0].isFirstTime).toEqual(true)
        expect(users[0].verticalId).toEqual("prfsd165f1s56dueba")
        expect(users[0].role).toEqual("estudiante")
        expect(users[1].id).toEqual("610de277a6663b52ac859fdb")
        expect(users[1].name).toEqual("julio")
        expect(users[1].email).toEqual("julio@gmail.com")
        expect(users[1].urlPhoto).toEqual("https://lh3.googleusercontent.com/ogw/ADea4I5m38rsb3mMMr0Lnosn5W_3JFpdfg5Rx2ErzzkRTOD=s32-c-mo")
        expect(users[1].phone).toEqual("55555555")
        expect(users[1].isFirstTime).toEqual(true)
        expect(users[1].verticalId).toEqual("sd1f65s151620")
        expect(users[1].role).toEqual("calidad")
    })

    test('should bring a void list',async () => {
        //given
        mockUserRepository.getUsersByName= () => []
        let name = "j"

        //when
        const users = await userRecommendationByName(name,mockUserRepository)

        //then
        expect(typeof users).toEqual("object")
        expect (users.length).toEqual(0)
    })

    test('should return an error by name',async () => {
        //given
        mockUserRepository.getUsersByName= () => userError
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("the field name cannot be empty  or null"))
        })
   })

   test('should return an error by email, cannot be empty',async () => {
    //given
    mockUserRepository.getUsersByName= () => [{...userError,name:"juan"}]
    let name = "j"
    
    await userRecommendationByName(name,mockUserRepository).catch(error => {
        expect(error).toEqual(new Error("The email cannot be empty"))
    })
})

    test('should return an error by email,  must be grater than 5 characteres',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"s"}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("The email must be greater than 5 characters"))
        })
    })



    test('should return an error by email,  must be a email',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"morajara@com"}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("The email is not valid"))
        })
    })


    test('should return an error by urlPhoto, cant be null',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"morajara@com.co", urlPhoto:null}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("The url field cannot be empty or empty"))
        })
    })

    test('should return an error by urlPhoto, cant be empty',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"morajara@com.co", urlPhoto:""}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("The url field cannot be empty or empty"))
        })
    })
        

    test('should return an error by phone, cant be empty',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"morajara@com.co", urlPhoto:"www.image.com",
            phone:""}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("the phone number field cannot be null or empty"))
        })
    })

    test('should return an error by phone, cant be null',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"morajara@com.co", urlPhoto:"www.image.com",
            phone:null}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("the phone number field cannot be null or empty"))
        })
    })

    test('should return an error by firstTime, cant be null',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"morajara@com.co", urlPhoto:"www.image.com",
            phone:"5555555", isFirstTime:null}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("The first time attribute is required and must be a boolean"))
        })
    })

    test('should return an error by firsTime, cant be void',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"morajara@com.co", urlPhoto:"www.image.com",
            phone:"5555555", isFirstTime:null}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("The first time attribute is required and must be a boolean"))
        })
    })


    test('should return an error by verticalId, cant be void',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"morajara@com.co", urlPhoto:"www.image.com",
            phone:"5555555", isFirstTime:true, verticalId:""}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("the verticalId cannot be empty or empty or null"))
        })
    })

    test('should return an error by verticalId, cant be null',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"morajara@com.co", urlPhoto:"www.image.com",
            phone:"5555555", isFirstTime:true, verticalId:null}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("the verticalId cannot be empty or empty or null"))
        })
    })

    test('should return an error by role, cant be null',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"morajara@com.co", urlPhoto:"www.image.com",
            phone:"5555555", isFirstTime:true, verticalId:"sad89as8", role:null}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("the role field cannot be empty or null"))
        })
    })

    test('should return an error by role, cant be empty',async () => {
        //given
        mockUserRepository.getUsersByName= () => [{...userError,name:"juan", email:"morajara@com.co", urlPhoto:"www.image.com",
            phone:"5555555", isFirstTime:true, verticalId:"sad89as8", role:""}]
        let name = "j"
        
        await userRecommendationByName(name,mockUserRepository).catch(error => {
            expect(error).toEqual(new Error("the role field cannot be empty or null"))
        })
    })
})

