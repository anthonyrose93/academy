import React from 'react';
import '../App.css';
import '../Components/Home.css';
import HomeCover from '../Images/MuayThai(12).png';

const Home = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-header">The Academy Eden Prairie</div>

            <div className="homepage-photo">
                <img src={HomeCover} alt="homepage-photo"></img>
            </div>

        </div>
    )
};

export default Home;