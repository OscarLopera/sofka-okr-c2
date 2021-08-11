const User = require("../../../domain/user/User")

const filterUser = async (id, OkrRepository, KrRepository, UserRepository) => {

    const okrsId = await OkrRepository.getByOkrId(id)
    const krList = await KrRepository.getAllKr();
    
    const usuariosList = []
    const listOkr = []

    for (let i = 0; i < krList.length; i++) {
        const krId = krList[i];

        if (krList[i].idOkr === id) {
            listOkr.push(krId)
        }
    }

    for (let i = 0; i < listOkr.length; i++) {
        const krIde = listOkr[i];
        const emailOkr = krIde.managerEmail;
        const foundUsers = await UserRepository.getUsersByEmail(emailOkr)
        usuariosList.push(foundUsers[0])
    }

    const managerOkrsId = okrsId.managerId;
    const foundUserOKR = await UserRepository.getUsersById(managerOkrsId)
    usuariosList.push(foundUserOKR[0])

    const arrayUniqueByKey = [...new Map(usuariosList.map(item =>
        [item.email, item])).values()];

    return arrayUniqueByKey.map(user => new User(user._id, user.name, user.email, user.urlPhoto, user.phone,
        user.isFirstTime, user.isFirstTime, user.verticalId, user.rol))
};

module.exports = filterUser