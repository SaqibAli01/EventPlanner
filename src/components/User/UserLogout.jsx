import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../config/Firebase";
import { userLogoutFirebase } from "../../store/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const userLoginName = useSelector((store) => store.userSlice.users);
  const userLoginEmail = useSelector(
    (store) => store.userSlice.users[0]?.email
  );
  // const {name} = useSelector((store) => store.userSlice.loginUser[0]);

  console.log("___________________________________");
  // console.log("🚀 ~ Store userLogin Name:", userLoginName);
  // console.log("🚀 ~ Store  Single Usrr:", name);
  console.log("___________________________________");

  const [out, setOut] = useState("Logout");

  const LogoutUsers = () => {
    dispatch(userLogoutFirebase());
    // auth(signOut)
    window.location.reload();
    alert("Logout");
    // console.log("Logout btn")
  };

  const [users, setUsers] = useState(null);
  useEffect(() => {
    // {userLogin ? navigate('/') : navigate('/login')}

    onAuthStateChanged(auth, (user) => {
      // console.log("🚀 ~ file: UserLogin.js:70 ~ onAuthStateChanged ~ user:", user)
      // console.log("----User useEffect----", user)
      if (user) {
        console.log("useEffect User Login is:", user.email);
        setUsers(user);
        // navigate('/')
      } else {
        console.log("User Login is Null Error");
        // setUsers(null);
        navigate("/login");
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom:"15%"
      }}
    >
      <h1>User Already Login </h1>

      <h1>User Email : {userLoginEmail}</h1>

      <button type="button" className="btn btn-danger" onClick={LogoutUsers}>
        Logout
      </button>
    </div>
  );
};

export default UserLogout;
