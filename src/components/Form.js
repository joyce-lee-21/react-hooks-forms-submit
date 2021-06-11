import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //first name is required
    if (firstName.length > 0) {
      //taking input from the form and mapping it to props
      const formData = {firstName: firstName, lastName: lastName};
      //creating a new array to include already submitted data along with new formData
      const dataArray = [...submittedData, formData]
      //re-set the above array as the current state
      setSubmittedData(dataArray);
      //reset the input form after submission
      setFirstName("");
      setLastName("");
      setErrors("");
    } else {
      setErrors("First name is required!");
    }
  }

  //taking all submissions and adding each to the page via .map()
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      // returning each submission in a div, with key of each index[#] in the array as an identifier
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" placeholder="Last Name" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* Conditionally render error messages */}
      <p style={{ color: "red" }}>{errors}</p>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
