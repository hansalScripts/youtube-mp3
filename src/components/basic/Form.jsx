import React, { useState } from 'react';

import { FetchAPI } from '../../untilis/FetchAPI';

const Form = () => {

  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setError(false);
    setLoading(true);
    const url = 'https://www.youtube.com/watch?v=';
    if (search.indexOf(url) < 0) {
      setError('Invalid Youtube video');
      setLoading(false);
      return;
    }
    const videoId = search.split(url)[1];

    FetchAPI(videoId).then(response => {

      if (response.status === 'fail') {
        setError(response.msg);
        setLoading(false);
        return
      }
      if (response.status === 'ok') {
        setLoading(false);
        window.open(response.link, '_blank');
      }
    }).catch(error => {
      setLoading(false);
      setError(error.message)
    });

  }

  return (
    <div>
      <div className='max-w-lg bg-slate-200 flex items-center justify-center relative'>
        <input type='text'
          className='border-sky-100 bg-slate-200 outline-none h-10 w-80 px-2 rounded-md hover:shadow-lg'
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
          />
          {error && (<span className='bg-red-600 text-white font-light flex-none absolute -bottom-6 h-6 rounded-md py-2 px-5 flex items-center overflow-hidden left-0 transition-all duration-1000'>{error}</span>)}
        <button className='bg-orange-500 font-medium text-white border-slate-600 rounded-full px-2 py-1 w-20 hover:shadow-md hover:bg-orange-600'
          onClick={() => {handleClick(search)}}
        >
          { loading ? 'Loading..' : 'Get' }
        </button>
      </div>
    </div>
  );
};

export default Form;