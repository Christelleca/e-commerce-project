import React from 'react';
import Annoucement from '../../components/announcement/Annoucement';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';

function Home() {
    return (
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
        </div>
    );
}

export default Home;
