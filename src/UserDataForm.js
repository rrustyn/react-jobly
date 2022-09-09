import { useState } from 'react';

/**
 * Form for collecting user information
 *
 * Props:
 * - inputs: input fields to render on form
 * - onSubmit: function to call when form is submitted
 *
 * State:
 * - formData: data in form input
 *
 *
 * { LoginForm, SignUpForm, Profile } --> UserDataForm
 */
function UserDataForm({ inputs, onSubmit }) {

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
    //console.log("form data in userdata form is:", formData);
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