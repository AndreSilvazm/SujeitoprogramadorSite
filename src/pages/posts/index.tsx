import React from 'react';
import styles from './styles.module.scss'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import thumbIMG from '../../../public/Images/thumb.png'
import {FiChevronLeft, FiChevronsLeft, FiChevronsRight, FiChevronRight} from 'react-icons/fi'

function index() {
    return (
        <div>

            <Head>
                <title>Blog | Sujeito programador</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <Link href='/' className={styles.postContainer}>

                        <Image src={thumbIMG} alt='Post titles' width={720} height={410} quality={100} />

                        <div className={styles.TextosSec}>

                            <strong>Criando meu primeiro aplicativo</strong>
                            <time>Jun 14 2021</time>
                            <p>Texto paragrafo</p>

                        </div>

                    </Link>

                    <div className={styles.BtnContainer}>
                        <div className={styles.BtnDiv}>
                            <button>{<FiChevronsLeft size={25} color='#fff' />}</button>
                            <button>{<FiChevronLeft size={25} color='#fff' />}</button>
                        </div>

                        <div className={styles.BtnDiv}>
                            <button>{<FiChevronRight size={25} color='#fff' />}</button>
                            <button>{<FiChevronsRight size={25} color='#fff' />}</button>
                        </div>

                        
                    </div>

                </div>
            </main>




        </div>
    );
}

export default index;