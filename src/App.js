import React, { Component } from 'react';
import './App.css';
import DrugsList from './components/drugsList';
import Logo from './components/logo';
import Search from './components/search'
import SelectedDrugs from './components/selectedDrugs'
import Map from './components/map';
//bootstrap
import { Navbar, Jumbotron, Button } from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      picked: []
    }
  }

  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }

  addDrug(id){
    // console.log('adding id', id);
    const pickedDrugList = this.state.picked.concat([id]);
    this.setState({
      picked: pickedDrugList
    })
  }

  render() {
   
    return(
      <div>
        <div className='col-md-4 search'>
          <Logo />
          <Search 
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
          />
          <SelectedDrugs
          picked={this.state.picked}
          drugs={this.props.drugs} 
          />

          <DrugsList
          drugs={this.props.drugs} 
          filterText={this.state.filterText}
          addDrug={this.addDrug.bind(this)}
          />
        </div>

        <div className='col-md-8'>
          <Map />
          
        </div>
      </div>
    )
  }
}

export default App;
