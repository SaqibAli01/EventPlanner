import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/Firebase';
import { getLoginUser, getUserData } from '../../store/userSlice';




const Navbar = () => {
    const dispatch = useDispatch();
    // const { userRole } = useSelector((store) => store?.userSlice?.loginUser?.length ? store?.userSlice?.loginUser[0] : {});
    const userLogin = useSelector((store) => store.userSlice.users[0]?.email);
    // console.log("___________________________________")
    console.log("🚀 ~ Store userLogin:", userLogin)
    // console.log("___________________________________")
    const [getUser, setGetUser] = useState(null)
    console.log("🚀 getUser:", getUser)
    useEffect(() => {
        setGetUser(userLogin)
        dispatch(getLoginUser(getUser));

    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Hackathon Task</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active" >
                                <Link to='/'>

                                    <a className="nav-link" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item " >
                                <Link to='/events'>

                                    <a className="nav-link" aria-current="page">Events</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* {userRole && userRole === "admin" && */}

                                <Link to='/home'>
                                    <a className="nav-link" >Create My Events </a>
                                </Link>


                                {/* } */}
                            </li>
                            <li className="nav-item">
                                {/* {userRole && userRole === "admin" && */}
                                {userLogin ?

                                    <Link to='JoinEvent'>
                                        <a className="nav-link" >Join Events</a>
                                    </Link>
                                    :
                                    ""
                                }


                                {/* } */}
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Join Events
                                </a>
                            </li> */}

                            <li className="nav-item">
                                <a className="nav-link">{userLogin}</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button> */}
                            {/* <button className="btn btn-outline-success btn btn-warning" type="submit">SignUp</button> */}
                            {/* <button type="button" className="btn btn-danger">Danger</button> */}
                            {userLogin ?
                                <Link to="/logout">
                                    <button type="button" className="btn btn-outline-success btn-danger">
                                        Logout </button>
                                </Link>
                                :
                                <Link to="/login">
                                    <button type="button" className="btn btn-outline-success btn-warning">
                                        Sign-In </button>
                                </Link>
                            }

                            {/* {user ? */}
                            <Link to="/register">
                                <button type="button" className="btn btn-outline-success btn-warning">
                                    Sign-Up
                                </button>
                            </Link>
                            {/* //     :
                            //     <Link to="/register">
                            //         <button type="button" className="btn btn-outline-success btn-warning">Log-Up</button>
                            //     </Link>
                                
                            // } */}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar