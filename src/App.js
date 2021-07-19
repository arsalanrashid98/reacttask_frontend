
import './App.css';
import ChipotleNav from './components/chipotle-nav';
import Faqs from './components/faqs';
import LandingFold from './components/landing-fold';
import Footer from './components/landing-footer';
import Overview from './components/overview';
import Prizing from './components/prizing';
import RewardBanner from './components/registration-reward-banner';
import Schedule from './components/schedule';
import Scoring from './components/scoring';

function App() {
  return (
    <div className="App chipotle-landing">

      <ChipotleNav />
      <LandingFold />
      <Overview />
      <Schedule />
      <RewardBanner />
      <Scoring />
      <Prizing />
      <Faqs />
      <Footer />

    </div>
  );
}

export default App;
