import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 1. Import axios
import './App.css';

// Define a type for the expected API response for better type safety
interface ApiResponse {
  message: string;
}

function App() {
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    // 2. Create an async function inside useEffect to use await
    const fetchGreeting = async () => {
      try {
        // 3. Make the GET request with axios
        // The response data is automatically parsed as JSON and is available on `response.data`
        const response = await axios.get<ApiResponse>('http://localhost:5000');
        
        // 4. Set the state with the message from the response
       const  data = response.data
        setGreeting(data.message || 'No message received');
        console.log("Greeting fetched successfully:", response.data);
      } catch (error) {
        // 5. Axios provides more detailed error objects
        console.error("Failed to fetch greeting:", error);
        if (axios.isAxiosError(error)) {
          console.error("Axios error details:", error.response);
        }
        setGreeting('Failed to connect to server. Is it running?');
      }
    };

    fetchGreeting(); // Call the async function
  }, []); // The empty array ensures this effect runs only once when the component mounts

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Professional Electron App</h1>
        <p>
          Message from server: <strong>{greeting || "Loading..."}</strong>
        </p>
      </header>
    </div>
  );
}

export default App;