import { useRef } from "react"
import { Link } from "react-router-dom"
import { FloorButton } from "./floor-button"
import { getFlNums } from "../../services/fc.service"
import towerA from '../../assets/imgs/tA.jpg'
import towerB from '../../assets/imgs/tB.jpg'
import towerC from '../../assets/imgs/tC.jpg'
import towerD from '../../assets/imgs/tD.jpg'

export function FloorMenu({ tower, exitFloor, enterFloor }) {

    let towerImg
    switch (tower) {
        case 'A':
            towerImg = towerA
            break;
        case 'B':
            towerImg = towerB
            break;
        case 'C':
            towerImg = towerC
            break;
        case 'D':
            towerImg = towerD
            break;
    }

    const flNums = useRef([])
    if (flNums.current.length < 2) flNums.current = getFlNums(40)

    return <div >
        <section className='title-continer'>
            <Link to={'/air'}>
                <button className="button go-back" onClick={exitFloor}>Tower menu</button>
            </Link>
            Room control - Tower {tower} - Floor menu
        </section>
        <section className="screen-continer">
            <img className="img img1" src={towerImg} alt="" />
            <img className="img img2" src={towerImg} alt="" />
            <img className="img img3" src={towerImg} alt="" />
            <section className="buttons-continer">
                {flNums.current.map(fl => < FloorButton floor={fl} enterFloor={enterFloor} key={fl} />)}
            </section>
        </section>
    </div>
}