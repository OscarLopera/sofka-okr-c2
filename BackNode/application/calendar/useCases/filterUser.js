const User = require("../../../domain/user/User")

const filterUser = async (id, OkrRepository, UserRepository) => { 

    const okrsId = await OkrRepository.getByOkrId(id)

    const usuariosList = []

    const managerOkrsId = okrsId.managerId;


    const foundUserOKR = await UserRepository.getUsersById(managerOkrsId)

    usuariosList.push(foundUserOKR[0])

    let result = [];

    usuariosList.forEach(function(item,pos){
        if(usuariosList.indexOf(item) == pos){
            result.push(item)
        }
    })

    return result.map(user => new User(user._id, user.name, user.email, user.urlPhoto, user.phone,
        user.isFirstTime, user.isFirstTime, user.verticalId, user.rol))

    
    /*
    //  const okrsId = await OKRS.findById(id);
      const krList = await KRS.find();

      const listOkr = []

    for (let i = 0; i < krList.length; i++) {
        const krId = krList[i];

        if (krList[i].idOkr === id) {
            listOkr.push(krId)
        }
    }

    // const usuariosList = []


    for (let i = 0; i < listOkr.length; i++) {
        const krIde = listOkr[i];
        const emailOkr = krIde.managerEmail;
        const foundUsers = await Usuarios.find({ email: { $in: emailOkr } })
        usuariosList.push(foundUsers[0])
    }

    // const managerOkrsId = okrsId.managerId;
    // const foundUserOKR = await Usuarios.find({ _id: { $in: managerOkrsId } })
    // usuariosList.push(foundUserOKR[0])

    // const json = usuariosList.map(x => JSON.stringify(x)) 
    // let result = [];
    // json.forEach(function(item, pos) {
    //     if (json.indexOf(item) == pos) {
    //       result.push(JSON.parse(item))
    //     }
    // })
    
    // return result
     */
};

module.exports = filterUser