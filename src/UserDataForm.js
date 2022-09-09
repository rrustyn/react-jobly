import { useState } from 'react';

/**
 * Form for collecting user information
 *
 * Props:
 * - inputs: array of objects with formatting information for inputs
 *    {
 *     name : name for label and input id, 
 *     type : input type, 
 *     value: default value for input, 
 *     display: label name, 
 *     optional: isDisabled, a boolean to disable input
 *    }
 * 
 * - onSubmit: function to call when form is submitted
 *
 * State:
 * - formData: data in form input
 *
 *
 * { LoginForm, SignUpForm, Profile } --> UserDataForm
 */
function UserDataForm({ inputs, onSubmit }) {

  //render initial form based on inputs passed in
  const initialForm = {};
  for (let input of inputs) {
    initialForm[input.name] = input.value;
  }

  const [formData, setFormData] = useState(initialForm);

  /** Update form input */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => ({
      ...currData,
      [fieldName]: value
    }));
  }

  /** Handle form submit, call parent fuction */
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map(input => (
        <label
          key={input.name} htmlFor={input.name}>{input.display}:
          <input
            type={input.type}
            id={input.name}
            name={input.name}
            onChange={handleChange}
            value={formData[input.name]}
            disabled={input.isDisabled || false}
          />
        </label>
      ))}
      <button>Submit</button>
    </form>
  );
}

export default UserDataForm;