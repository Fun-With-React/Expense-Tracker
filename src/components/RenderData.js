import React from 'react'



// const Card = () => {
    
//         apis.map(e=> {
//             return (
//                 <div>
//                  <h2>{e.name}</h2>
//                  <p>{e.age}</p>
//                 </div>
//              ) 
//         })
//             }

const RenderData = () => {
    const apis = [
        {
            name:"Puffer",
            age: 14,
            image: "https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg"
        },
        {
            name:"Bengal Tiger",
            age: 10,
            image: "https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg"
        },
        {
            name:"Whitey",
            age: 22,
            image: "https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg"
        },
    ]
  return (
  <div>
 
  {apis.map(e=> (
    <>
    <div>{e.name} </div>
    <div>{e.age} </div>
    <img src="https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg" alt="" />
    </>
  ))}
   
     
  </div>
  )
}

export default RenderData