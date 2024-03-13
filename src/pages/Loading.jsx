import React from 'react';
import Layout from '../layouts/Layout';
import '../assets/scss/pages/Loading.scss';
import '../assets/scss/index.scss'

const Loading = () => {
    return (
        <>
            <Layout>
                <section id="loading">
                    <div className='loading'>
                        <h1>Loading...</h1>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Loading;
