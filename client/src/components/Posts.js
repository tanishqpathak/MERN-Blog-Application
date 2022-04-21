import '../styleSheet/posts.css'
import Post from "./Post"


const Posts = ({posts}) => {

  return (
    <div className='latest'>
            <h1 className='heading'>BLOGS</h1>
            <div className='blogposts'>
                {posts.map((p) =>
                < Post post={p}/> 
            )}
                        
            </div>
        </div>
  )
}

export default Posts


