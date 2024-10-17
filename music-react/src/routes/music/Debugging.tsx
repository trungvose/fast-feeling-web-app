import { useRef } from 'react';

export const Debugging = () => {
  const formRef = useRef(null);
  const inputRef = useRef(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.time('async');
    await slowAsyncFunction();
    console.timeEnd('async');
  };

  const slowAsyncFunction = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        let sum = 0;
        for (let i = 0; i < 1e9; i++) {
          sum += i;
        }
        resolve(sum);
      }, 0);
    });
  };
  
  const slowSyncFunction = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }
    return sum;
  };

  return (
    <div className='container mx-auto'>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='space-y-4 max-w-xs mx-auto mt-10'
      >
        <input
          ref={inputRef}
          type='text'
          placeholder='Enter something'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          type='submit'
          className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Submit
        </button>
      </form>

      <div className='mt-10'>
        <div className='w-[2000px] h-12 bg-blue-500 text-white'>
          Fixed Width: 2000px
        </div>

        <div className='flex justify-around mt-10'>
          <div className='w-[2000px] h-12 bg-blue-500 text-white'>
            Flex Item
          </div>
        </div>
      </div>
    </div>
  );
};
