import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useSelector, useDispatch } from "react-redux";
import { addJoinsEvents, getUserData } from '../../store/userSlice';



const Dashboard = () => {
    const dispatch = useDispatch();
    const storeUser = useSelector((store) => store.userSlice.allUserData);
    console.log("🚀 ~ file: Dashboard.js:8 ~ Dashboard ", storeUser)
    const [searchText, setSearchText] = useState('')

    const joinEventsHandler = (item) => {
        dispatch(addJoinsEvents(item));
        alert(item.authId);
    }
    
  


    useEffect(() => {
        dispatch(getUserData());
    }, [])
    return (
        <>
            <div className='searchBox'>
                <form >
                    <input type="text" class="textbox" placeholder="search by email" onChange={(e) => setSearchText(e.target.value)} />
                    <button type="button" className="btn btn-outline-success btn-warning">
                        Search </button>
                </form>
            </div>


            <table class="responsive-table">
                <caption>Events Details</caption>
                <thead>
                    <tr>
                        <th scope="col">Users</th>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Email</th>
                        <th scope="col">location</th>

                        <th scope="col">Events Date</th>
                        <th scope="col">Descriptions</th>
                        <th scope="col">Time</th>
                        <th scope="col">Join</th>
                    </tr>
                </thead>


                <tbody>
                    {/* {storeUser?.map((item) => { */}
                    {storeUser?.filter((item) => item.email.includes(searchText)).map((item, index) => {
                        return (<tr key={index}>
                            <th scope="row">Events Details</th>
                            <td data-title="ID" data-type="currency">{item?.authId}</td>
                            <td data-title="Name" data-type="currency">{item?.name}</td>
                            <td data-title="Email" data-type="currency">{item?.email}</td>
                            <td data-title="date" data-type="currency">{item?.location}</td>
                            <td data-title="date" data-type="currency">{item?.date}</td>

                            <td data-title="desc" data-type="currency">{item?.desc}</td>
                            <td data-title="Date" data-type="currency">{item?.time}</td>
                            <td data-title="Date" data-type="currency">
                                <button type="button" onClick={(e) => { joinEventsHandler(item) }}
                                    className="btn btn-outline-success btn-warning">{item?.join}</button>
                            </td>

                        

                        </tr>)
                    })}


                </tbody>
            </table>




        </>
    )
}

export default Dashboard