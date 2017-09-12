import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Panel from './components/Panel';
import Twits from './components/Twits';
import * as actions from './actions/index'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter: "",
      name: "Stranger"
    };
    this.handleAddCallBack = this.handleAddCallBack.bind(this);
    this.handleNameCallBack = this.handleNameCallBack.bind(this);
  }

  componentDidMount(){
    this.props.actions.fetchTs();
  }

  handleAddCallBack(e){
    var input = document.getElementsByTagName('input');
    var name = input[0].value == "" ? "Stranger" : input[0].value;
    var note = input[1].value;
    var imgid = Math.floor(Math.random() * 8) + 1; 
    var time = Date();
    if (note !== "") {
      this.props.actions.addT({imgid: imgid, name: name, note: note, time: time});
    }
    
    input[1].value = "";

  }

  handleNameCallBack(e){
    var name = document.getElementsByTagName('input')[0].value;
    this.setState({name: name});
  }
  render() {

    return (
      <div className="App">
          <Grid>
            <Row className="show-grid">
              <Col xs={12}>
                <MuiThemeProvider>
                  <Header name={this.state.name}/>
                </MuiThemeProvider>
              </Col>
            </Row>
          <Row className="show-grid">
            <Col xs={4}>
              <MuiThemeProvider>
                <Panel handleClick={this.handleAddCallBack} handleName={this.handleNameCallBack}/>
              </MuiThemeProvider>
            </Col>
            <Col xs={8}>
              <MuiThemeProvider>
                <Twits />
              </MuiThemeProvider>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { twits: state.twits };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

