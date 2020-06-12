import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

// yup help with formatting
const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  email: yup.string().email().required("Must be a valid email address."),
  password: yup.string().required(),
  terms: yup.boolean().oneOf([true]),
});

function Form() {
  //   declare states and initialize to an object
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  //  we can also use state to hold errors

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  // this test and catches error on the yup formattor
  const validateChange = (e) => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  // this makes it so that whatever the user types in will be saved as values:
  const inputChanges = (e) => {
    // console.log("show input", e.target.value);

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

  return (
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
