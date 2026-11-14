import { useEffect, useState } from "react"



const Hooks2Comp = () => {

     const [score, setScore] = useState(0);
    const [users, setUsers] = useState([])

    // useEffect


    // useEffect( ()=>{ 

    //     console.log(`UseEffect ran ${score}`)
    
    // }, [score] )

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => setUsers(users))
    // }, [])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${score}`)
        .then(response => response.json())
        .then(users => setUsers(users))
    }, [score])

    console.log({ users })


  return (
    <div>
        
              <h1>{score}</h1>

      <button onClick={()=> setScore( score + 1 ) }> Update </button>
    </div>
  )
}

export default Hooks2Comp