import React, { Component } from 'react';
import './App.css';
import DrugsList from './components/drugsList';
import Logo from './components/logo';
import Search from './components/search'
import SelectedDrugs from './components/selectedDrugs'
import GoogleMap from './components/map';
import {BrowserRouter, Route} from 'react-router-dom'
//bootstrap
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      picked: [],
      lat: '',
      lon: '',
      count: 0,
      pickedDrugs: []
    }
  }


  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }

  addDrug(id){
    const {picked} = this.state;
    console.log('adding id', id);
    const pickedDrugList = this.state.picked.concat([id]);
    this.setState({
      picked: pickedDrugList
    })
  }

  //chuj kurwa nie dziala jak powinno popraw
  deleteDrug(id){
    //const {count} = this.state
    const {picked} = this.state;
    console.log('kliniety id to', id)
    var index = picked.indexOf(id);
    console.log('index to',index);
    const newDrugs = [
      ...picked.slice(0, index),
      ...picked.slice(index+1)
    ]
    this.setState({
      picked: newDrugs
    })
    console.log('usuwam id', id, 'nowa tablica new drugs', {newDrugs})
  }

  sendDrugs(){
    const {picked, lat, lon} = this.state
    console.log('Wysylam leki o id: ', {picked}, 'Coordynaty uzytkownika: ', {lat}, '{}', {lon} )
  }
  

  render() {
    console.log('Lokacja', this.props.coords)
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
          deleteDrug={this.deleteDrug.bind(this)}
          sendDrugs={this.sendDrugs.bind(this)}
          />

          <DrugsList
          drugs={this.props.drugs} 
          filterText={this.state.filterText}
          addDrug={this.addDrug.bind(this)}
          />
         
        </div>

        <div className='col-md-8'>
          <GoogleMap />
        </div>
      </div>
    )
  }
}

export default App;
