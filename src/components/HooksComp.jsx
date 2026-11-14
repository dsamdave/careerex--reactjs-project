import { useState } from "react";

const HooksComp = ({ score, setScore }) => {
  // useState
  // useEffect

//   const [score, setScore] = useState(0);

  const [cart, setCart] = useState(0);

  const [name, setName] = useState("David")

//   console.log(score, cart, name)

  return (
    <div>
      <h1>{score}</h1>

      {/* <button onClick={()=> setScore(1) }> Update </button> */}
      <button onClick={()=> setScore( score + 1 ) }> Update </button>

      Cart

        <button onClick={()=> setCart(cart == 0 ? 0 : cart - 1)}> - </button>
        <h1>{cart}</h1>
        <button onClick={()=> setCart(cart + 1)}> + </button>


        {/* name */}

        <h1>{name}</h1>

        <button onClick={()=> setName("Sampson")}>Update Name</button>


    </div>
  );
};

export default HooksComp;
