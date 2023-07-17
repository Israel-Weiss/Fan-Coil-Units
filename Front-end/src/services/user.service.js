import { httpService } from "./http.service"

export  {
    getUsers,
    getUser,
    checkUser,
    addUser,
    updateUser,
    removeUser
}

async function getUsers(grup) {
    let users = await httpService.get(`user?grup=${grup}`)
    return users
}

async function getUser(userId) {
    let users = await httpService.get(`user/${userId}`)
    return users
}

async function checkUser(name, password) {
    const user = await httpService.get(`user/check?userName=${name}&password=${password}`)
    return user
}

async function addUser(name, password, authorization) {
    const body = {
        name,
        password,
        authorization
    }
    const user = await httpService.post(`user`, body)
    return user
}

async function updateUser(userId, password, authorization) {
    const body = {
        password,
        authorization
    }
    const user = await httpService.put(`user/${userId}`, body)
    return user
}

async function removeUser(userId) {
    console.log(userId);
    const succassfully =  await httpService.delete(`user/${userId}`)
    return succassfully
}
