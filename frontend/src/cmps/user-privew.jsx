import { useSelector } from "react-redux";
import { removeUser } from "../services/user.service";
import userIcon from '../assets/imgs/user.png'

export function UserPrivew({ user, update }) {

    const loggedInUser = useSelector(state => state.userModule.loggedInUser)

    const onRemove = () => {
        if (loggedInUser.authorization < 2) return alert(`Hellow ${loggedInUser.name}! 
        You are not authorized to perform this action. 
        Please login with an authorized user. 
        (Try login with - "name: admin, password: 3333" )`)

        removeUser(user.id)
    }

    let group
    switch (user.authorization) {
        case 0:
            group = 'View only'
            break;
        case 1:
            group = 'Operation'
            break;
        case 2:
            group = 'Administration'
            break;
    }

    return <div className="user-privew">
        <img className='icon' src={userIcon} alt="" />
        <div className="user-name">{user.name}</div>
        <div className="group">{group}</div>
        {!user.default && <div className="update"><button className="btn" onClick={update}>Update</button></div>}
        {user.default && <div className="delete">Immutable</div>}
        {!user.default && <div className="delete"><button className="btn" onClick={onRemove}>Delete</button></div>}
        {user.default && <div className="delete">Immutable</div>}
    </div>
}