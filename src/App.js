import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Card, ListGroup} from 'react-bootstrap'
import Map from './Components/Maps';

class App extends React.Component{
  constructor(props) {
    super(props) 
    this.state = {
      displayName : '' ,
      lat : '' ,
      lon : '' ,
      showResults: false,
      displayErr: false,
      errorMsg: 'bad response'
    }
  }

  getCityInfo = (event) => {
    event.preventDefault();
    let cityName = event.target.cityName.value
    axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${cityName}&format=json`)
    .then(result => {
      this.setState({
        displayName : result.data[0].display_name,
        lat: result.data[0].lat,
        lon: result.data[0].lon,
        showResults : true
      })
    })
    .catch(err =>{
      this.setState({
displayErr: true
      })
    })
   
  }



  render() {
    return(
      <>
      <Form onSubmit={this.getCityInfo}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter City Name</Form.Label>
    <Form.Control type="text" placeholder="Enter city name" name="cityName" />
 
  </Form.Group>

  <Button  variant="primary" type="submit">
    Explore
  </Button>
</Form>
{this.state.showResults && 

<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>{this.state.displayName}</ListGroup.Item>
    <ListGroup.Item>{this.state.lat}</ListGroup.Item>
    <ListGroup.Item>{this.state.lon}</ListGroup.Item>
  </ListGroup>

</Card>}

<Map lat = {this.state.lat} lon = {this.state.lon} showResults={this.state.showResults}/>



{
  this.state.displayErr && this.state.errorMsg
}

      </>
    )
  }
}




export default App ;