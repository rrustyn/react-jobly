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

  const [formData, setFormData] = useState(null);
  //funtion search

  return (
    <form onSubmit={search}>
      <input type="text" placeholder='Enter search term ..' />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;