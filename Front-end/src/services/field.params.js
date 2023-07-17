import fanOff from '../assets/imgs/off.jpg'
import fanOn1 from '../assets/imgs/on1.jpg'
import fanOn2 from '../assets/imgs/on2.jpg'

const mode = [
    {txt: 'COOL', class: "cool"},
    {txt: 'HEAT', class: "heat"},
    {txt: 'FAN', class: "fan"},
    {txt: 'AUTO', class: "auto"}
]

const fan = [
    {txt: 'High', class: "high"},
    {txt: 'Medium', class: "medium"},
    {txt: 'Low', class: "low"},
    {txt: 'Auto', class: "auto"}
]

const com = [
    {txt: 'OFF', class: "off"},
    {txt: 'ON', class: "on"},
    {txt: 'AUTO', class: "auto"}
]

const status = [
    {txt: 'OFF', class: "off"},
    {txt: 'ON', class: "on"}
]

const alarm = [
    {txt: 'OK', class: "ok"},
    {txt: 'ALARM', class: "alarm"},
    {txt: 'OK*', class: "ok"}
]

const animation = [
    <img className="img off" src={fanOff} alt="" />,
    <div className='animation-continer'>
        <img className="img on1" src={fanOn1} alt="" />
        <img className="img on2" src={fanOn2} alt="" />
    </div>
]

export {
    mode,
    fan,
    com,
    status,
    alarm,
    animation
}
