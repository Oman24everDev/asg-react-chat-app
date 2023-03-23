import { UserAuth } from "../context/AuthContext"

const Navbar = () => {

    const {currentUser, logout} = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="navbar bg-blue-900 text-primary-content px-8">
            <div className="containerWrap flex justify-between">
                <p className="font-bold text-xl">ASG Chat</p>
                {currentUser ? <button onClick={handleLogout}>Logout</button> : ''}
            </div>
        </div>
    )
}

export default Navbar