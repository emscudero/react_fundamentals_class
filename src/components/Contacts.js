const Contacts = (props) => { //property returning the React element
    return (
    <>
        <h3>{props.name} </h3>
    <p>I'm {props.age} years old and graduated from {props.school} in 
   {props.graduationYear} </p>
   </>

)
}

            










    export default Contacts;