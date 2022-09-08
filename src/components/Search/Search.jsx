import React, {useState} from 'react';

import './search.css';

export default function Search () {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className='search'>
        <form>
          <input type='search' placeholder='Search for countries...' onChange={(event) => setSearch(event.target.value)} />
          <button type='submit'>Search</button>
        </form>
      </div>
    </>
  );
}