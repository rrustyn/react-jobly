import { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


/** SearchForm component
 *
 * Renders a search bar with search function on submit
 *
 * Prop:
 * - search
 *
 * State:
 * - formData
 *
 * { JobsList, CompaniesList } --> SearchForm
*/

function SearchForm({ search }) {

  const [formData, setFormData] = useState("");

  /** Update form input */
  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  /** Handle submit, calls search function from parent and resets formData */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData);
    setFormData("");
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex my-3 col-6 mx-auto justify-content-center">
      <FormControl
        type="text"
        placeholder="Enter search term"
        value={formData}
        onChange={handleChange}
        className="mr-2"
      />
      <Button className="mx-1" variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default SearchForm;