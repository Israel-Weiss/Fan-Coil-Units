import { httpService } from "./http.service"

export {
    getAlarms,
    update,
    updateAll
}

async function getAlarms() {
    const fcsList = await httpService.get(`alarm`)
    return fcsList
}

async function update(alarmId, field) {
    const body = { field }
    const upAlarm = await httpService.put(`Alarm/${alarmId}`, body)
    return upAlarm
}


async function updateAll() {
    const NewList = await httpService.put(`Alarm`)
    return NewList
}