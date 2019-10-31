import React, {Component} from 'react'

class SearchBar extends Component {
  state = {
    searchName: "",
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { funcSearch } = this.props;
    this.setState({
      [name]: value 
    }, () => {
      funcSearch(value)
    })
  }

  render() {

    const { searchName } = this.state;
    return (
      <div>
        <input type="text" value={searchName} name="searchName" onChange={(e) => this.handleChange(e)} />
      </div>
    )
  }
}

export default SearchBar