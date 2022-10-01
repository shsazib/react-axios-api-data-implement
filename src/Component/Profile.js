import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";

const Data = () => {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/");
      setProfileCell(res.data.results[0].cell);
      setProfileEmail(res.data.results[0].email);
      setProfileImage(res.data.results[0].picture.large);
      setProfileName(
        `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  return (
    <>
    <h1>Profile Id Card</h1>
      <div className="profile">
        <div className="card">
          <img src={profileImage} alt="img" />
          <h2>{profileName}</h2>
          <p className="title"><b>Email:</b> {profileEmail}</p>
          <p><b>Phone:</b> {profileCell}</p>
        </div>
        <button onClick={() => profileData()}>New Person</button>
      </div>
    </>
  );
};

export default Data;
