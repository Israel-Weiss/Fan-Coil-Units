import { mode, fan, com, status, alarm, animation } from "../../services/field.params"

export function AirPrivew({ fc, openModal }) {

    return <div className="fc-list">
        <div className="fc-oper-line">

            <div className="display fc-num">{fc.num}</div>
            <div className="display fc-description">{fc.description}</div>
            <div className="display fc-status">
                <p className={status[fc.status].class}>{status[fc.status].txt}</p>
            </div>

            <button className="button fc-comand" onClick={() => openModal(fc.id, 'com')}>
                <p className={com[fc.comand].class}>{com[fc.comand].txt}</p>
            </button>

            <div className="display fc-temp">{fc.temp} ℃</div>

            <button className="button fc-sp-temp" onClick={() =>
                openModal(fc.id, 'temp-sp', fc.spTemp, 50)}>{fc.spTemp} ℃</button>

            <button className="button fc-mode" onClick={() => openModal(fc.id, 'mode')}>
                <p className={mode[fc.mode].class}>{mode[fc.mode].txt}</p>
            </button>

            <button className="button fc-fan" onClick={() => openModal(fc.id, 'fan')}>
                <p className={fan[fc.fan].class}>{fan[fc.fan].txt}</p>
            </button>

            <button className="button fc-interval-to-alarm" onClick={() =>
                openModal(fc.id, 'interval-alarm', fc.intervalToAlarm, 20)}>{fc.intervalToAlarm} ℃</button>

            <button className="button fc-time-to-alarm" onClick={() =>
                openModal(fc.id, 'time-alarm', fc.timeToAlarm, 999)}>{fc.timeToAlarm} sec</button>

            <div className="display fc-alarm">
                <p className={alarm[fc.alarm].class}>{alarm[fc.alarm].txt}</p>
            </div>
            <div>{animation[fc.status]}</div>
        </div>
    </div>
}
