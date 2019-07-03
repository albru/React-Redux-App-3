import React, { Component } from 'react';
import Aux from '../hoc/_Aux';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';


class App extends Component {

  render () {
    return (
      <Aux>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;