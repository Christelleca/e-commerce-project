import React from 'react';
import Annoucement from '../../components/announcement/Annoucement';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';
import Categories from '../../components/categories/Categories';
import NewArrivals from '../../components/products/NewArrivals';
import BestSellers from '../../components/products/BestSellers';
import Newsletter from '../../components/newsletter/Newsletter';
import Footer from '../../components/footer/Footer';

function Home() {
    return (
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
            <Categories />
            <NewArrivals />
            <BestSellers />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;
