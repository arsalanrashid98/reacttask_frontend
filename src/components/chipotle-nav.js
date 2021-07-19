import React, { Component } from 'react';

class ChipotleNav extends Component {

    render() {
        return (
            <div>
                <nav className='chipotle-nav'>
                    <div className='body'>
                        <div className='left'>
                            <img className="logo" src="https://assets.challonge.com/assets/chipotle/logo-ccs-chili-small-5ec11147f38191047cfdb31f49d0cb9ca9d028a75177425e0370287cb349830d.png" alt="Logo ccs chili small" />
                        </div>
                        <div className='center' data-js-toggle-nav>
                            <a className='icon nav-burger is-hidden-nontablet' href="#bar" data-js-toggle-trigger>
                                <i className='fa fa-bars'></i>
                            </a>
                            <ul className='nav-links -mobhide' data-js-toggle-menu>
                                <li className='item'>
                                    <a className="link" href="#overview">Overview</a>
                                </li>
                                <li className='item'>
                                    <a className="link" href="#schedule">Schedule</a>
                                </li>
                                <li className='item'>
                                    <a className="link" href="#scoring-rules">Format &amp; Scoring</a>
                                </li>
                                <li className='item'>
                                    <a className="link" href="#prizing">Prizing</a>
                                </li>
                                <li className='item'>
                                    <a className="link" href="#faqs">FAQs</a>
                                </li>
                                <li className='item'>
                                    <a className="link" href="#home">Discord</a>
                                </li>
                                <div className='overlay' data-js-toggle-overlay></div>
                            </ul>
                        </div>
                        <div className='right'>
                            <a className="btn btn-chipotle" href="#schedule">Register Now</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default ChipotleNav;
