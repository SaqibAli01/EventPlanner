import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addJoinsEvents, getJoinEvent, getUserData } from '../../store/userSlice';




const JoinEvent = () => {

    const dispatch = useDispatch();
    const userLogin = useSelector((store) => store.userSlice.users[0]?.email);
    console.log("🚀 ~ file: JoinEvent.js:9 ~ userLogin:", userLogin)
    const storeUser = useSelector((store) => store.userSlice.allUserData);
    const joinStore = useSelector((store) => store.userSlice.joinEvents);
    // const joinStoreYss = useSelector((store) => store.userSlice.joinEvents[0].join);
    // console.log("🚀 ~ file: JoinEvent.js:16 ~ joinStoreYss:", joinStoreYss)
    

    // console.log("🚀 ~ file: Dashboard.js:8 ~ Dashboard ", storeUser)

    const [searchText, setSearchText] = useState (userLogin);
    // const [searchTextYes, setSearchTextYes] = useState (joinStoreYss);
    // console.log("🚀 ~ file: JoinEvent.js:23 ~ searchTextYes:", searchTextYes)

    useEffect(()=>{
        dispatch(getJoinEvent());
    },[])

  return (
    <>
            <div className='searchBox'>
                <h1>Join Events</h1>
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
                        <th scope="col">Date</th>
                        <th scope="col">Join</th>
                    </tr>
                </thead>
                

                <tbody>
                    {/* {storeUser?.map((item) => { */}
                    {joinStore?.filter((item)=>item.email.includes(searchText)).map((item, index) => {
                        return (<tr key={index}>
                            <th scope="row">Events Details</th>
                            <td data-title="ID" data-type="currency">{item?.authId}</td>
                            <td data-title="Name" data-type="currency">{item?.name}</td>
                            <td data-title="Email" data-type="currency">{item?.email}</td>
                            <td data-title="date" data-type="currency">{item?.location}</td>
                            <td data-title="date" data-type="currency">{item?.date}</td>
                            
                            <td data-title="desc" data-type="currency">{item?.desc}</td>
                            <td data-title="Date" data-type="currency">{item?.createdAt}</td>
                            <td data-title="Date" data-type="currency">
                            <button type="button" className="btn btn-outline-success btn-warning">{item?.join}</button>

                                </td>

                        </tr>)
                    })}


                </tbody>
            </table>




        </>
  )
}

export default JoinEvent