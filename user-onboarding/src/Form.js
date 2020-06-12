import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";


const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  email: yup.string().email().required("Must be a valid email address.")  ,
  password: yup.string().required(),
  terms: yup.boolean().oneOf([true]),
})




function Form() {
  //   declare states and initialize to an object
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

// this ensures that an actual email is entered
const validateEmail = (email) => {
  // email must have @ and 2 character after the .


}


  return (


  // this makes it so that whatever the user types in will be saved as values:
  const inputChanges = (e) => {

    // console.log("show input", e.target.value);

    if(e.target.name === "email"){
      validateEmail(e.target.value)
    }

    let value =
      e.target.type === "checkbox" ? e.target.checkcked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    }); /* ... the ellipses are called spread operator, they copy over data */
  };

  //   this works the submit button:
  const submitForm = (e) => {
    e.preventDefault();
    setFormState({
      name: "",
      email: "",
      password: "",
      terms: "",
    });
  };


    <form>
      <label>
        Name
        <input
          type="text"
          name="name" /* name is computed key:value in [event.target.name]: event.target.value  */
          id="name"
          value={formState.name}
          onChange={inputChanges}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="email"
          id="email"
          value={formState.email}
          onChange={inputChanges}
        />
      </label>
      <label>
        Password
        <input
          type="text"
          name="password"
          id="password"
          value={formState.password}
          onChange={inputChanges}
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={formState.terms}
          onChange={inputChanges}
        />
        Terms and Conditions
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form;
