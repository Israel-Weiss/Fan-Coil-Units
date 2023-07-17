export function EventPrivew({ alarm, openModal }) {

    let trClass = 1
    switch (alarm.alarmStatus) {
        case 1:
            trClass = 'event-privew open'
            break;
        case 2:
            trClass = 'event-privew end'
            break;
        case 3:
            trClass = 'event-privew acknolage'
            break;
    }

    return <tr className={trClass} onClick={() => openModal(alarm.id)}>
        <td className="start-time">{alarm.startTime}</td>
        <td className="end-time">{alarm.endTime}</td>
        <td className="ack-time">{alarm.ackTime}</td>
        <td className="zone">{alarm.zone}</td>
        <td className="family">{alarm.family}</td>
        <td className="txt">{alarm.txt}</td>
    </tr>
}
