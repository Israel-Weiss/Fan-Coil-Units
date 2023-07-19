import { useState } from "react"
import { AirList } from "../cmps/air/air-list"
import { FloorMenu } from "../cmps/air/floor-menu"

export function AirTower({ tower }) {

    const [floor, setFloor] = useState(null)
    const enterFloor = fl => {
        if (fl < 0 || fl > 39) return
        setFloor('fl' + fl)
    }
    const exitFloor = () => {
        setFloor(null)
    }

    return <div className="air-tower">

        {!floor && <FloorMenu tower={tower} exitFloor={exitFloor} enterFloor={enterFloor} />}

        {floor && <AirList tower={tower} floor={floor} exitFloor={exitFloor} enterFloor={enterFloor} />}
    </div>
}