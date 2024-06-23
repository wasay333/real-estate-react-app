import "../profile/profile.scss";
import List from '../../component/list/List.jsx'
import Chat from "../../component/chat/Chat.jsx";
import { useNavigate } from "react-router-dom";
import apiRequest from '../../lib/apiRequest.js'
import { useContext } from "react";
import {AuthContext} from '../../context/AuthContext.jsx'
import { Link } from "react-router-dom";
function ProfilePage() {
const navigate = useNavigate()
const {updateUser, currentUser} = useContext(AuthContext)

  const handleLogout = async() =>{
  try {
    await apiRequest.post('auth/logout')
updateUser(null)
    navigate('/')
  } catch (error) {
    
  }
}

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
          <Link to={'/profile/update'}>
            <button>Update Profile</button>
          </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser.userInfo.avatar || '/noavatar.jpg'}
                alt=""
              />
            </span>
            <span>
              Username:<b>{currentUser.userInfo.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.userInfo.email}</b>
            </span>
            <button onClick={handleLogout}>logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;