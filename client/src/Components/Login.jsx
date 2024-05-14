import { useState } from "react";
export default function Login({onLogin, setClientId}){
    const [username, setUsername] = useState('');

    function handleClick(){
        if(!username.trim()){return;}
        onLogin && onLogin(username);
        console.log("In login the username is: ",username);

        fetch('http://localhost:5000/clientId',{
            method: 'GET',
            // headers:{'Content-Type': 'text/plain'}
        })
            .then(res=>{
                // console.log("The data from server is: ",res.data);
                return res.text();
            })
            .then(data=>{
                console.log("Client id is: ", data);
                setClientId(data);
            })
            .catch(error=>console.log("Cant fetch client id: ", error));
    }

    return(
        <>
            <div>
                <label htmlFor="username">Enter user name</label>
                <input id="username" onInput={(e)=>setUsername(e.target.value)} btype="text"/>
                <button onClick={()=>handleClick(onLogin)}>Login</button>
            </div>
        </>
    )
}
