import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import FoodBox from './components/FoodBox/FoodBox';
import Form from './components/Form/Form';
import SearchBar from './components/SearchBar/SearchBar';
import TodayList from './components/TodayList/TodayList';

import foods from './foods.json';


class App extends Component {

  state = {
    foodsList: foods,
    filteredFoods: foods,
    todayList: [],
  }


  handleSubmit = (product) => {
    const {foodsList, filteredFoods} = this.state;
    foodsList.push(product)
    filteredFoods.push(product)

    this.setState({
      foodsList,
      filteredFoods,
    })
  }

  filterFoods = (filter) => {
    console.log('this is filter', filter)
    const { foodsList, filteredFoods } = this.state;
    const filteredList = foodsList.filter((food) => {
      return food.name.toLowerCase().includes(filter)
    })

    this.setState({
      filteredFoods: filteredList,
    })
  }

  addList = (product) => {
    const { todayList } = this.state;
    todayList.push(product)
    console.log('this is product pushed:', product)
    this.setState({
      todayList
    })
  }

  render() {

    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <br/>
        <Form funcSubmit={this.handleSubmit}/>
        <SearchBar funcSearch={this.filterFoods} />
        <TodayList todayList={this.state.todayList} />
        <FoodBox addList={this.addList} foods={this.state.filteredFoods}/>
      </div>
    );
  }
}

export default App;
