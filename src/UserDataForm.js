import { Form, Col, Button } from 'react-bootstrap';
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
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <Form className="mx-auto" onSubmit={handleSubmit}>
        {inputs.map(input => (
          <Form.Group as={Col} key={input.name} controlId={input.name}>
            <Form.Label>{input.display}</Form.Label>
            <Form.Control
              type={input.type}
              name={input.name}
              onChange={handleChange}
              value={formData[input.name]}
              disabled={input.isDisabled || false}
            />
          </Form.Group>
        ))}
        <Button type="submit" className="mt-3 mb-3">Submit</Button>
      </Form>
    </div>
  );

}

export default UserDataForm;

