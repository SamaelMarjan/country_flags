import React, {useState} from 'react'

import './flags.css';

export default function Flags ({data}) {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className='flags'>
      
        <div className='search'>
          <form>
            <input type='search' placeholder='Search for countries...' onChange={(event) => setSearch(event.target.value)} />
            <button type='submit'>Search</button>
          </form>
        </div>

          <div className='flags_card'>
            <div className='st'>
                {
                  data.filter((data) => {
                    if (search === '') {
                      return data
                    } else if (data.country.toLowerCase().includes(search.toLowerCase())) {
                      return data
                    }
                  })
                  .map((data) => {
                    return (
                      <>
                      <div className='grid'>
                        <div className='cards'>
                          <img src={data.img} alt='Country Flags' />
                          <p>{data.country}</p>
                          <p>{data.capital}</p>
                          <p>{data.country_in}</p>
                        </div>
                      </div>
                      </>
                    );
                  })
                }
            </div>
          </div>
      </div>
    </>
  );
}