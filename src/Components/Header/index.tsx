import React from 'react';
import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/Images/logo.svg'

import ActiveLink from '../ActiveLink/index'

function index() {
    return (
        <div>

            <header className={styles.headerContainer}>

                <div className={styles.headerContent}>

                    <a href="">

                        <Image src={logo} alt='ImagemLogo' className={styles.Img} />
                    </a>

                    <nav className={styles.Nav}>

                        <ActiveLink  href='/' activeClassName={styles.active}>

                            <a>Home</a>
                        </ActiveLink>


                        <ActiveLink href='/posts' activeClassName={styles.active}>
                            <a>Conteúdo</a>


                        </ActiveLink>


                        <ActiveLink href='/Sobre' activeClassName={styles.active}>

                            <a>Quem somos</a>

                        </ActiveLink>



                    </nav>

                    <a href="https://sujeitoprogramador.com" className={styles.readyButton} type='button'>Começar</a>

                </div>
            </header>

        </div>
    );
}

export default index;