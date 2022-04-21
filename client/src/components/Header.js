import '../styleSheet/header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <div className='big-container'>
        <div className='navbar'>
          <ul className='navbar-links'>
              <li><Link to="/" className='links'>Home</Link></li>
              <li><Link to="/write" className='links'>Write</Link></li>
          </ul>
          <div className='logo'>
            <Link to="/update" className='settings' ><i class="fa-solid fa-gears"></i></Link>
            <input type="text" placeholder='Search' className='search'/>
          </div>
        </div>
      </div>  
  )
}

export default Header