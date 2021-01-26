import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const ParkingInitialize = () => {
  const [number, setNumber] = useState(0);
  let dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number === 0) {
      alert("Please input a number greater than 0");
    } else {
      dispatch({
        type: "TOTAL_PARKING_LOT",
        payload: {
          maxParkingLots: number,
          totalCarsParked: 0,
          parkedCars: [],
        },
      });
      history.push("/user-input");
    }
  };
  return (
    <div>
      <h4>Parking Initialization</h4>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Enter Number of Maximum Parking Slots</label>
          <input
            type='number'
            className='form-control'
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            value={number}
            autoFocus
            required
          />
          <br />
          <button className='btn btn-primary'>Set Parking Lots</button>
        </div>
      </form>
    </div>
  );
};

export default ParkingInitialize;
