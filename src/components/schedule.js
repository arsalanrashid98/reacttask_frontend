import React, { Component } from 'react';

class Schedule extends Component {

    render() {
        return (
            <div>
                <section className='landing-section -schedule' id='schedule'>
                    <h1 className='section-heading text-center -hgl'>Upcoming Tournaments</h1>
                    <div className='season-nav'>
                        <ul className='links'>
                            <li className='item'>
                                <a className="link" data-toggle="tab" href="#fortnite">Spring 2021</a>
                            </li>
                            <li className='item active'>
                                <a className="link" data-toggle="tab" href="#pubg">Summer 2021</a>
                            </li>
                            <li className='item'>
                                <a className="link" data-toggle="tab" href="#blankslate">Fall 2021</a>
                            </li>
                            <li className='item'>
                                <a className="link" data-toggle="tab" href="#blankslate">Winter 2021</a>
                            </li>
                        </ul>
                    </div>
                    <div className='tab-content'>
                        <div className='tab-pane' id='fortnite'>
                            <div className='list-wrapper -two'>
                                <div className='tournament-card -fnone'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Mar</div>
                                            <div className='date'>23</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>Spring Qualifier 1</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    March 23, 2021
                                                </li>
                                                <li className='item'>
                                                    7PM to 9PM ET / 4PM to 6PM PT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn -wide btn-icon btn-success" href="#completed"><i className="fa fa-check icon"></i>
                                                Completed
                                            </a></div>
                                    </div>
                                </div>
                                <div className='tournament-card -fntwo'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Mar</div>
                                            <div className='date'>24</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>Spring Qualifier 2</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    March 24, 2021
                                                </li>
                                                <li className='item'>
                                                    7PM to 9PM ET / 4PM to 6PM PT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn -wide btn-success" href="#completed"><i className="fa fa-check icon"></i>
                                                Completed
                                            </a></div>
                                    </div>
                                </div>
                                <div className='tournament-card -fnthree'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Mar</div>
                                            <div className='date'>27</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>Spring Qualifier 3</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    March 27, 2021
                                                </li>
                                                <li className='item'>
                                                    3PM to 5PM ET / 12PM to 2PM PT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn -wide btn-success" href="#completed"><i className="fa fa-check icon"></i>
                                                Completed
                                            </a></div>
                                    </div>
                                </div>
                                <div className='tournament-card -fnfour'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Mar</div>
                                            <div className='date'>28</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>Spring Qualifier 4</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    March 28, 2021
                                                </li>
                                                <li className='item'>
                                                    3PM to 5PM ET / 12PM to 2PM PT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn -wide btn-success" href="#completed"><i className="fa fa-check icon"></i>
                                                Completed
                                            </a></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='tab-pane active' id='pubg'>
                            <div className='list-wrapper -two'>
                                <div className='tournament-card -pone'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Jul</div>
                                            <div className='date'>12</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>CCS PUBG MOBILE Qualifier #1</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    July 12, 2021
                                                </li>
                                                <li className='item'>
                                                    4PM PDT / 7PM EDT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn btn-gold -wide" href="#register">Register
                                            </a></div>
                                    </div>
                                </div>
                                <div className='tournament-card -ptwo'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Jul</div>
                                            <div className='date'>13</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>CCS PUBG MOBILE Qualifier #2</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    July 13, 2021
                                                </li>
                                                <li className='item'>
                                                    4PM PDT / 7PM EDT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn btn-gold -wide" href="#register">Register
                                            </a></div>
                                    </div>
                                </div>
                                <div className='tournament-card -pthree'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Jul</div>
                                            <div className='date'>14</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>CCS PUBG MOBILE Qualifier #3</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    July 14, 2021
                                                </li>
                                                <li className='item'>
                                                    4PM PDT / 7PM EDT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn btn-gold -wide" href="#register">Register
                                            </a></div>
                                    </div>
                                </div>
                                <div className='tournament-card -pfour'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Jul</div>
                                            <div className='date'>15</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>CCS PUBG MOBILE Qualifier #4</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    July 15, 2021
                                                </li>
                                                <li className='item'>
                                                    4PM PDT / 7PM EDT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn btn-gold -wide" href="#register">Register
                                            </a></div>
                                    </div>
                                </div>
                                <div className='tournament-card -pfive'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Jul</div>
                                            <div className='date'>19</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>CCS PUBG MOBILE Qualifier #5</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    July 19, 2021
                                                </li>
                                                <li className='item'>
                                                    4PM PDT / 7PM EDT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn btn-gold -wide" href="#register">Register
                                            </a></div>
                                    </div>
                                </div>
                                <div className='tournament-card -psix'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Jul</div>
                                            <div className='date'>20</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>CCS PUBG MOBILE Qualifier #6</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    July 20, 2021
                                                </li>
                                                <li className='item'>
                                                    4PM PDT / 7PM EDT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn btn-gold -wide" href="#register">Register
                                            </a></div>
                                    </div>
                                </div>
                                <div className='tournament-card -pseven'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Jul</div>
                                            <div className='date'>21</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>CCS PUBG MOBILE Qualifier #7</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    July 21, 2021
                                                </li>
                                                <li className='item'>
                                                    4PM PDT / 7PM EDT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn btn-gold -wide" href="#register">Register
                                            </a></div>
                                    </div>
                                </div>
                                <div className='tournament-card -peight'>
                                    <div className='header'>
                                        <div className='date-card'>
                                            <div className='month'>Jul</div>
                                            <div className='date'>22</div>
                                        </div>
                                    </div>
                                    <div className='body'>
                                        <div className='details'>
                                            <h3 className='heading'>CCS PUBG MOBILE Qualifier #8</h3>
                                            <ul className='inline-meta-list'>
                                                <li className='item'>
                                                    July 22, 2021
                                                </li>
                                                <li className='item'>
                                                    4PM PDT / 7PM EDT
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='action'>
                                            <a className="btn btn-gold -wide" href="#register">Register
                                            </a></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='tab-pane' id='blankslate'>
                            <div className='section-blankslate'>
                                <div className='content'>
                                    <h2 className='heading'>Announcement coming soon</h2>
                                    <p className='details'>Follow Chipotle on Challonge to be notified.</p>
                                    <div className='action'>
                                        <a className="btn btn-lg btn-outline-white" href="#visit">Visit Community Page</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Schedule;
