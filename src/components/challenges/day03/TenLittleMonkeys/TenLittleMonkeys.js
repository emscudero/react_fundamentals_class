/*10 Little Monkey Challenge
Are you ready?
Create a button that when clicked you will subtract one monkey from the total. If it is zero you should display the following:
There is no more monkeys jumping on the bed
Otherwise you should display the following:
10 monkeys jumping on the bed one fell of and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed.
Create a new component
use useState
Initialize your monkey count to 10*/


import React, { useState } from 'react';


const TenLittleMonkeys = () => {
    const [count, setCount] = useState(10);

    function handleClick () {
        //subtract count
        
        if (count != 0){
        setCount(count - 1);
    }}
    
        return(
            <div>
                <p>{count != 0 ? `${count} little monkeys jumping on the bed` : "no more monkeys jumping on the bed"}</p>
               
                
                <button onClick = {handleClick}>Click here</button>
                   
               </div>
                
        );
    };
        
    
    export default TenLittleMonkeys;