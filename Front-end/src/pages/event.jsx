import { useState, useEffect } from "react"
import { getAlarms, update, updateAll } from "../services/alarm.service"
import { EventPrivew } from "../cmps/event-privew"
import { EventSetting } from "../cmps/event-setting"
import { socketService } from "../services/socket.service"


export const Event = () => {

    useEffect(() => {
        loadAlarms()
        socketService.on('alarm', loadAlarms)
        return () => socketService.off('alarm')
    }, [])

    const [alarms, setAlarms] = useState()

    const loadAlarms = async () => {
        console.log('loadAlarms');
        const alarms = await getAlarms()
        setAlarms(alarms)
    }

    const [modalIdAlarm, setModalId] = useState('')

    const openModal = (alarmId) => {
        setModalId(alarmId)
    }

    const closeModal = () => {
        setModalId('')
    }

    const onUpdate = async (id, field) => {
        await update(id, field)
        closeModal()
        loadAlarms()
    }

    const onUpdateAll = async () => {
        await updateAll()
        closeModal()
        loadAlarms()
    }

    if (!alarms) return <div className="edit">wait</div>
    return <div className="event">
        <section className='title'>
            Events Summary
        </section>

        <table className="event-table">
            <thead>
                <tr className="event-menu">
                    <th className="start-time">Start Time</th>
                    <th className="end-time">End Time</th>
                    <th className="ack-time">Ack Time</th>
                    <th className="zone">Tower</th>
                    <th className="family">Family</th>
                    <th className="txt">Event text</th>
                </tr>
            </thead>
            <tbody>
                {alarms.map(alarm => < EventPrivew alarm={alarm} openModal={openModal} key={alarm._id} />)}
            </tbody>
        </table>

        {modalIdAlarm &&
            < EventSetting closeModal={closeModal} onUpdate={onUpdate} updateAll={onUpdateAll} id={modalIdAlarm} />}

    </div>
}