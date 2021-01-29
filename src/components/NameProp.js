//Props
//Short for properties
//Parameters of a component function that get passed into the component to aid in its reusablility. 
//Dynamic data that can be assigned to child components. 

//import React from 'react'; for classes only

const NameProp = (props) => { //property returning the React element
return <h1>Hello,{ props.name }</h1>
}

export default NameProp;


