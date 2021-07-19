import React, { Component } from 'react';

class LandingFold extends Component {

    render() {
        return (
            <div>
                <div className='landing-fold'>
                    <div className='landing-fold-content'>
                        <div className='block'>
                            <div className='main'>
                                <img className="logo" src="https://assets.challonge.com/assets/chipotle/logo-ccs-neon-e009146c2f69a1757107a2fd8be4b77960619f354b184b8d59d2f11230edb5af.png" alt="Logo ccs neon" />
                            </div>
                            <div className='byline'>
                                <h5 className='text'>Featuring</h5>
                                <img className="logo" src="https://assets.challonge.com/assets/chipotle/logo-pubg-white-81115723e6b38a6eed776e0519a6a29573f195ca33652fcdbfb6520ddd166a09.png" alt="Logo pubg white" />
                            </div>
                            <div className='misc'>
                                <h5 className='section-heading -sub'>
                                    ⓒ 2017 KRAFTON, Inc. All rights reserved. ⓒ 2018-2021 Tencent. All rights reserved.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingFold;
