
export function FloorButton({ floor, enterFloor }) {

    return <button className="floor-button" onClick={() => enterFloor('' + floor)}>
        FLOOR {+floor}
    </button>
}
