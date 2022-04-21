import '../styleSheet/section.css';
import {Link} from 'react-router-dom';

const Section = () => {

  return (
      
        <div className='section'>
            <h1 className='heading'>BLOGS</h1>
            <div className='main'>
                <div className='main-image'>
                    <img src="https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className='author'>
                    <p>Author - <span className='title'>John Doe</span></p>
                    <p>22 November, 2021</p>
                </div>
            </div>
            <div className='paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker </div>
            <Link className='readmore' to='/blog'>read more...</Link>
        </div>
        
    
  )
}

export default Section