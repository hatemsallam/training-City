import React from 'react'


class Map extends React.Component{
 
  
  
  
    render() {
      return(
        <>
{ this.props.showResults &&
    <img src = {`https://maps.locationiq.com/v3/staticmap?key=pk.58e206a65669d1a99de86bf5a04fb1a4&center=${this.props.lat},${this.props.lon}&zoom=%3Czoom%3E&size=%3Cwidth%3Ex%3Cheight%3E&format=%3Cformat%3E&maptype=%3CMapType%3E&markers=icon:%3Cicon%3E|%3Clatitude%3E,%3Clongitude%3E&markers=icon:%3Cicon%3E|%3Clatitude%3E,%3Clongitude%3E`} />}
  
  
  
        </>
      )
    }
  }
  
  
  
  
  export default Map ;