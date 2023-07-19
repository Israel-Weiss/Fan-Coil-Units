import { useEffect, useRef } from "react"

export function ModalPrompt({ closeModal, onUpdate, towerName, modalParams }) {

    const { fcId, field, max } = modalParams

    useEffect(() => {
        focusInput()
    }, [])

    let val = useRef()
    const inputElement = useRef()
    const focusInput = () => {
        inputElement.current.focus()
        val.current = modalParams.val
    }

    function handleChange(ev) {
        ev.preventDefault()
        val.current = ev.target.value
    }

    return <div className='modal-air-prompt'>
        <p className='title'>Set value</p>
        <form onSubmit={() => onUpdate(towerName, fcId, field, +val.current)}>
            <input className="input" type="number" min="0" max={max} onChange={handleChange} defaultValue={modalParams.val} ref={inputElement} />
            <button className='ok'>OK</button>
        </form>
        <button className='close' onClick={closeModal}>X</button>
    </div>
}