import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/5.1.1/reset.min.css' integrity='sha512-vw1Eh0YXwSfFcRPIxtAvonjwHTEqKqwq7ucziF/ZCMEzRlmECgzmGSIHecwetYQXMUE1AL4mlxI7OCt38WvOgw==' crossorigin='anonymous'/>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/antd/5.1.1/antd.min.js' integrity='sha512-Zta8CfM7D1YqOVIQEFN0hwj6LQlprj/+LdRXNGhiTi4HEXXTHUh1EAmTMnJptB5vLNq89VDkz3lX0F83CE796Q==' crossorigin='anonymous'></script>
            </Head>
            <AppLayout>
                <Link href='/about'>About</Link>
                <div className="">Hello, Next!</div>
            </AppLayout>
        </>
    )
}

export default Home;