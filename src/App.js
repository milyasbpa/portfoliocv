import React, {Component,Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/General.css';

import Header from './component/Header';
import Int from './component/Int';
import Abt from './component/Abt';
import Exp from './component/Exp';
import FutProj from './component/FutProj';
import NowProj from './component/NowProj';
import Contact from './component/Contact';
import Footer from './component/Footer';


class App extends Component {
  render() {
    return(
      <Fragment>
        <Header />
        <Int />
        <Abt />
        <Exp />
        <FutProj />
        <NowProj />
        <Contact />
        <Footer />
      </Fragment>
    )
  }
}

export default App;
