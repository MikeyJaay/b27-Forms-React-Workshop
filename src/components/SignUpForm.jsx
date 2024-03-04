import axios from "axios";
import { useState } from "react";




function SignUpForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
async function handleSubmit (event) {
    event.preventDefault();
    console.log('Hello!');

  try { 
  } catch (error) {
    setError(error.message);
  }



}

    return (
        <>
            <h2>Sign Up!</h2>
        {error && <p>{error}</p>}


            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default SignUpForm;
