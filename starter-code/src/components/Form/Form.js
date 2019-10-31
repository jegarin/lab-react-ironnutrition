import React, {Component} from 'react';
import Button from '../Button/Button';

class Form extends Component {
  state = {
    foodInfo: {
      name: '',
      calories: '',
      image: '',
      quantity: '',
    },
    showForm: false,
  }

  toogleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }
  
  handleChange = (e) => {
    const { name, value} = e.target
    const { foodInfo } = this.state
    foodInfo[name]= value,     

    this.setState({
      foodInfo,
    })
  }

  
  render() {
    const { funcSubmit } = this.props
    const { showForm, foodInfo } = this.state

    console.log(`this is form food info ${JSON.stringify(foodInfo)}`)
    return (
      <div>
        <Button funcForm={() => this.toogleForm()}>Add New Food</Button>
        {showForm &&
            <div>
              <input type="text" name="name" value={foodInfo.name} placeholder="Food Name" onChange={(e) => this.handleChange(e)}/>
              <input type="number" name="calories" value={foodInfo.calories} placeholder="Food Calories" onChange={(e) => this.handleChange(e)}/>
              <input type="text" name="image" value={foodInfo.image} placeholder="Food Image URL" onChange={(e) => this.handleChange(e)}/>
              <input type="number" name="quantity" value={foodInfo.quantity} placeholder="Food Quantity" onChange={(e) => this.handleChange(e)}/>
              <Button funcForm={() => funcSubmit(foodInfo)}>Create Product</Button>
              <Button funcForm={() => this.toogleForm()}>Cancel</Button>
            </div>
          }  
      </div>

    )
  }
}

export default Form;