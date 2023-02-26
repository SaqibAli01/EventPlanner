import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./home.css";
import { addEvents } from "../../store/userSlice";
import { myEventsAlert } from "../../myAlert";



const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((store) => store.userSlice.users[0]?.email);
  const userId = useSelector((store) => store.userSlice.users[0]?.id);
  console.log("___________________________________");
  console.log("🚀 ~User Login Home Email:", userLogin);
  console.log("🚀 ~User Login Home userId:", userId);
  console.log("___________________________________");

  const eventCreateLoginHandler = () => {
    alert("Kindly Login Your ID");
    navigate("/login");
  };

  const [event, setEvent] = useState({
    id: userId,
    email: userLogin,
    name: "",
    title: "",
    time: "",
    location: "",
    desc: "",
  });

  let name, value;
  const handleInput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setEvent({ ...event, [name]: value });
  };

  const eventCreateHandler = (e) => {
    e.preventDefault();
    const { id, email, name, title, time, location, desc } = event;
    dispatch(addEvents(event));
    myEventsAlert()
    // alert("SuccessFull Create Events");
    navigate("/");

    // console.log("🚀 ~ file: Home.jsx:52 ~ eventCreateHandler ~ event:", event)
    setEvent({
      id: "",
      email: "",
      name: "",
      title: "",
      location: "",
      desc: "",
    });
  };
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Events</h1> */}

      {/*--------------------------- Form ------------------- */}
      <div className="homeF">
        <div class="form">
          <h3 className="hover">Events Create</h3>

          <input
            type="text"
            placeholder="Your ID"
            name="id"
            required
            value={event.id}
            onChange={userId}
            className="hover"
          />
          <input
            type="email"
            placeholder="Your email"
            name="email"
            required
            value={event.email}
            onChange={userLogin}
            className="hover"
          />
          <input
            type="text"
            placeholder="Your title"
            name="title"
            required
            value={event.title}
            onChange={handleInput}
            className="hover"
          />
          <input
            type="text"
            placeholder="Your location"
            name="location"
            required
            value={event.location}
            onChange={handleInput}
            className="hover"
          />
          <input
            type="time"
            placeholder="Your creator"
            name="time"
            required
            value={event.time}
            onChange={handleInput}
            className="hover"
          />
          <input
            type="date"
            placeholder="Your location"
            name="date"
            required
            value={event.date}
            onChange={handleInput}
            className="hover"
          />
          <input
            type="text"
            placeholder="Your description"
            name="desc"
            required
            value={event.desc}
            onChange={handleInput}
            className="hover"
          />
          <input
            type="text"
            placeholder="Your creator"
            name="name"
            required
            value={event.name}
            onChange={handleInput}
            className="hover"
          />

          {userLogin ? (
            <a type="button" onClick={eventCreateHandler}>
              Create Events
            </a>
          ) : (
            <a type="button" onClick={eventCreateLoginHandler}>
              Create Events
            </a>
          )}
        </div>
      </div>

      {/* <div class="circle"></div>
<div class="circle-1"></div>
<div class="circle-2"></div> */}
    </>
  );
};

export default Home;
