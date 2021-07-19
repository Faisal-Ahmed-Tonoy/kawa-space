import React from 'react'



const User =(props) =>{
    const user =props.user;
    console.log("hello",user);
    

      
   
   
    return (
        <div>
         User Added :   {user.length}
           
         

        </div>
    );

};
export default User;