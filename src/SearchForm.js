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

  const [formData, setFormData] = useState();

  /** Update form input */
  function handleChange(evt) {
    setFormData(evt.target.value);
  }
  
  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData);
    setFormData("");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      name="search"
      placeholder='Enter search term ..' 
      value={formData}
      onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;