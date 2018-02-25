import React, {
  Component,
} from 'react';

import { connect } from 'react-redux';

import {
  activateGeod,
  closeGeod,
    subTextAction,
} from './redux';

// App.js
export class App extends Component {

  render() {
    return (
      <div>

        <h1>{this.props.geod.title || 'Hello World!'}</h1>

        {this.props.geod.title ?
          <button onClick={this.props.closeGeod}>
            Exit Geod
          </button> :
          <button onClick={() => this.props.activateGeod({ title: 'I am a geo dude!' })}>
            Click Me!
          </button>
       }

          <button onClick={() => this.props.setSubText(`${new Date()}`)}>
              Set subtext
          </button>

       <span> {`${ this.props.subText }`} </span>

      </div>
    );
  }

}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
    geod: state.geod,
    subText: state.subText
});

const mapDispatchToProps = dispatch => {
  return {
      activateGeod: geod => dispatch(activateGeod(geod)),
      closeGeod: () => dispatch(closeGeod()),
      setSubText: text => dispatch(subTextAction(text))
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
