import { httpService } from "./http.service"

export {
    getFcsList,
    update,
    getFlNums
}

async function getFcsList(towerName, floor) {
    const fcsList = await httpService.get(`fc?tower=${towerName}&floor=${floor}`)
    return fcsList
}

async function update(towerName, fcId, field, val) {
    const body = {
        field,
        val
    }
    const upFc = await httpService.put(`fc/${fcId}?tower=${towerName}`, body)
    return upFc
}

function getFlNums(lengt) {
    const flNums = []
    for (var i = 0; i < lengt; i++) {
        const strNum = '' + i
        flNums.push(strNum.padStart(2, '0'))
    }
    return flNums
}