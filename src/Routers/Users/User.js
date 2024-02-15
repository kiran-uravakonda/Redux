import { Outlet,Link } from 'react-router-dom';
function User(){
    return (
        <div>
            <h1>welcome to <b>User</b> component</h1>

           <div style={{display:'flex',gap:'30px'}}>
           <Link to='orders'>Orders</Link>
           <Link to='profile'>Profile</Link>
           </div>


          <Outlet/>
        </div>
    )
}

export default User;