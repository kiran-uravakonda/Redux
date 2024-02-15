import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import User from './Users/User'
import Profile from './Users/Profile'
import Orders from './Users/Orders'
import NoPage from './NoPage'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
function Routing(){
    return(
        <div>
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/User' element={<User/>}>
        <Route path='profile' element={<Profile/>}/>
        <Route path='orders' element={<Orders/>}/>
        </Route>
        <Route path="*" element={<NoPage />} />
       </Routes>
       </BrowserRouter>
      </div>
    )
}

export default Routing;