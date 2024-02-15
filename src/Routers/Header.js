import { Link} from 'react-router-dom';
function Header(){
    return(
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><a href='/contact'>Contact</a></li>
                <li><Link to='/user'>User</Link>

                </li>
            </ul>
        </div>
    )
}

export default Header;