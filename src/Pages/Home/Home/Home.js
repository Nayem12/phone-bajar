import React from 'react';
import Bottomcard from '../Bottomcard/Bottomcard';
import Category from '../Category/Category';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Bottomcard />
        </div>
    );
};

export default Home;