import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import '../styleSheet/write.css'


const Write = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename)
      data.append("file", file)
      newPost.photo = filename;
      try{
        await axios.post("/upload", data)
      }catch(err){
      }
    }
    try{
      const res = await axios.post("/posts", newPost);
      window.location.replace("/blog/"+ res.data._id);
    }catch(err){
    }
  }

  return (
      <div className='section'>
          <div className='blogbox'>
          
                <div className='partition'>
                    <div className='blogImage'>
                      { file && 
                        <img src={URL.createObjectURL(file)} alt="" />
                      }
                    </div>
                    <div className='icons editIcon'>
                  </div>
              </div>
                  

              <div className='partition2'>
                <form action="" className='form-group' onSubmit={handleSubmit}>  
                  <input type="text" placeholder='your title here ...' className='titleInput' onChange={(e) => setTitle(e.target.value)}/>
                  <textarea name="" placeholder="body ..." cols="60" rows="20" className='titleInput' onChange={(e) => setDesc(e.target.value)}></textarea>
                  <div class="image-upload">
                    <label for="file-input">
                      <i class="fa-solid fa-square-plus" style={{ fontSize:"14px", cursor:"pointer", letterSpacing:"2px"}} > Add File</i>
                    </label>
                    <input id="file-input" type="file" onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                  <input type="submit" value="Add" className='submitbtns'/>
                </form>
              </div>
            </div>
      </div>
  )
}

export default Write