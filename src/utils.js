export function login({email,password}){
   // const delay = (0.7 + Math.random() * 2) * 1000
    return new Promise((resolve,reject) => {
        setTimeout(() => {
         if(password === 'Pa55word' && email){
            resolve()
         } 
         else if(!email || !password){
            reject(new Error("Please fill in credentials"))
         }
         else {
            reject(new Error("Invalid email or password"))
         }
        }, 3000);
    })
}
//I replaced delay by 1000ms