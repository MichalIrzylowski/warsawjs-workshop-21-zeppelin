import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import ProjectList from './components/ProjectList';
import Menu from './components/Menu'
import ProjectView from './components/ProjectView';

class App extends Component {
  render() {
    return(

        <Provider {...this.props}>
          <BrowserRouter>
            <div>
              <Menu />
              <Route exact path='/' component={ProjectList} />
              <Route exact path='/projects/:projectId' component={ProjectView} />
            </div>

        </BrowserRouter>
        </Provider>
    )
  }
}

export default App;
