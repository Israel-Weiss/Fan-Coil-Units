import { useEffect, useRef, useState } from 'react'
import { checkUser } from '../services/user.service'
import userIcon from '../assets/imgs/user.png'

export function Login({ login, close }) {

    const [incorrect, setIncorect] = useState(false)

    useEffect(() => {
        focusInput()
    }, [])

    const inputElement = useRef()
    const focusInput = () => {
        inputElement.current.focus()
    }
    
    const userName = useRef()
    const userPassword = useRef()

    const handleChange = (ev) => {
        ev.preventDefault()
        if (ev.target.name === 'userName') userName.current = ev.target.value
        else userPassword.current = ev.target.value
        if (incorrect) setIncorect(false)
    }

    const onCheckUser = async (ev) => {
        ev.preventDefault()
        const user = await checkUser(userName.current, userPassword.current)
        if (!user) return setIncorect(true)
        login(user)
        close()
    }

    return <div className="login-continer">
        <p className='title'>Login user</p>
        <form onSubmit={onCheckUser}>
            <label htmlFor="">User name: </label>
            <input className='input' type="text" name='userName' onChange={handleChange} ref={inputElement}/>
            <label htmlFor=""> &nbsp; Password: </label>
            <input className='input' type="text" name='password' onChange={handleChange} />
            <button className='ok'>OK</button>
            {incorrect && <p className='incorrect'>Error! name or password is incorrect Please try again</p>}
        </form>
        <img className='icon' src={userIcon} alt="" />
        <button className='close' onClick={close}>X</button>
    </div>
}