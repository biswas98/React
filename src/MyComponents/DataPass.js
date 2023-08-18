import React from "react";

export default function DataPass(props) {
  console.log(props);
  return (
    <div>
      {props.name}<br/>
      {props.age}<br/>
      {props.gender} 
    </div>
  );
}