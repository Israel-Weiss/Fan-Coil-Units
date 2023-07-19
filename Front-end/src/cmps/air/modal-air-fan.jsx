export function ModalAirFan({ closeModal, onUpdate, towerName, id }) {

    return <div className='modal-air-fan'>
        <p className='title'>Set fan:</p>

        <button className="m-button cool" onClick={() => onUpdate(towerName, id, 'fan', 2)}>Low</button>
        <button className="m-button cool" onClick={() => onUpdate(towerName, id, 'fan', 1)}>Medium</button>
        <button className="m-button cool" onClick={() => onUpdate(towerName, id, 'fan', 0)}>High</button>
        <button className="m-button cool" onClick={() => onUpdate(towerName, id, 'fan', 3)}>Auto</button>
        <hr />
        <button className='m-button close' onClick={closeModal}>Cancel</button>
    </div>
}