import React, { Component } from 'react';

class RewardBanner extends Component {

    render() {
        return (
            <div>
                <div className='registration-reward-banner'>
                    <div className='content'>
                        <img className="icon" src="https://assets.challonge.com/assets/chipotle/pubg/icon-supply-crate-1318a787c09bf031991a60553c8b6aca10da0cbc49618cde128e4b7171afb270.png" alt="Icon supply crate" />
                        <div className='details'>
                            <h3 className='heading'>Register a complete team with 2/2 players and participate in a qualifier to earn a supply crate coupon in PUBG MOBILE.</h3>
                            <p className='sub'>Supply Crate Coupon Codes will be emailed up to 48 business hours after the conclusion of each CCS PUBG MOBILE Qualifier while supplies last.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RewardBanner;
