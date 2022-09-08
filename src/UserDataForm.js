import { useState } from 'react';

/**
 * Form for collecting user information
 * 
 * Props:
 * - inputs: input fields to render on form
 * - onSubmit: function to call when form is submitted
 * 
 * State:
 * - formData: data in form input fields
 * 
 * 
 * { LoginForm, SignUpForm, Profile } --> UserDataForm
 */
function UserDataForm({ inputs, onSubmit }) {

  const [formData, setFormData] = useState(inputs);

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
      {Object.keys(inputs).map(input => (
        <label
          key={input} htmlFor={input}>{input}:
          <input
            type="text"
            id={input}
            name={input}
            onChange={handleChange}
            value={formData[input]}
          />
        </label>
      ))}
      <button>Submit</button>
    </form>
  );
}

export default UserDataForm;