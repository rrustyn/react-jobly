import { useState } from 'react';

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
    <form className="row g-3 d-flex justify-content-center mt-1 mb-1" onSubmit={handleSubmit}>
      <div className="form-group col-6">
        <input
          className='form-control input-sm '
          type="text"
          name="search"
          placeholder='Enter search term ..'
          value={formData}
          onChange={handleChange}
        />
      </div>
      <div className="col-auto">
        <button className='btn btn-primary'>Submit</button>
      </div>
    </form>
  );
}

export default SearchForm;