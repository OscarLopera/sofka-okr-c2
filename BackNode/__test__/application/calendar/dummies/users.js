const usersDummies = [
    {
        _id: "610de277a8823b52ac859fdb",
        name: "juan",
        email: "juan@gmail.com",
        urlPhoto: "https://lh3.googleusercontent.com/ogw/ADea4I5m38rsb3mMMr0Lnosn5W_3JFp5Rx2ErzzkRTOD=s32-c-mo",
        phone: "12345678",
        rol: "estudiante",
        verticalId: "prfsd165f1s56dueba",
        firstTime: true
      },
      
      {
        _id: "610de277a6663b52ac859fdb",
        name: "julio",
        email: "julio@gmail.com",
        phone: "55555555",
        urlPhoto: "https://lh3.googleusercontent.com/ogw/ADea4I5m38rsb3mMMr0Lnosn5W_3JFpdfg5Rx2ErzzkRTOD=s32-c-mo",
        rol: "calidad",
        verticalId: "sd1f65s151620",
        firstTime: true
      },
]


const userError = [{
       _id: "610de277a6663b52ac859fdb",
        name: "",
        email: "",
        phone: "",
        urlPhoto: "",
        rol: "",
        verticalId: "",
        firstTime: null
}]

module.exports = {usersDummies, userError};