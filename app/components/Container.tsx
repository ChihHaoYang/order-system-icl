import React, { PropsWithChildren } from 'react';

const Container = ({ children, ...rest }: PropsWithChildren) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center '>
      <div className='w-96 flex justify-center items-center flex-col'>
        {children}
      </div>
    </div>
  );
};

export default Container;
