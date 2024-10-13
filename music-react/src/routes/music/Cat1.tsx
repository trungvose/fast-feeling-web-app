import { Link } from 'react-router-dom';

export const Cat1 = () => {
  return (
    <div className='flex items-center justify-center bg-[#212529] flex-1 pt-8'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold mb-4 text-white'>Page 1</h1>
        <picture>
          <source
            srcSet='https://fonts.gstatic.com/s/e/notoemoji/latest/1f63c/512.webp'
            type='image/webp'
          />
          <img
            src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f63c/512.gif'
            alt='😼'
            width='200'
            height='200'
          />
        </picture>
        <div className='mt-4'>
          <Link to='/music/cat2' className='hover:underline text-pink-600 text-xl'>
            Follow this link to page 2
          </Link>
        </div>
      </div>
    </div>
  );
};
