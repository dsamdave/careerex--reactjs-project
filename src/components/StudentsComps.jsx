import { useState } from "react";

const StudentsComps = () => {

      const students = [
    {
        name: "David Sampson",
        email: "davidsampson.ud01@gmail.com",
        score: 70
    },
    {
        name: "Davidd Sampsonn",
        email: "davidsampson.ud02@gmail.com",
        score: 80
    },
    {
        name: "Davidddd Sampsonnnn",
        email: "davidsampson.ud03@gmail.com",
        score: 90
    },
  ]

  const [allStudents, setAllStudents]= useState(students)
  const [addStudents, setAddStudents] = useState(false);
  const [viewStudents, setViewStudents] = useState(true);

  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [score, setScore]= useState(0)






  const handleForm = (e)=>{

    e.preventDefault()
    setAllStudents([...allStudents, { name, email, score}])

    setViewStudents(true)
    setAddStudents(false)

    setName("")
    setEmail("")
    setScore(0)

  }






  return (
    <div>
      {viewStudents && (
        <div className="display">
          <h1>View Students</h1>

          {/* Display */}

          <div className="container">
          {
            allStudents.length > 0 && allStudents.map((each)=>(

                    <div className="card">
                        <h1>{each.name}</h1>
                        <h4>{each.email}</h4>
                        <h6>{each.score}</h6>
                    </div>
            ))
        }
        </div>




          <button 
            onClick={()=> {
                setViewStudents(false)
                setAddStudents(true)
            }}
            className="btn"
            >
                Create student
            </button>
        </div>
      )}





      {
        addStudents && (

        <div>
            <h1>Create Students</h1>

            {/* Form */}

            <div className="form-container">

                <form onSubmit={handleForm}>

                    <div className="input-container">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter name"
                        value={name}
                        onChange={(e)=> setName(e.target.value) }
                         />
                        
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />

                    </div>
                    <div className="input-container">
                        <label htmlFor="score">Score</label>
                        <input type="number" placeholder="Enter score" 
                        value={score}
                        onChange={(e)=> setScore(e.target.value)}
                        />

                    </div>

                    <button type="submit" className="btnn" >Submit</button>
                </form>
            </div>


            <button
                onClick={()=>{
                    setAddStudents(false)
                    setViewStudents(true)
                }}
                className="btn"
            >View Students</button>
        </div>
        )
      }

    </div>
  );
};

export default StudentsComps;
