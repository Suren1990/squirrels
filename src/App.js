import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import './assets/styles/App.scss';
import './assets/styles/fonts.css';
import './assets/styles/colors.css';
import HeaderBanner from './components/HeaderBanner/HeaderBanner';

function App() {
  return (
    <div className="main">
      <div className="main_inner">
        <Header />
        <HeaderBanner />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
