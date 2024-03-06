"use client";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Home() {
  const [message, setMessage] = useState([]);


  const getMessages = async () => {
    const response = await axios.get("/api/test");
    setMessage(response.data.message);
  };

  useEffect(() => {
    getMessages();    
  }, []);

console.log(message);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
