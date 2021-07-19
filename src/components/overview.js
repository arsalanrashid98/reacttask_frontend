import React, { Component } from 'react';

class Overview extends Component {

    render() {
        return (
            <div>
                <section className='landing-section -overview -accent -icon' id='overview'>
                    <div className='section-wrapper -centered -limited'>
                        <div className='section-info -lg'>
                            <h1 className='section-heading -lg -hgl'>
                                Chipotle Challenger Series 2021
                            </h1>
                        </div>
                        <div className='stat-card-wrapper'>
                            <div className='stat-card'>
                                <div className='top'>
                                    <h3 className='text'>Over</h3>
                                </div>
                                <div className='mid'>
                                    <h1 className='text' data-text='$275,000'>$275,000</h1>
                                </div>
                                <div className='bottom'>
                                    <h4 className='text'>In cash and prizes</h4>
                                </div>
                            </div>
                            <div className='stat-card'>
                                <div className='top'>
                                    <h3 className='text'>Total of</h3>
                                </div>
                                <div className='mid'>
                                    <h1 className='text' data-text='4 Series'>4 Series</h1>
                                </div>
                                <div className='bottom'>
                                    <h4 className='text'>Throughout the year</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <center className='my-3'>
                        <img className="img" src="https://assets.challonge.com/assets/chipotle/illus-overview-divider-b3172e7d8d6845707e24137c6b730c481eb7238e3f051ddb439d776b662a6739.svg" alt="Illus overview divider" />
                    </center>
                    <div className='section-wrapper -centered -limited'>
                        <div className='section-info -lg'>
                            <h1 className='section-heading -lg -hgl'>
                                CCS Summer 2021 is now live!
                            </h1>
                            <p className='details'>
                                The Summer 2021 season begins in July with free-to-enter PUBG MOBILE tournaments. Find your teammate, get registered today, and start competing! Sign up for your chance to win Chipotle-themed gear, cash prizes, and a year of free Chipotle.
                            </p>
                        </div>
                        <div className='tournament-card -pfinale'>
                            <div className='body -mobfull'>
                                <a className="details" href="#detail"><h3 className='heading'>CCS PUBG MOBILE Finale</h3>
                                    <ul className='inline-meta-list'>
                                        <li className='item'>
                                            July 25, 2021
                                        </li>
                                        <li className='item'>
                                            12PM - 4PM PDT / 3PM - 7PM EDT
                                        </li>
                                    </ul>
                                </a><div className='action'>
                                    <a className="btn btn-lg btn-outline-white -wide" href="#button">Add Event to Calendar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Overview;
