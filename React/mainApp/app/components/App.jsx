import React, { Component } from 'react';
import { connect } from 'react-redux';
import { myAction, fetchMyData } from '../actions';
import Tree from './Tree';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(myAction());
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  fetchData = () => {
    const { dispatch } = this.props;
    dispatch(fetchMyData());
    console.log('click');
  };

  render() {
    console.log('render method');
    return (
      <div>
        <button onClick={this.fetchData}>Fetch</button>
        <Tree films={this.props.films} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    films: state.myData.second
  }
}

export default connect(mapStateToProps)(App);
