import React, { ReactElement, cloneElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



interface ActiveLinkProps{

    children: ReactElement;
    activeClassName: string;
}


function index({children, activeClassName, ...rest}:ActiveLinkProps) {

    const {asPath} = useRouter()


    const className = asPath === rest.href ? activeClassName : ''

    
    return (
        <Link href='/' legacyBehavior {...rest}>

            {cloneElement(children, {
                className
            })}
        </Link>
    );
}

export default index;