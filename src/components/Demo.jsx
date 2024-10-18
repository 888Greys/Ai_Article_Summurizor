import React from 'react'
import { useState, useEffect } from 'react'
import {copy, linkIcon, loader, tick} from '../assets'
import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {
  const [article, setArticle] = useState({url: '',
    summary:'',
  });

  // const [useLazyGetSummaryQuery, {error, isFetching}] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    alert('Form Submitted'); // Remove this line
  }
  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form className='relative flex justify-center items-center'
        onSubmit={handleSubmit}>

          <img src={linkIcon}
          alt='link_icon'
          className='absolute left-0 my-2 ml-3 w-5'/>

          <input className='url_input peer'
          type='url'
          placeholder='Enter a URL'
          value={article.url} 
          onChange={(e) => setArticle({...article, url: e.target.value})} 
          required/>

          <button 
            type="submit"
            className='submit_btn'>
            👍 
          </button>
        </form>
        {/* Browse URL history */}

      </div>
      {/* Display The Results */}
    </section>
  )
}

export default Demo
