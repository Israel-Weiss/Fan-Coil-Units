import { useState } from "react"
import { addUser } from "../services/user.service"
import { useSelector } from "react-redux"

export function AddUser() {

    const [formFields, setFormFields] = useState({
        userName: '',
        userPassword: '',
        authorization: 0
    })

    const loggedInUser = useSelector(state => state.userModule.loggedInUser)

    const handleChange = (ev) => {
        ev.preventDefault()
        const field = ev.target.name

        if (field === 'authorization') setFormFields({ ...formFields, authorization: +ev.target.value })
        else setFormFields({ ...formFields, [field]: ev.target.value })
    }

    const onAddUser = async (ev) => {
        ev.preventDefault()

        if (loggedInUser.authorization < 2) return alert(`Hellow ${loggedInUser.name}! 
        You are not authorized to perform this action. 
        Please login with an authorized user. 
        (Try login with - "name: admin, password: 3333" )`)
        if (!formFields.userName) return alert('Please set a username!')
        if (!formFields.userPassword) return alert('Please set a password!')

        await addUser(formFields.userName, formFields.userPassword, formFields.authorization)

        setFormFields({ userName: '', userPassword: '', authorization: 0 })
    }

    return <div className="add-user">
        <p className='subtitle'>Add User</p>

        <form onSubmit={onAddUser}>
            <div className="lable">
                <label htmlFor="">User name: </label>
                <input className='input' id="user-name" type='text' name='userName' onChange={handleChange} value={formFields.userName} />
            </div>

            <div className="lable">
                <label htmlFor=""> &nbsp; Password: </label>
                <input className='input' id="password" type='text' name='userPassword' onChange={handleChange} value={formFields.userPassword} />
            </div>

            <div className="lable">
                <label htmlFor=""> &nbsp; &nbsp; &nbsp; &nbsp;Group: </label>
                <select className='select' id="group" name='authorization' onChange={handleChange} value={formFields.authorization} >
                    <option value='0'>View only</option>
                    <option value='1'>Operation</option>
                    <option value='2'>Administration</option>
                </select>
            </div>

            <div className="lable">
                <button className='apply'>Apply</button>
            </div>
        </form>
    </div>
}