import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div>
                <footer className='landing-footer'>
                    <div className='left'>
                        <h4 className='section-heading'>Connect with Chipotle</h4>
                        <ul className='social-ribbon'>
                            <li className='item'>
                                <a href="#twitch"><i className='icon fa fa-twitch'></i>
                                </a></li>
                            <li className='item'>
                                <a href="#instagram"><svg className='svg icon svg-icon' viewBox='0 0 14 16'>
                                    <use></use>
                                </svg>
                                </a></li>
                            <li className='item'>
                                <a href="#twitter"><i className='icon fa fa-twitter'></i>
                                </a></li>
                            <li className='item'>
                                <a href="#facebook"><i className='icon fa fa-facebook'></i>
                                </a></li>
                        </ul>
                    </div>
                    <div className='center'>
                        <h5 className='section-heading -sub'>Powered by</h5>
                        <div className='logo-ribbon'>
                            <div className='logo'>
                                <svg fill='none' height='83' viewbox='0 0 500 83' width='500' xmlns='http://www.w3.org/2000/svg'>
                                    <path clip-rule='evenodd' d='M189.948 71.287L189.948 9.90088L190.434 9.90088L190.434 71.287L189.948 71.287Z' fill-rule='evenodd' fill='#9E9E9E'></path>
                                    <path d='M233.776 35.6819C228.766 37.0016 224.322 39.3363 220.753 43.2746C221.653 44.2755 222.683 44.5825 223.904 44.8167C226.528 42.0373 229.744 40.2719 233.365 39.2002C234.255 38.9365 233.806 36.5036 233.776 35.6819Z' fill='#FF7324'></path>
                                    <path d='M220.651 35.8267C216.833 38.0304 215.525 42.9128 217.729 46.7295C218.867 48.7 220.719 50.0019 222.77 50.4967C228.957 51.987 234.128 45.3889 233.909 39.5995C230.394 40.6432 227.339 42.3517 224.839 44.8623C232.183 46.1278 225.563 51.3057 220.858 48.1261C217.483 45.8454 217.09 41.5661 219.007 38.3644C220.186 36.3971 221.835 35.6462 223.824 34.7979C222.738 34.9089 221.657 35.2455 220.651 35.8267V35.8267Z' fill='#FF7324'></path>
                                    <path d='M233.743 31.5564C227.012 33.6432 219.738 35.5317 219.319 39.9233C219.225 40.5759 219.362 41.288 219.815 42.0744C219.96 42.3261 220.108 42.5512 220.259 42.754C223.716 38.8215 228.133 36.4869 233.381 35.1434C234.289 34.9111 233.774 32.3686 233.743 31.5564Z' fill='#FF7324'></path>
                                    <path d='M248.035 47.3719C246.685 47.6627 245.469 47.8081 244.387 47.8081C243.304 47.8081 242.439 47.6753 241.789 47.4099C241.14 47.1444 240.63 46.7209 240.261 46.1394C239.892 45.5579 239.637 44.8752 239.497 44.0914C239.357 43.3076 239.287 42.3216 239.287 41.1333C239.287 38.6429 239.637 36.911 240.338 35.9376C241.051 34.9515 242.356 34.4585 244.253 34.4585C245.348 34.4585 246.615 34.6292 248.054 34.9705L247.977 37.0564C246.717 36.8667 245.666 36.7719 244.826 36.7719C243.998 36.7719 243.406 36.8857 243.05 37.1132C242.693 37.3281 242.426 37.7453 242.248 38.3648C242.082 38.9842 241.999 40.0398 241.999 41.5315C241.999 43.0232 242.171 44.0598 242.515 44.6413C242.871 45.2102 243.572 45.4947 244.616 45.4947C245.673 45.4947 246.793 45.4062 247.977 45.2292L248.035 47.3719Z' fill='white'></path>
                                    <path d='M257.641 47.5805V42.2331H252.809V47.5805H250.173V34.686H252.809V39.9576H257.641V34.686H260.277V47.5805H257.641Z' fill='white'></path>
                                    <path d='M262.011 47.5805L264.933 34.686H269.937L272.859 47.5805H270.223L269.708 45.2481H265.162L264.646 47.5805H262.011ZM266.976 36.8478L265.659 42.9726H269.211L267.893 36.8478H266.976Z' fill='white'></path>
                                    <path d='M281.98 47.5805H274.589V34.686H277.225V45.2671H281.98V47.5805Z' fill='white'></path>
                                    <path d='M290.989 47.5805H283.598V34.686H286.234V45.2671H290.989V47.5805Z' fill='white'></path>
                                    <path d='M295.188 44.5465C295.57 45.2039 296.277 45.5326 297.308 45.5326C298.339 45.5326 299.04 45.2039 299.409 44.5465C299.791 43.8765 299.982 42.7641 299.982 41.2091C299.982 39.6416 299.791 38.5038 299.409 37.7959C299.027 37.088 298.327 36.734 297.308 36.734C296.289 36.734 295.589 37.088 295.207 37.7959C294.825 38.5038 294.634 39.6416 294.634 41.2091C294.634 42.7641 294.819 43.8765 295.188 44.5465ZM301.472 46.2152C300.669 47.2771 299.282 47.8081 297.308 47.8081C295.334 47.8081 293.94 47.2771 293.125 46.2152C292.323 45.1407 291.922 43.4657 291.922 41.1902C291.922 38.9147 292.323 37.227 293.125 36.1272C293.94 35.0147 295.334 34.4585 297.308 34.4585C299.282 34.4585 300.669 35.0147 301.472 36.1272C302.287 37.227 302.694 38.9147 302.694 41.1902C302.694 43.4657 302.287 45.1407 301.472 46.2152Z' fill='white'></path>
                                    <path d='M304.954 47.5805V34.686H309.405L312.537 45.305H312.728V34.686H315.364V47.5805H311.028L307.781 36.9615H307.59V47.5805H304.954Z' fill='white'></path>
                                    <path d='M323.603 42.9537V40.6782H327.384V47.3719C325.563 47.6627 324.086 47.8081 322.953 47.8081C320.929 47.8081 319.534 47.2708 318.77 46.1963C318.019 45.1217 317.643 43.4151 317.643 41.0764C317.643 38.7377 318.038 37.05 318.828 36.0134C319.617 34.9768 320.96 34.4585 322.858 34.4585C324.042 34.4585 325.322 34.5912 326.697 34.8567L327.384 34.9894L327.308 37.0184C325.78 36.8541 324.526 36.7719 323.545 36.7719C322.578 36.7719 321.896 36.8857 321.502 37.1132C321.107 37.3408 320.814 37.7643 320.623 38.3837C320.445 38.9905 320.356 40.0398 320.356 41.5315C320.356 43.0106 320.54 44.0472 320.91 44.6413C321.279 45.2355 322.043 45.5326 323.201 45.5326L324.787 45.4567V42.9537H323.603Z' fill='white'></path>
                                    <path d='M329.874 47.5805V34.686H338.277V36.9615H332.509V39.9766H337.131V42.2141H332.509V45.305H338.277V47.5805H329.874Z' fill='white'></path>
                                    <path d='M340.335 47.5805V44.5276H343.085V47.5805H340.335ZM340.583 42.8399L340.335 34.686H343.104L342.837 42.8399H340.583Z' fill='white'></path>
                                    <a href="#home">
                                        <rect fill='transparent' height='23' width='127' x='216' y='30'></rect>
                                    </a>
                                    <a target='_target' href="#home">
                                        <path d='M369.092 34.186H500V47.7642H369.092V34.186Z' fill='url(#pattern0)'></path>
                                    </a>
                                    <path d='M0 49.6863V16.7747H5.73733V49.6863H0Z' fill='white'></path>
                                    <path d='M20.424 25.8101C13.068 25.8101 7.97754 31.5093 7.97754 38.0326C7.97754 45.3129 13.5154 50.3283 20.4812 50.3283C27.0921 50.3283 32.8289 45.4052 32.8289 38.0168C32.8289 31.8039 28.0752 25.8101 20.424 25.8101V25.8101ZM20.3564 31.3872C24.206 31.3872 27.0396 34.4067 27.0396 38.0535C27.0396 41.9201 23.9155 44.7408 20.4604 44.7408C16.3777 44.7408 13.8084 41.4801 13.8084 38.064C13.8084 34.3195 16.7092 31.3872 20.3564 31.3872V31.3872Z' fill='white'></path>
                                    <path d='M47.2443 25.8101C39.8883 25.8101 34.7979 31.5093 34.7979 38.0326C34.7979 45.3129 40.3357 50.3283 47.3015 50.3283C53.9124 50.3283 59.6492 45.4052 59.6492 38.0168C59.6492 33.666 57.7793 31.7355 57.7793 31.7355L59.3696 31.186V26.4939H51.2209C51.2209 26.4939 49.4544 25.8101 47.2443 25.8101V25.8101ZM47.1768 31.3872C51.0264 31.3872 53.8599 34.4067 53.8599 38.0535C53.8599 41.9201 50.7358 44.7408 47.2807 44.7408C43.198 44.7408 40.6287 41.4801 40.6287 38.064C40.6287 34.3195 43.5295 31.3872 47.1768 31.3872V31.3872Z' fill='white'></path>
                                    <path d='M53.8189 51.2952C53.8189 55.1618 50.6948 58.0034 47.2397 58.0034C43.157 58.0034 40.5773 54.7113 40.5773 51.2952H34.7568C34.7568 58.5756 40.2947 63.591 47.2605 63.591C53.8714 63.591 59.6082 58.6836 59.6082 51.2952H53.8189Z' fill='white'></path>
                                    <path d='M61.9463 49.6865V26.4941H67.6836V49.6865H61.9463Z' fill='white'></path>
                                    <path d='M73.2552 49.6863V31.6888H70.1787V26.494H73.2552V19.3721H78.9926V26.494H82.1522V31.6888H78.9926V49.6863H73.2552Z' fill='white'></path>
                                    <path d='M68.6024 19.907C68.6024 22.0213 66.9014 23.7354 64.8031 23.7354C62.7049 23.7354 61.0039 22.0213 61.0039 19.907C61.0039 17.7926 62.7049 16.0786 64.8031 16.0786C66.9014 16.0786 68.6024 17.7926 68.6024 19.907Z' fill='white'></path>
                                    <path d='M95.051 25.7947C87.6601 25.7947 82.8955 31.4969 82.8955 38.2423C82.8955 45.2131 87.676 50.3444 95.1705 50.3444C102.162 50.3444 105.601 45.9455 105.601 45.9455L101.765 42.0756C101.765 42.0756 98.8695 45.2229 95.2432 45.2229C92.2204 45.2229 89.8035 43.5227 88.9602 40.4051H106.837V38.8131C106.837 32.461 103.189 25.7947 95.051 25.7947V25.7947ZM94.8691 30.8848C97.5121 30.8848 100.215 32.3096 100.819 35.713H88.8043C89.2802 33.3206 91.3572 30.8848 94.8691 30.8848Z' fill='white'></path>
                                    <path d='M121.188 50.3471C113.776 50.3471 108.726 44.6588 108.726 37.9518C108.726 31.0303 114.433 25.79 121.164 25.79C127.67 25.79 131.001 30.4184 131.001 30.4184L126.998 34.4332C126.998 34.4332 124.68 31.4147 121.137 31.4147C117.209 31.4147 114.524 34.4421 114.524 38.0406C114.524 41.8402 117.38 44.7554 121.092 44.7554C124.693 44.7554 126.993 41.7418 126.993 41.7418L131.035 45.7544C131.035 45.7544 127.737 50.3471 121.188 50.3471V50.3471Z' fill='white'></path>
                                    <path d='M133.123 49.7031V16.6909H138.86V28.8197C138.86 28.8197 141.057 25.7901 145.836 25.7901C151.844 25.7901 155.324 30.2902 155.324 36.0458V49.7031H149.587V36.9196C149.587 33.0529 147.198 31.4487 144.551 31.4487C141.536 31.4487 138.86 33.1779 138.86 37.2188V49.7031H133.123Z' fill='white'></path>
                                    <path d='M158.375 24.2508H157.43V25.8989H156.896V21.8247H158.229C158.682 21.8247 159.031 21.9292 159.274 22.1381C159.519 22.3471 159.642 22.6511 159.642 23.0503C159.642 23.304 159.574 23.5251 159.437 23.7135C159.303 23.9019 159.115 24.0428 158.873 24.136L159.819 25.8653V25.8989H159.249L158.375 24.2508ZM157.43 23.8114H158.245C158.509 23.8114 158.718 23.7424 158.873 23.6044C159.03 23.4663 159.108 23.2817 159.108 23.0503C159.108 22.7985 159.033 22.6054 158.884 22.4711C158.737 22.3368 158.523 22.2687 158.243 22.2668H157.43V23.8114Z' fill='white'></path>
                                    <path clip-rule='evenodd' d='M158.233 20.4287C156.385 20.4287 154.887 21.9448 154.887 23.815C154.887 25.6852 156.385 27.2013 158.233 27.2013C160.081 27.2013 161.58 25.6852 161.58 23.815C161.58 21.9448 160.081 20.4287 158.233 20.4287ZM154.372 23.815C154.372 21.6571 156.101 19.9077 158.233 19.9077C160.366 19.9077 162.095 21.6571 162.095 23.815C162.095 25.9729 160.366 27.7223 158.233 27.7223C156.101 27.7223 154.372 25.9729 154.372 23.815Z' fill-rule='evenodd' fill='white'></path>
                                    <path d='M69.1449 64.1219H73.7643V63.3239H69.9561V60.0973H73.7643V59.2992H69.9561V56.7339H73.7643V55.9359H69.1449V64.1219Z' fill='white'></path>
                                    <path d='M74.7122 63.4151C75.1403 63.9737 75.8163 64.2816 76.4811 64.2816C77.5627 64.2816 78.2838 63.4379 78.2838 62.4916C78.2838 61.397 77.5176 61.0892 76.1431 60.2797C75.8727 60.1201 75.6811 59.7781 75.6811 59.4702C75.6811 59.0142 76.0867 58.6608 76.5825 58.6608C77.067 58.6608 77.4275 58.8888 77.788 59.2422L78.2838 58.7292C77.7768 58.2275 77.281 57.9083 76.6276 57.9083C75.7149 57.9083 74.9826 58.5581 74.9826 59.5158C74.9826 60.5762 75.6811 60.9068 77.0557 61.6821C77.3486 61.8417 77.5514 62.1723 77.5514 62.5258C77.5514 63.0958 77.0332 63.5291 76.4473 63.5291C75.9966 63.5291 75.5797 63.2897 75.1967 62.8564L74.7122 63.4151Z' fill='white'></path>
                                    <path d='M80.6464 58.0679H79.8802V66.3338H80.6464V63.0844C81.2999 63.8825 82.1111 64.2702 83.0462 64.2702C84.8039 64.2702 86.1221 62.7994 86.1221 61.0778C86.1221 59.3562 84.7701 57.9083 83.0237 57.9083C82.066 57.9083 81.2435 58.3301 80.6464 59.1738V58.0679ZM82.9674 58.6608C84.3419 58.6608 85.3334 59.8009 85.3334 61.1006C85.3334 62.4232 84.2968 63.5633 82.9674 63.5633C81.7393 63.5633 80.5901 62.6284 80.5901 61.1234C80.5901 59.7211 81.6266 58.6608 82.9674 58.6608Z' fill='white'></path>
                                    <path d='M90.6135 57.9083C88.8221 57.9083 87.4926 59.379 87.4926 61.112C87.4926 62.8336 88.8108 64.2816 90.6135 64.2816C92.4162 64.2816 93.7344 62.8336 93.7344 61.112C93.7344 59.379 92.4049 57.9083 90.6135 57.9083ZM90.6135 58.6608C91.8866 58.6608 92.9457 59.7781 92.9457 61.1234C92.9457 62.446 91.9542 63.5291 90.6135 63.5291C89.2615 63.5291 88.2813 62.446 88.2813 61.1234C88.2813 59.7781 89.3291 58.6608 90.6135 58.6608Z' fill='white'></path>
                                    <path d='M95.8895 58.0679H95.0782V64.1219H95.8895V61.8189C95.8895 60.998 95.912 60.3709 96.0134 59.9833C96.2387 59.151 96.7457 58.6608 97.3091 58.6608C97.4781 58.6608 97.6245 58.7292 97.7147 58.7748L98.1203 58.1135C97.9626 58.0223 97.7823 57.9083 97.433 57.9083C96.8246 57.9083 96.3401 58.2845 95.8895 58.9458V58.0679Z' fill='white'></path>
                                    <path d='M99.6839 58.0679H98.6248V58.752H99.6839V64.1219H100.45V58.752H101.678V58.0679H100.45V55.8104H99.6839V58.0679Z' fill='white'></path>
                                    <path d='M102.477 63.4151C102.905 63.9737 103.581 64.2816 104.245 64.2816C105.327 64.2816 106.048 63.4379 106.048 62.4916C106.048 61.397 105.282 61.0892 103.907 60.2797C103.637 60.1201 103.446 59.7781 103.446 59.4702C103.446 59.0142 103.851 58.6608 104.347 58.6608C104.831 58.6608 105.192 58.8888 105.552 59.2422L106.048 58.7292C105.541 58.2275 105.045 57.9083 104.392 57.9083C103.479 57.9083 102.747 58.5581 102.747 59.5158C102.747 60.5762 103.446 60.9068 104.82 61.6821C105.113 61.8417 105.316 62.1723 105.316 62.5258C105.316 63.0958 104.798 63.5291 104.212 63.5291C103.761 63.5291 103.344 63.2897 102.961 62.8564L102.477 63.4151Z' fill='white'></path>
                                    <path d='M114.871 57.0646C114.341 56.3349 113.744 55.7306 112.752 55.7306C111.659 55.7306 110.792 56.5173 110.792 57.646C110.792 58.2617 111.096 58.9116 111.479 59.2194C113.316 60.7244 114.149 61.2374 114.149 62.1381C114.149 62.902 113.496 63.5291 112.651 63.5291C112.031 63.5291 111.445 63.073 110.961 62.1723L110.274 62.5942C110.871 63.7001 111.603 64.3272 112.719 64.3272C114.037 64.3272 114.994 63.2783 114.994 62.1267C114.994 60.8042 113.879 60.0175 112.358 58.8774C111.896 58.5239 111.637 58.0565 111.637 57.6118C111.637 57.076 112.031 56.5743 112.73 56.5743C113.395 56.5743 113.778 56.9962 114.217 57.5776L114.871 57.0646Z' fill='white'></path>
                                    <path d='M122.713 61.1576C122.69 59.151 121.316 57.9083 119.614 57.9083C117.744 57.9083 116.539 59.4588 116.539 61.112C116.539 62.731 117.677 64.2702 119.659 64.2702C120.966 64.2702 121.902 63.6659 122.51 62.4574L121.868 62.1153C121.428 62.845 120.831 63.5633 119.581 63.5633C118.296 63.5633 117.361 62.5486 117.327 61.1576H122.713ZM117.406 60.4735C117.755 59.2422 118.555 58.6608 119.626 58.6608C120.662 58.6608 121.552 59.2194 121.868 60.4735H117.406Z' fill='white'></path>
                                    <path d='M124.88 58.0679H124.069V64.1219H124.88V61.8189C124.88 60.998 124.903 60.3709 125.004 59.9833C125.23 59.151 125.737 58.6608 126.3 58.6608C126.469 58.6608 126.616 58.7292 126.706 58.7748L127.111 58.1135C126.954 58.0223 126.773 57.9083 126.424 57.9083C125.816 57.9083 125.331 58.2845 124.88 58.9458V58.0679Z' fill='white'></path>
                                    <path d='M130.185 64.1219H130.32L133.058 58.0679H132.235L130.252 62.4688L128.247 58.0679H127.424L130.185 64.1219Z' fill='white'></path>
                                    <path d='M134.35 64.1219H135.116V58.0679H134.35V64.1219ZM134.722 55.571C134.384 55.571 134.091 55.8447 134.091 56.2095C134.091 56.5629 134.373 56.8594 134.722 56.8594C135.071 56.8594 135.364 56.5629 135.364 56.2095C135.364 55.8561 135.071 55.571 134.722 55.571Z' fill='white'></path>
                                    <path d='M142.126 62.503C141.563 63.2098 140.842 63.5633 139.974 63.5633C138.431 63.5633 137.439 62.4118 137.439 61.0892C137.439 59.7895 138.442 58.6608 139.963 58.6608C140.865 58.6608 141.597 59.0028 142.126 59.7097L142.746 59.322C142.194 58.3871 141.146 57.9083 139.997 57.9083C138.025 57.9083 136.651 59.3676 136.651 61.1462C136.651 62.8336 137.969 64.2702 139.941 64.2702C141.146 64.2702 142.16 63.8027 142.746 62.902L142.126 62.503Z' fill='white'></path>
                                    <path d='M150.345 61.1576C150.323 59.151 148.948 57.9083 147.247 57.9083C145.376 57.9083 144.171 59.4588 144.171 61.112C144.171 62.731 145.309 64.2702 147.292 64.2702C148.599 64.2702 149.534 63.6659 150.142 62.4574L149.5 62.1153C149.061 62.845 148.464 63.5633 147.213 63.5633C145.929 63.5633 144.993 62.5486 144.96 61.1576H150.345ZM145.038 60.4735C145.388 59.2422 146.188 58.6608 147.258 58.6608C148.295 58.6608 149.185 59.2194 149.5 60.4735H145.038Z' fill='white'></path>
                                    <path d='M151.442 63.4151C151.871 63.9737 152.547 64.2816 153.211 64.2816C154.293 64.2816 155.014 63.4379 155.014 62.4916C155.014 61.397 154.248 61.0892 152.873 60.2797C152.603 60.1201 152.411 59.7781 152.411 59.4702C152.411 59.0142 152.817 58.6608 153.313 58.6608C153.797 58.6608 154.158 58.8888 154.518 59.2422L155.014 58.7292C154.507 58.2275 154.011 57.9083 153.358 57.9083C152.445 57.9083 151.713 58.5581 151.713 59.5158C151.713 60.5762 152.411 60.9068 153.786 61.6821C154.079 61.8417 154.282 62.1723 154.282 62.5258C154.282 63.0958 153.763 63.5291 153.178 63.5291C152.727 63.5291 152.31 63.2897 151.927 62.8564L151.442 63.4151Z' fill='white'></path>
                                    <path clip-rule='evenodd' d='M68.9102 64.3595V55.6983H73.999V56.9715H70.1908V59.0617H73.999V60.3348H70.1908V63.0863H73.999V64.3595H68.9102ZM73.7643 63.3239V64.1219H69.1449V55.9359H73.7643V56.7339H69.9561V59.2992H73.7643V60.0973H69.9561V63.3239H73.7643ZM74.408 63.4057L75.195 62.4983L75.3716 62.698C75.7287 63.1019 76.087 63.2916 76.4473 63.2916C76.9339 63.2916 77.3167 62.9358 77.3167 62.5258C77.3167 62.261 77.1624 62.01 76.9444 61.8912L76.9414 61.8896C76.8657 61.8468 76.7914 61.8052 76.7189 61.7645C76.1471 61.4437 75.677 61.18 75.3476 60.8833C75.1562 60.7108 75.0033 60.5203 74.8998 60.2915C74.7962 60.0625 74.7479 59.8081 74.7479 59.5158C74.7479 58.413 75.5996 57.6707 76.6276 57.6707C77.3708 57.6707 77.9227 58.0397 78.4479 58.5593L78.6157 58.7254L77.7925 59.5773L77.6247 59.4128C77.2845 59.0793 76.9797 58.8983 76.5825 58.8983C76.1871 58.8983 75.9159 59.1732 75.9159 59.4702C75.9159 59.6936 76.0631 59.9575 76.2614 60.0746C76.4039 60.1585 76.5418 60.238 76.6744 60.3145C77.1632 60.5963 77.5789 60.836 77.8816 61.0984C78.0807 61.2709 78.243 61.4623 78.3539 61.6947C78.4652 61.9278 78.5185 62.1888 78.5185 62.4916C78.5185 63.5621 77.6991 64.5191 76.4811 64.5191C75.7482 64.5191 75.0019 64.1807 74.5267 63.5606L74.408 63.4057ZM76.1431 60.2797C75.8727 60.1201 75.6811 59.7781 75.6811 59.4702C75.6811 59.0142 76.0867 58.6608 76.5825 58.6608C77.067 58.6608 77.4275 58.8888 77.788 59.2422L77.7884 59.2418L78.2838 58.7292C78.2266 58.6726 78.1696 58.6184 78.1125 58.5667C77.663 58.1596 77.2074 57.9083 76.6276 57.9083C75.7149 57.9083 74.9826 58.5581 74.9826 59.5158C74.9826 60.518 75.6066 60.8683 76.8356 61.5583C76.9069 61.5984 76.9803 61.6395 77.0557 61.6821C77.3486 61.8417 77.5514 62.1723 77.5514 62.5258C77.5514 63.0958 77.0332 63.5291 76.4473 63.5291C76.06 63.5291 75.6978 63.3523 75.3604 63.0277C75.3052 62.9745 75.2506 62.9174 75.1967 62.8564L74.7122 63.4151C75.1403 63.9737 75.8163 64.2816 76.4811 64.2816C77.5627 64.2816 78.2838 63.4379 78.2838 62.4916C78.2838 61.5166 77.6758 61.1658 76.5714 60.5287C76.4361 60.4505 76.2932 60.3681 76.1431 60.2797ZM80.8811 57.8304V58.5345C81.4685 57.9614 82.201 57.6707 83.0237 57.6707C84.9052 57.6707 86.3568 59.2307 86.3568 61.0778C86.3568 62.9198 84.9439 64.5077 83.0462 64.5077C82.2289 64.5077 81.4987 64.2306 80.8811 63.6737V66.5713H79.6455V57.8304H80.8811ZM80.6464 63.0844C80.7225 63.1774 80.8008 63.2648 80.8811 63.3467C81.4905 63.9676 82.22 64.2702 83.0462 64.2702C84.8039 64.2702 86.1221 62.7994 86.1221 61.0778C86.1221 59.3562 84.7701 57.9083 83.0237 57.9083C82.1859 57.9083 81.4516 58.2311 80.8811 58.8767C80.7995 58.9691 80.7212 59.0682 80.6464 59.1738V58.0679H79.8802V66.3338H80.6464V63.0844ZM85.0987 61.1006C85.0987 59.9202 84.2009 58.8983 82.9674 58.8983C81.7606 58.8983 80.8248 59.8478 80.8248 61.1234C80.8248 62.4849 81.8564 63.3258 82.9674 63.3258C84.1573 63.3258 85.0987 62.3022 85.0987 61.1006ZM87.2579 61.112C87.2579 59.2563 88.6843 57.6707 90.6135 57.6707C92.5427 57.6707 93.9691 59.2563 93.9691 61.112C93.9691 62.9586 92.5519 64.5191 90.6135 64.5191C88.6751 64.5191 87.2579 62.9586 87.2579 61.112ZM92.711 61.1234C92.711 59.8997 91.7478 58.8983 90.6135 58.8983C89.4687 58.8983 88.516 59.8989 88.516 61.1234C88.516 62.3238 89.3999 63.2916 90.6135 63.2916C91.8166 63.2916 92.711 62.3231 92.711 61.1234ZM96.1242 57.8304V58.279C96.4947 57.9 96.9192 57.6707 97.433 57.6707C97.8297 57.6707 98.0535 57.8008 98.2157 57.8951L98.2367 57.9073L98.3901 57.9959V57.8304H99.4492V55.5729H100.685V57.8304H101.913V58.9895H100.685V64.3595H99.4492V58.9895H98.3901V58.124L97.8012 59.0841L97.6097 58.9872C97.5238 58.9438 97.4195 58.8983 97.3091 58.8983C96.8986 58.8983 96.4523 59.2623 96.2401 60.0448C96.1482 60.397 96.1242 60.9911 96.1242 61.8189V64.3595H94.8435V57.8304H96.1242ZM96.0134 59.9833C96.2387 59.151 96.7457 58.6608 97.3091 58.6608C97.4781 58.6608 97.6245 58.7292 97.7147 58.7748L98.1203 58.1135L98.0994 58.1014C98.0428 58.0685 97.9825 58.0335 97.9121 58.0024C97.7924 57.9496 97.6433 57.9083 97.433 57.9083C96.9287 57.9083 96.5095 58.1668 96.1242 58.6319C96.0446 58.7279 95.9666 58.8327 95.8895 58.9458V58.0679H95.0782V64.1219H95.8895V61.8189C95.8895 60.998 95.912 60.3709 96.0134 59.9833ZM99.6839 55.8104H100.45V58.0679H101.678V58.752H100.45V64.1219H99.6839V58.752H98.6248V58.0679H99.6839V55.8104ZM102.172 63.4057L102.959 62.4983L103.136 62.698C103.493 63.1019 103.851 63.2916 104.212 63.2916C104.698 63.2916 105.081 62.9358 105.081 62.5258C105.081 62.261 104.927 62.01 104.709 61.8912L104.706 61.8896C104.63 61.8468 104.556 61.8052 104.483 61.7645C103.911 61.4437 103.441 61.18 103.112 60.8833C102.921 60.7108 102.768 60.5203 102.664 60.2915C102.561 60.0625 102.512 59.8081 102.512 59.5158C102.512 58.413 103.364 57.6707 104.392 57.6707C105.135 57.6707 105.687 58.0397 106.212 58.5593L106.38 58.7254L105.557 59.5773L105.389 59.4128C105.049 59.0793 104.744 58.8983 104.347 58.8983C103.951 58.8983 103.68 59.1732 103.68 59.4702C103.68 59.6936 103.827 59.9575 104.026 60.0746C104.168 60.1585 104.306 60.238 104.439 60.3145C104.928 60.5963 105.343 60.836 105.646 61.0984C105.845 61.2709 106.007 61.4623 106.118 61.6947C106.23 61.9278 106.283 62.1888 106.283 62.4916C106.283 63.5621 105.463 64.5191 104.245 64.5191C103.513 64.5191 102.766 64.1807 102.291 63.5606L102.172 63.4057ZM103.907 60.2797C103.637 60.1201 103.446 59.7781 103.446 59.4702C103.446 59.0142 103.851 58.6608 104.347 58.6608C104.831 58.6608 105.192 58.8888 105.552 59.2422L105.553 59.2418L106.048 58.7292C105.991 58.6726 105.934 58.6184 105.877 58.5667C105.427 58.1596 104.972 57.9083 104.392 57.9083C103.479 57.9083 102.747 58.5581 102.747 59.5158C102.747 60.518 103.371 60.8683 104.6 61.5583C104.671 61.5984 104.745 61.6395 104.82 61.6821C105.113 61.8417 105.316 62.1723 105.316 62.5258C105.316 63.0958 104.798 63.5291 104.212 63.5291C103.824 63.5291 103.462 63.3523 103.125 63.0277C103.07 62.9745 103.015 62.9174 102.961 62.8564L102.477 63.4151C102.905 63.9737 103.581 64.2816 104.245 64.2816C105.327 64.2816 106.048 63.4379 106.048 62.4916C106.048 61.5166 105.44 61.1658 104.336 60.5287C104.2 60.4505 104.058 60.3681 103.907 60.2797ZM115.195 57.1104L114.174 57.9119L114.031 57.7219C113.589 57.1374 113.269 56.8119 112.73 56.8119C112.166 56.8119 111.872 57.2021 111.872 57.6118C111.872 57.9624 112.079 58.3656 112.499 58.6872C112.554 58.7283 112.608 58.7691 112.662 58.8095C113.349 59.3235 113.966 59.7855 114.418 60.2709C114.913 60.8034 115.229 61.386 115.229 62.1267C115.229 63.411 114.165 64.5647 112.719 64.5647C112.113 64.5647 111.602 64.3931 111.163 64.0669C110.728 63.7439 110.376 63.2784 110.068 62.7081L109.96 62.5088L111.05 61.8402L111.167 62.0588C111.636 62.9299 112.159 63.2916 112.651 63.2916C113.384 63.2916 113.915 62.7541 113.915 62.1381C113.915 61.782 113.759 61.4865 113.34 61.076C113.041 60.7833 112.634 60.4561 112.099 60.0257C111.868 59.8398 111.613 59.6347 111.332 59.4048C110.887 59.0461 110.557 58.3244 110.557 57.646C110.557 56.3735 111.543 55.4931 112.752 55.4931C113.862 55.4931 114.52 56.1809 115.06 56.924L115.195 57.1104ZM111.479 59.2194C111.753 59.4436 112.004 59.6458 112.234 59.8305C113.546 60.8858 114.149 61.3716 114.149 62.1381C114.149 62.902 113.496 63.5291 112.651 63.5291C112.08 63.5291 111.539 63.1425 111.078 62.3782C111.038 62.3124 110.999 62.2438 110.961 62.1723L110.274 62.5942C110.871 63.7001 111.603 64.3272 112.719 64.3272C114.037 64.3272 114.994 63.2783 114.994 62.1267C114.994 60.8506 113.956 60.0734 112.517 58.9962C112.464 58.957 112.411 58.9174 112.358 58.8774C111.896 58.5239 111.637 58.0565 111.637 57.6118C111.637 57.076 112.031 56.5743 112.73 56.5743C113.342 56.5743 113.715 56.9318 114.113 57.4421C114.147 57.486 114.182 57.531 114.217 57.577C114.217 57.5772 114.217 57.5774 114.217 57.5776L114.871 57.0646C114.871 57.0646 114.871 57.0645 114.871 57.0646C114.341 56.3349 113.744 55.7306 112.752 55.7306C111.659 55.7306 110.792 56.5173 110.792 57.646C110.792 58.2617 111.096 58.9116 111.479 59.2194ZM122.95 61.3951H117.578C117.704 62.5443 118.515 63.3258 119.581 63.3258C120.157 63.3258 120.57 63.1618 120.889 62.9222C121.213 62.6786 121.453 62.3475 121.667 61.9917L121.782 61.8012L122.824 62.3563L122.719 62.5652C122.4 63.1994 121.988 63.6885 121.472 64.0178C120.955 64.3476 120.35 64.5077 119.659 64.5077C117.528 64.5077 116.304 62.8425 116.304 61.112C116.304 59.3489 117.594 57.6707 119.614 57.6707C120.522 57.6707 121.352 58.0031 121.958 58.6119C122.565 59.2215 122.936 60.0954 122.948 61.1549L122.95 61.3951ZM117.342 61.3951C117.334 61.3173 117.329 61.2381 117.327 61.1576H122.713C122.712 61.0772 122.709 60.998 122.704 60.9201C122.58 59.0534 121.248 57.9083 119.614 57.9083C117.744 57.9083 116.539 59.4588 116.539 61.112C116.539 62.731 117.677 64.2702 119.659 64.2702C120.889 64.2702 121.789 63.7355 122.398 62.6662C122.416 62.6345 122.434 62.6023 122.452 62.5696C122.471 62.5328 122.491 62.4954 122.51 62.4574L121.868 62.1153C121.428 62.845 120.831 63.5633 119.581 63.5633C118.371 63.5633 117.47 62.6626 117.342 61.3951ZM117.406 60.4735H121.868C121.847 60.3914 121.824 60.3122 121.799 60.236C121.435 59.1486 120.594 58.6608 119.626 58.6608C118.627 58.6608 117.863 59.1673 117.482 60.236C117.455 60.3123 117.429 60.3915 117.406 60.4735ZM117.733 60.236H121.55C121.393 59.8102 121.158 59.5001 120.877 59.287C120.532 59.0264 120.102 58.8983 119.626 58.8983C119.134 58.8983 118.72 59.0311 118.39 59.2924C118.121 59.5059 117.896 59.8153 117.733 60.236ZM125.115 57.8304V58.2791C125.486 57.9 125.91 57.6707 126.424 57.6707C126.735 57.6707 126.939 57.7505 127.091 57.8304H128.397L130.251 61.8989L132.084 57.8304H133.423L130.471 64.3595H130.034L127.272 58.3014L126.792 59.0841L126.601 58.9872C126.515 58.9438 126.41 58.8983 126.3 58.8983C125.89 58.8983 125.443 59.2623 125.231 60.0448C125.139 60.397 125.115 60.9911 125.115 61.8189V64.3595H123.834V57.8304H125.115ZM125.004 59.9833C125.23 59.151 125.737 58.6608 126.3 58.6608C126.469 58.6608 126.616 58.7292 126.706 58.7748L127.111 58.1135L127.09 58.1014C127.034 58.0685 126.974 58.0335 126.903 58.0024C126.783 57.9496 126.634 57.9083 126.424 57.9083C125.92 57.9083 125.501 58.1668 125.115 58.6319C125.036 58.7279 124.958 58.8327 124.88 58.9458V58.0679H124.069V64.1219H124.88V61.8189C124.88 60.998 124.903 60.3709 125.004 59.9833ZM130.252 62.4688L128.247 58.0679H127.424L130.185 64.1219H130.32L133.058 58.0679H132.235L130.252 62.4688ZM134.115 64.3595V57.8304H135.351V64.3595H134.115ZM135.116 64.1219H134.35V58.0679H135.116V64.1219ZM133.856 56.2095C133.856 55.708 134.26 55.3335 134.722 55.3335C135.195 55.3335 135.599 55.7194 135.599 56.2095C135.599 56.6941 135.201 57.0969 134.722 57.0969C134.238 57.0969 133.856 56.6886 133.856 56.2095ZM142.075 62.1886L143.073 62.8311L142.942 63.0326C142.303 64.0146 141.206 64.5077 139.941 64.5077C137.844 64.5077 136.416 62.9697 136.416 61.1462C136.416 59.2327 137.899 57.6707 139.997 57.6707C141.207 57.6707 142.343 58.1762 142.948 59.2002L143.066 59.401L142.068 60.0253L141.939 59.8532C141.458 59.2105 140.797 58.8983 139.963 58.8983C138.571 58.8983 137.674 59.9214 137.674 61.0892C137.674 62.2841 138.564 63.3258 139.974 63.3258C140.769 63.3258 141.424 63.0066 141.944 62.3539L142.075 62.1886ZM142.126 59.7097C141.597 59.0028 140.865 58.6608 139.963 58.6608C138.442 58.6608 137.439 59.7895 137.439 61.0892C137.439 62.4118 138.431 63.5633 139.974 63.5633C140.842 63.5633 141.563 63.2098 142.126 62.503L142.746 62.902C142.703 62.9688 142.657 63.0332 142.609 63.0952C142.009 63.8694 141.057 64.2702 139.941 64.2702C137.969 64.2702 136.651 62.8336 136.651 61.1462C136.651 59.3676 138.025 57.9083 139.997 57.9083C141.062 57.9083 142.04 58.3195 142.617 59.1237C142.647 59.1659 142.676 59.2092 142.704 59.2536C142.719 59.2761 142.732 59.2989 142.746 59.322L142.126 59.7097ZM150.583 61.3951H145.21C145.336 62.5443 146.147 63.3258 147.213 63.3258C147.789 63.3258 148.202 63.1618 148.521 62.9222C148.845 62.6786 149.085 62.3475 149.3 61.9917L149.414 61.8012L150.457 62.3563L150.352 62.5652C150.032 63.1994 149.62 63.6885 149.104 64.0178C148.588 64.3476 147.982 64.5077 147.292 64.5077C145.161 64.5077 143.936 62.8425 143.936 61.112C143.936 59.3489 145.227 57.6707 147.247 57.6707C148.155 57.6707 148.985 58.0031 149.591 58.6119C150.198 59.2215 150.568 60.0954 150.58 61.1549L150.583 61.3951ZM144.974 61.3951C144.967 61.3173 144.962 61.2381 144.96 61.1576H150.345C150.344 61.0772 150.341 60.998 150.336 60.9201C150.212 59.0534 148.88 57.9083 147.247 57.9083C145.376 57.9083 144.171 59.4588 144.171 61.112C144.171 62.731 145.309 64.2702 147.292 64.2702C148.521 64.2702 149.422 63.7355 150.031 62.6662C150.049 62.6345 150.066 62.6023 150.084 62.5696C150.104 62.5328 150.123 62.4954 150.142 62.4574L149.5 62.1153C149.061 62.845 148.464 63.5633 147.213 63.5633C146.003 63.5633 145.103 62.6626 144.974 61.3951ZM145.038 60.4735H149.5C149.479 60.3914 149.456 60.3122 149.431 60.236C149.067 59.1486 148.227 58.6608 147.258 58.6608C146.259 58.6608 145.496 59.1673 145.114 60.236C145.087 60.3123 145.062 60.3915 145.038 60.4735ZM145.365 60.236H149.182C149.026 59.8102 148.79 59.5001 148.509 59.287C148.165 59.0264 147.735 58.8983 147.258 58.8983C146.766 58.8983 146.352 59.0311 146.023 59.2924C145.753 59.5059 145.528 59.8153 145.365 60.236ZM151.138 63.4057L151.925 62.4983L152.102 62.698C152.459 63.1019 152.817 63.2916 153.178 63.2916C153.664 63.2916 154.047 62.9358 154.047 62.5258C154.047 62.261 153.893 62.01 153.675 61.8912L153.672 61.8896C153.596 61.8468 153.522 61.8052 153.449 61.7645C152.877 61.4437 152.407 61.18 152.078 60.8833C151.886 60.7108 151.734 60.5203 151.63 60.2915C151.526 60.0625 151.478 59.8081 151.478 59.5158C151.478 58.413 152.33 57.6707 153.358 57.6707C154.101 57.6707 154.653 58.0397 155.178 58.5593L155.346 58.7254L154.523 59.5773L154.355 59.4128C154.015 59.0793 153.71 58.8983 153.313 58.8983C152.917 58.8983 152.646 59.1732 152.646 59.4702C152.646 59.6936 152.793 59.9575 152.992 60.0746C153.134 60.1585 153.272 60.238 153.405 60.3145C153.893 60.5963 154.309 60.836 154.612 61.0984C154.811 61.2709 154.973 61.4623 155.084 61.6947C155.196 61.9278 155.249 62.1888 155.249 62.4916C155.249 63.5621 154.429 64.5191 153.211 64.5191C152.478 64.5191 151.732 64.1807 151.257 63.5606L151.138 63.4057ZM152.873 60.2797C152.603 60.1201 152.411 59.7781 152.411 59.4702C152.411 59.0142 152.817 58.6608 153.313 58.6608C153.797 58.6608 154.158 58.8888 154.518 59.2422L155.014 58.7292C154.957 58.6726 154.9 58.6184 154.843 58.5667C154.393 58.1596 153.938 57.9083 153.358 57.9083C152.445 57.9083 151.713 58.5581 151.713 59.5158C151.713 60.518 152.337 60.8683 153.566 61.5583C153.637 61.5984 153.711 61.6396 153.786 61.6821C154.079 61.8417 154.282 62.1723 154.282 62.5258C154.282 63.0958 153.763 63.5291 153.178 63.5291C152.79 63.5291 152.428 63.3523 152.091 63.0277C152.035 62.9745 151.981 62.9174 151.927 62.8564L151.442 63.4151C151.871 63.9737 152.547 64.2816 153.211 64.2816C154.293 64.2816 155.014 63.4379 155.014 62.4916C155.014 61.5166 154.406 61.1658 153.302 60.5287C153.166 60.4505 153.023 60.3681 152.873 60.2797ZM85.3334 61.1006C85.3334 59.8009 84.3419 58.6608 82.9674 58.6608C81.6266 58.6608 80.5901 59.7211 80.5901 61.1234C80.5901 62.6284 81.7393 63.5633 82.9674 63.5633C84.2968 63.5633 85.3334 62.4232 85.3334 61.1006ZM87.4926 61.112C87.4926 59.379 88.8221 57.9083 90.6135 57.9083C92.4049 57.9083 93.7344 59.379 93.7344 61.112C93.7344 62.8336 92.4162 64.2816 90.6135 64.2816C88.8108 64.2816 87.4926 62.8336 87.4926 61.112ZM92.9457 61.1234C92.9457 59.7781 91.8866 58.6608 90.6135 58.6608C89.3291 58.6608 88.2813 59.7781 88.2813 61.1234C88.2813 62.446 89.2615 63.5291 90.6135 63.5291C91.9542 63.5291 92.9457 62.446 92.9457 61.1234ZM134.091 56.2095C134.091 55.8447 134.384 55.571 134.722 55.571C135.071 55.571 135.364 55.8561 135.364 56.2095C135.364 56.5629 135.071 56.8594 134.722 56.8594C134.373 56.8594 134.091 56.5629 134.091 56.2095Z' fill-rule='evenodd' fill='white'></path>
                                    <defs>
                                        <pattern height='1' id='pattern0' patterncontentunits='objectBoundingBox' width='1'>
                                            <use transform='translate(0 -0.00137882) scale(0.000541712 0.0052227)'></use>
                                        </pattern>
                                        <image height='192' id='image0' width='1846'></image>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <h4 className='section-heading'>Resources</h4>
                        <ul className='footer-links'>
                            <li className='item'>
                                <a className="link" href="#rules">Rules</a>
                            </li>
                            <li className='item'>
                                <a className="link" href="#privacy">Privacy Policy</a>
                            </li>
                            <li className='item'>
                                <a className="link" href="#terms">Terms and Conditions</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;