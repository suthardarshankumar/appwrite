import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config.js';
import { logout } from '../../features/authSlice.js'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHanlder = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <>
            <button
                className='inline-block px-6 py-2 duration-300 rounded-lg hover:bg-blue-100'
                onClick={logoutHanlder}
            >Logout</button>
        </>
    )
}

export default LogoutBtn;