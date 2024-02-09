import React from "react";
// import Fragment from "../components/Fragments";
// import { Link } from "react-router-dom";
import Navbar from "../components/navbar";


const USER = "Alex";



export default function Home() {
  return (
    <div>
      <h1>Welcome Home, {USER}</h1>
      <h1>To DO</h1>
      <h2>Create Navbar</h2>
      <h2>Create logging function</h2>
      <p> Other information</p>
      <Navbar></Navbar>
    </div>
  )
}