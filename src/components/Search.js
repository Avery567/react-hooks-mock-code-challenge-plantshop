import React, { useState } from "react";

function Search({handleSearch}) {

const [userInput, setUserInput] = useState("")

const addUserInput = (e) => {
  console.log("hi")
  setUserInput(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault();
  // console.log("submitted")
  handleSearch(userInput)
}

  return (
    <div className="searchbar" >
      <label htmlFor="search" >Search Plants:</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          onChange={addUserInput}
        />
      </form>
    </div>
  );
}

export default Search;
