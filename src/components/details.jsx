import React from "react";

const Details = ({info}) => {
  return (
    <div className="text-left border rounded-md p-4">
       
      <h3>First Name: {info.fName}</h3>
      <h3>Last Name: {info.lName}</h3>
      <h3>Email: {info.email}</h3>
    </div>
  );
};

export default Details;
