import React from "react";
import ParkingInitialize from "../components/forms/ParkingInitialize";
import "./landing.scss";

const Landing = () => {
  return (
    <div className='user-input p-5'>
      <ParkingInitialize />
    </div>
  );
};

export default Landing;
