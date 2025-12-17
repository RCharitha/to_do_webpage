import React, { useState } from "react";

function UserName() {
  const [name, setName] = useState("");

  return (
    <>
      <label>
        Name:
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      
    </>
  );
}

export default UserName;
