// import data from '../Store/store'
// console.log(data.getState())
import { useSelector } from 'react-redux';
function Account() {
    let value=useSelector((store)=>{
       
        return store;
    })
    // console.log(value)
    return (
        <>
            <h1>Account Component</h1>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>

                        <th scope="col">Balance</th>
                        <th scope="col">FullName</th>
                        <th scope="col">PhoneNumber</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                       <td>{value.balance}</td>
                        <td>{value.fname}</td>
                        <td>{value.phoneNumber}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Account;