import React, { Component } from 'react';

class Scoring extends Component {

    render() {
        return (
            <div>
                <section className='landing-section -scoring' id='scoring-rules'>
                    <div className='section-info'>
                        <h1 className='section-heading -hgl'>Format & Scoring</h1>
                        <p className='details'>8 open qualifier events. 32 teams qualify for the season finale.</p>
                    </div>
                    <div className='two-one-layout'>
                        <div className='section-wrapper'>
                            <h4 className='section-heading'>Qualifying</h4>
                            <div className='body'>
                                <img src="https://assets.challonge.com/assets/chipotle/scoring-rules-diagram-3458241df93e0399d856312e52efd06869502bbf3233e92c6ee684c361677d40.png" alt="Scoring rules diagram" />
                            </div>
                        </div>
                        <div className='section-wrapper -mobcenter'>
                            <h4 className='heading section-heading -mdpadbot'>Gameplay Scoring</h4>
                            <div className='card info-card -moblg'>
                                <div className='icon'>
                                    <img src="https://assets.challonge.com/assets/chipotle/rankings/elimination-8643546f78eeb9311f4d90408d5799ed2ac4e4e1ff20d365ca77e242bb1931ef.svg" alt="Elimination" />
                                </div>
                                <div className='details'>
                                    <h5 className='heading'>Eliminations</h5>
                                    <p className='sub'>1 Point</p>
                                </div>
                            </div>
                            <h4 className='heading section-heading -mdpad'>Placements</h4>
                            <ul className='list info-list -padbot'>
                                <li className='item'>
                                    <div className='info-card -moblg'>
                                        <div className='icon'>
                                            <img src="https://assets.challonge.com/assets/chipotle/rankings/first-aa2decfab2bbc02a1ed8ca93c132c819a3b7189c07969210a68b94e42984ccc0.svg" alt="First" />
                                        </div>
                                        <div className='details'>
                                            <h5 className='heading'>1st Place</h5>
                                            <p className='sub'>15 Points</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='item'>
                                    <div className='info-card -moblg'>
                                        <div className='icon'>
                                            <img src="https://assets.challonge.com/assets/chipotle/rankings/second-19ca1328ec0443d2387e3889dc0daa522e3322c88c5d4ddfdef5513c38d4556e.svg" alt="Second" />
                                        </div>
                                        <div className='details'>
                                            <h5 className='heading'>2nd Place</h5>
                                            <p className='sub'>12 Points</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='item'>
                                    <div className='info-card -moblg'>
                                        <div className='icon'>
                                            <img src="https://assets.challonge.com/assets/chipotle/rankings/third-f5c2b4012ffde3ac6439108e291b1599731927aabc8acfe39c5721dd6b9b04ce.svg" alt="Third" />
                                        </div>
                                        <div className='details'>
                                            <h5 className='heading'>3rd Place</h5>
                                            <p className='sub'>10 Points</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='item'>
                                    <div className='info-card -moblg'>
                                        <div className='icon'>
                                            <img src="https://assets.challonge.com/assets/chipotle/rankings/fourth-c7609dd2c91ba1e082887ccce4c80e20460892296163c86afa24f05497c62f31.svg" alt="Fourth" />
                                        </div>
                                        <div className='details'>
                                            <h5 className='heading'>4th Place</h5>
                                            <p className='sub'>8 Points</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='item'>
                                    <div className='info-card -moblg'>
                                        <div className='icon'>
                                            <img src="https://assets.challonge.com/assets/chipotle/rankings/fifth-a34f07ed34072a5d799183f4c4aeded441b91243ab00402568549aa2f70c920d.svg" alt="Fifth" />
                                        </div>
                                        <div className='details'>
                                            <h5 className='heading'>5th Place</h5>
                                            <p className='sub'>6 Points</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='item'>
                                    <div className='info-card -moblg'>
                                        <div className='icon'>
                                            <img src="https://assets.challonge.com/assets/chipotle/rankings/sixth-210d410f0218185cd2f7b31fdad7ac79b5135eb550fdd90f964cac54b618ad9b.svg" alt="Sixth" />
                                        </div>
                                        <div className='details'>
                                            <h5 className='heading'>6th Place</h5>
                                            <p className='sub'>4 Points</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='item'>
                                    <div className='info-card -moblg'>
                                        <div className='icon'>
                                            <img src="https://assets.challonge.com/assets/chipotle/rankings/seventh-bb612873d3a49c0f49cc3926b91a84286cee5aa6bd6556e27ef4c8579fc6e9c0.svg" alt="Seventh" />
                                        </div>
                                        <div className='details'>
                                            <h5 className='heading'>7th Place</h5>
                                            <p className='sub'>2 Points</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='item'>
                                    <div className='info-card -moblg'>
                                        <div className='icon'>
                                            <img src="https://assets.challonge.com/assets/chipotle/rankings/eighth-fe45fda9e11edd4538ac1221d452b4fbeab01b379d0e59341976912c12594ff4.svg" alt="Eighth" />
                                        </div>
                                        <div className='details'>
                                            <h5 className='heading'>8th Place</h5>
                                            <p className='sub'>1 Point</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className='misc'>
                                <a className="btn btn-lg btn-outline-white" href="#view">View Full Rules</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Scoring;
