
export function EventSetting({ closeModal, onUpdate, updateAll, id }) {

    return <div className='alarm-setting'>
        <p className='title'>Events setting:</p>

        <button className="m-button cool" onClick={() => onUpdate(id, 'ack')}>Ack Selected</button>
        <button className="m-button cool" onClick={() => onUpdate(id, 'end')}>Force End</button>
        <button className="m-button cool" onClick={() => updateAll()}>Ack All Alarms</button>
        <hr />
        <button className='m-button close' onClick={closeModal}>Cancel</button>
    </div>
}