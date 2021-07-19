import React, { Component } from 'react';

class Faqs extends Component {

    render() {
        return (
            <div>
                <section className='landing-section -faqs' id='faqs'>
                    <div className='section-wrapper -centered -limited'>
                        <div className='section-info -mdpadbot'>
                            <h1 className='section-heading -hgl'>Eligibility</h1>
                            <p className='details'>
                                To be eligible to compete in the Tournament, each Player must:
                            </p>
                        </div>
                        <div className='info-block-wrapper'>
                            <div className='info-block'>
                                <div className='icon'>
                                    <img src="https://assets.challonge.com/assets/chipotle/qualifications/age-50e8154ded29de51c3dd48b6b15478fd1bbb75f0c13bfc70496ea6819d852f4b.svg" alt="Age" />
                                </div>
                                <p className='details'>
                                    Players must be of the age of 13+ to participate
                                </p>
                            </div>
                            <div className='info-block'>
                                <div className='icon -long'>
                                    <img src="https://assets.challonge.com/assets/chipotle/qualifications/residence-4266d53860614ca1d37fb8e9739097e36f6ae7e10dd2db5182ef67053c3e75ef.svg" alt="Residence" />
                                </div>
                                <p className='details'>
                                    Be a resident of the United States or Canada
                                </p>
                            </div>
                            <div className='info-block'>
                                <div className='icon'>
                                    <img src="https://assets.challonge.com/assets/chipotle/logo-pubg-colored-d179114681510294c9f0c8d2e9a1ddb62b367c741c29140961a4406fd40c79f7.png" alt="Logo pubg colored" />
                                </div>
                                <p className='details'>
                                    Use authentic, unmodified version of PUBG MOBILE installed on a legitimate mobile device
                                </p>
                            </div>
                            <div className='info-block'>
                                <div className='icon'>
                                    <img src="https://assets.challonge.com/assets/chipotle/qualifications/team-274ec4cf7f6ea9cedda008ca219c72ebb141c69365788f43487d2417d5086efe.svg" alt="Team" />
                                </div>
                                <p className='details'>
                                    Be a part of a two (2) player team
                                </p>
                            </div>
                            <div className='info-block'>
                                <div className='icon'>
                                    <img src="https://assets.challonge.com/assets/chipotle/qualifications/verified-e8b2c42fb6f9b32e9e20b951ad1340be30a284151e59ebb84610ff62f1b5246d.svg" alt="Verified" />
                                </div>
                                <p className='details'>
                                    Players must have a verified Challonge account
                                </p>
                            </div>
                            <div className='info-block'>
                                <div className='icon'>
                                    <img src="https://assets.challonge.com/assets/chipotle/qualifications/no-emulator-db9b2dee641969df845c9750684a5740306aeef2eb2d8fe655c65f6a68d6b47a.svg" alt="No emulator" />
                                </div>
                                <p className='details'>
                                    Players must not use any emulator
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='section-divider'></div>
                    <h1 className='section-heading -hgl -lgpad' id='faq-details'>FAQs</h1>
                    <div className='one-one-layout'>
                        <div className='block'>
                            <div className='section-info'>
                                <h4 className='section-heading'>How many tournaments will there be?</h4>
                                <p className='details -gray'>The Summer Season of the 2021 Chipotle Challenger Series will feature (8) qualifier events from July 12th - 22nd. Players may compete and win prizes from multiple events, but may only qualify on one permanent roster for the finals.</p>
                            </div>
                        </div>
                        <div className='block'>
                            <div className='section-info -padbot'>
                                <h4 className='section-heading'>Where can I find additional support?</h4>
                                <p className='details -gray'>Ask us a question in the CCS Discord server!</p>
                                <div className='misc'>
                                    <a className="btn btn-lg btn-outline-white" href="#join">Join the Official Discord</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='collapse' id='view-more'>
                        <div className='one-one-layout'>
                            <div className='block'>
                                <div className='section-info -padbot'>
                                    <h4 className='section-heading'>How do I register for a CCS Qualifier?</h4>
                                    <p className='details -gray'>
                                        Visit the CCS Community Page to view all of the available events and pick your date to compete. In order to be placed into the event, you will need to be a member of a completed team with 2/2 verified Challonge users and legitimate PUBG MOBILE IDs.
                                    </p>
                                    <div className='misc'>
                                        <a className="btn btn-lg btn-outline-white" href="#visit">Visit Community Page</a>
                                    </div>
                                </div>
                                <div className='section-info -padbot'>
                                    <h4 className='section-heading'>What prizes can my team win?</h4>
                                    <p className='details -gray'>
                                        Each qualifier will feature $2,500 in cash and $2,500 in Logitech store vouchers split among the Top 4 finalists from each event. The four best teams from each qualifier will be invited to the $65,000 Summer Season Finale.
                                    </p>
                                </div>
                                <div className='section-info -padbot'>
                                    <h4 className='section-heading'>Who is eligible to compete?</h4>
                                    <ul className='list -bullet'>
                                        <li className='item'>
                                            <span>Players must reside in the USA or Canada and be 13+ years of age.</span>
                                        </li>
                                        <li className='item'>
                                            <span>Players under the age of 18 will require parental permission to compete and win prizes.</span>
                                        </li>
                                        <li className='item'>
                                            <span>Players must own and compete on an unmodified version of PUBG MOBILE using a legitimate mobile device – no emulation permitted.</span>
                                        </li>
                                        <li className='item'>
                                            <span>Players must abide by the official Code of Conduct for the event.</span>
                                        </li>
                                    </ul>
                                    <p className='details -gray'>
                                        For more information on player eligibility, please read the tournament Rules,
                                        <a className="link" href="#terms">Terms &amp; Conditions</a>
                                        .
                                    </p>
                                </div>
                            </div>
                            <div className='block'>
                                <div className='section-info -padbot'>
                                    <h4 className='section-heading'>How do I compete in an event?</h4>
                                    <ul className='list'>
                                        <li className='item'>
                                            <strong>Step 1:</strong>
                                            <span>Sign up for free by creating or joining a team in a Qualifier event. Players must own a verified Challonge account and a valid PUBG Mobile ID.</span>
                                        </li>
                                        <li className='item'>
                                            <strong>Step 2:</strong>
                                            <span>Wait for each qualifier tournament to begin at the scheduled date and time.</span>
                                        </li>
                                        <li className='item'>
                                            <strong>Step 3:</strong>
                                            <span>When the tournament begins, all teams will be placed into groups. Find your group/heat and wait for your match to begin at the scheduled time.</span>
                                        </li>
                                        <li className='item'>
                                            <strong>Step 4:</strong>
                                            <span>When your match is ready to begin, a “Station” will be assigned to your group/heat. Inspect your match details to find the private match Room ID and Password for your group.</span>
                                        </li>
                                        <li className='item'>
                                            <strong>Step 5:</strong>
                                            <span>Join the room with your teammate and wait for the match to begin. This process will repeat for each round of the tournament until winners are decided from the final round.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='section-info -padbot'>
                                    <h4 className='section-heading'>How do I play my tournament matches?</h4>
                                    <p className='details -gray'>
                                        When the tournament begins, your team will be placed into a heat in Round 1. Locate your group on the event page. Each match will be labeled with an estimated start time. Wait for your heat to receive an assigned Room ID and Password.
                                    </p>
                                    <p className='details -gray'>
                                        After a room is assigned to your group, your team will have 15 minutes to join the lobby before the official match is started.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section-wrapper -centered -limited'>
                        <a className="btn-collapse" data-toggle="collapse" aria-expanded="false" href="#view-more"><span className='text -show'>
                            View More
                            <i className='icon fa fa-plus'></i>
                        </span>
                            <span className='text -hide'>
                                Show Less
                                <i className='icon fa fa-minus'></i>
                            </span>
                        </a></div>
                </section>
            </div>
        );
    }
}

export default Faqs;
