import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import '../styleSheet/update.css'
import axios from "axios"

const Update = () => {
  const PF = "http://localhost:5000/images/"

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [done, setDone] = useState(false)
  const [file, setFile] = useState(null)

  const { user, dispatch } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type:"UPDATE_START"})
    const updatedUser = {
      userId: user._id,
      name,
      username,
      password
    };

    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename)
      data.append("file", file)
      updatedUser.profilePic = filename;
      try{
        await axios.post("/upload", data)
      }catch(err){
      }
    }
    try{
      const res = await axios.put(`/users/${user._id}`, updatedUser);
      setDone(true)
      dispatch({ type:"UPDATE_SUCCESS" , payload: res.data })
    }catch(err){
      dispatch({ type:"UPDATE_FAILURE" })
    }
  }
  return (
    <div className='section'>
          <div className='blogbox'>
              <div className='partition profpart'>
                <h1 className='updateProfile'>UPDATE PROFILE</h1>
                <div className='profImage'>
                    <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
                
                </div>
                <div className='icons editIcon'>
                <label class="custom-file-upload">
                    <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
                    <i class="fa-solid fa-square-plus changeProf"></i>
                    Custom Upload
                </label>
               </div>
              </div>

              <div className='partition2'>
                <form action="" className='form-group updateForm' onSubmit={handleSubmit}>
                  <input type="text" placeholder={user.name} className='titleInput' autoFocus onChange={(e) => setName(e.target.value)}/>
                  <input type="text" placeholder={user.username} className='titleInput' onChange={(e) => setUsername(e.target.value)}/>
                  <input type="password" placeholder="update password" className='titleInput' onChange={(e) => setPassword(e.target.value)}/>
                  
                  <button type="submit" className='submitbtns'>Update</button>
                </form>
                { done && <span style={{ color: "green"}}> Account Updated !!! </span>}
              </div>
                
            </div>
      </div>
  )
}

export default Update