import React, { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';

const LinkButton = ({ children, ...rest }: PropsWithChildren<LinkProps>) => {
  return (
    <Link className='px-3 py-1 border border-stone-600 rounded-md' {...rest}>
      {children}
    </Link>
  );
};

export default LinkButton;
