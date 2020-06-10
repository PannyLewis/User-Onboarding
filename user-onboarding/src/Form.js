import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

function Form() {
  //   declare states and initialize to an object
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <form>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="text" name="email" />
      </label>
      <label>
        Password
        <input type="text" name="password" />
      </label>
      <label>
        <input type="checkbox" name="terms of service" />
        Terms and Conditions
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form;
