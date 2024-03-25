import React, { useState } from 'react';

function HeaderCard() {
  const [selectedOption, setSelectedOption] = useState();
  const [data, setData] = useState()

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div style={{
        color:"#33186B",
        display:'flex',
        fontSize:"18px",
        
      }}>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          Single Trip
        </label>

        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          Round Trip
        </label>

        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
          MultiCity
        </label>
      </div>
      <div style={{
        display: 'flex',
        color:"blue",
      margin:"25px",

      }}>

        <label from='from'>From</label>
        <input
          name='from'
          type='text' />

        <label from='to'>To</label>
        <input
          name='to'
          type='text' />



        <label from='dept'>From</label>
        <input
          name='dept'
          type='date'
          value={new Date().toISOString().slice(0, 10)} />
      </div>
      <div style={{
        fontSize: 20,
        color:"#7D0A0A",
        
      }}>
        <label> Select A Fair Types::</label>
      <label>
          <input
            type="radio"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
          />
          Regular
        </label>

        <label>
          <input
            type="radio"
            value="option5"
            checked={selectedOption === "option5"}
            onChange={handleOptionChange}
          />
          Student
        </label>

        <label>
          <input
            type="radio"
            value="option6"
            checked={selectedOption === "option6"}
            onChange={handleOptionChange}
          />
          Senior Citizen
        </label>
        <label>
          <input
            type="radio"
            value="option 4"
            checked={selectedOption === "option 4"}
            onChange={handleOptionChange}
          />
          Armed force
        </label>
        <button style={{
          backgroundColor:"#FFF78A",
          padding:"8px"
        }}>Search Here</button>

      </div>
    </>
  );

}


export default HeaderCard;
