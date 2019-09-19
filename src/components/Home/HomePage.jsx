import React from 'react';
import './HomePage.scss';
import UserNavbar from '../UserNavbar/UserNavbar';

class HomePage extends React.Component {
    render() {
        return(
            <div>
            <UserNavbar/>
            <header className="header">
                <div className="header__hero">
                    <div className="content">
                        <img src="Finance.svg" alt="" className="image"/>
                        <h1 className="heading__primary">Invest in everything</h1>
                        <h5>Online platform to invest in stocks, derivatives, Mutual Fund and More</h5>
                        <a href="/" className="btn">Sign Up Now</a>
                    </div>
                </div>
            </header>
            </div>
        );
    }
};

export default HomePage;