import React from 'react';
import OurWorks from '../../OurWorks/OurWorks';
import Footer from '../../Shared/Footer/Footer';
import BestQuality from '../BestQuality/BestQuality';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <BestQuality/>
            <Review/>
            <OurWorks/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;