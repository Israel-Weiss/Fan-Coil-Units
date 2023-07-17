import { useEffect, useState } from "react"
import { getUsers } from "../services/user.service"
import { socketService } from "../services/socket.service"
import { UserPrivew } from "../cmps/user-privew"
import { AddUser } from "../cmps/add-user"
import { UpdateUser } from "../cmps/update-user"
import { useSelector } from "react-redux"

export const UserManage = () => {

    const [users, setUsers] = useState()

    useEffect(() => {
        loadUsers()
        socketService.on('user', loadUsers)
        return () => socketService.off('user')
    }, [])

    const loadUsers = async () => {
        const usersList = await getUsers()
        console.log(usersList);
        setUsers(usersList)
        return
    }

    const [userToUp, setUserToUp] = useState(null)

    const loggedInUser = useSelector(state => state.userModule.loggedInUser)

    const openModal = (user) => {
        if (userToUp) return

        if (loggedInUser.authorization < 2) return alert(`Hellow ${loggedInUser.name}! 
        You are not authorized to perform this action. 
        Please login with an authorized user. 
        (Try login with - "name: admin, password: 3333" )`)

        setUserToUp(user)
    }

    const closeModal = () => setUserToUp(null)

    if (!users) return <div>123</div>
    return <div className="user-manage">
        <section className='title'>User Management</section>

        <section className="screen-continer">

            <div className="add-user-continer" >< AddUser /></div>

            <div className="users-list-continer">

                <div className="users-list">
                    <div className="users-menu">
                        <div className="icon"></div>
                        <div className="name">Name</div>
                        <div className="group">Group</div>
                        <div className="edit">Edit</div>
                        <div className="remove">Remove</div>
                    </div>
                    <div className="users">
                        {users.map(user => < UserPrivew user={user} update={() => openModal(user)} key={user._id} />)}
                    </div>

                </div>
            </div>

            {userToUp && < UpdateUser user={userToUp} close={closeModal} />}

        </section>
    </div>
}