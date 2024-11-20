import { useEffect, useState } from "react"
import User from "./user"
import './styles.css';




export default function GithubProfileFinder(){
   const [userName, setUserName] = useState('Hellobisrat') 
   const [errorMessage, setErrorMessage]=useState('') 
   const [userData,setUserData]=useState(null)
   const [loading,setLoading]=useState(false)
   function handleSubmit(){
    fetchGithubUserData()
    }

    async function fetchGithubUserData() {
      try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        if(data.ok){
          
          setUserData(data) 
         
        } else {
          setErrorMessage(errorMessage)
        }
        setLoading(false)
        setUserName('')
               
      } catch (error) {
        setErrorMessage("something went wrong ")
      }
      
    }
   useEffect(()=>{
    fetchGithubUserData()
   })

   if(loading){
    return <h1>Loading....</h1>
   }
   if(errorMessage){
    return <h1>something going wrong ..</h1>

    }
    return <div className="github-profile-container">
    <div className="input-wrapper">
       <input 
        name="search-by-username"
        type="text"
        placeholder="Search Github Username"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>
            Search 
        </button>
        {userData !== null ? <User user={userData}/>:null}
    </div>
   </div>
   }
  

 
