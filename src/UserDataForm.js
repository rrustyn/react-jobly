import { useState } from 'react';

function UserDataForm({ inputs, save }) {

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
    save(formData);
  }

  return (
    <form>
      {Object.keys(inputs).map(input => (
        <label
          htmlFor={input}>{input}:
          <input
            type="text"
            id={input}
            name={input}
            onChange={handleChange}
            value={formData[input]}
          />
        </label>
      ))}
      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}

export default UserDataForm;