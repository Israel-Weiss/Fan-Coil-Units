export function ModalAirCom({ closeModal, onUpdate, towerName, id }) {

    return <div className='modal-air-com'>
        <p className='title'>Command:</p>

        <button className="m-button on" onClick={() => onUpdate(towerName, id, 'com', 1)}>ON</button>
        <button className="m-button off" onClick={() => onUpdate(towerName, id, 'com', 0)}>OFF</button>
        <button className="m-button auto" onClick={() => onUpdate(towerName, id, 'com', 2)}>AUTO</button>
        <hr />
        <button className='m-button close' onClick={closeModal}>Cancel</button>
    </div>
}