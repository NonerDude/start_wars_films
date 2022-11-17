
import React from 'react';
import Card from '@mui/material/Card';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.props.getFilms();
    }
    
    render(){
        console.log(this.props.films)
      return this.props.films.map(({title, release_date, opening_crawl, director, producer, characters}) => <Card style={{margin: 15, padding: 15}}>
        <h6>{title}</h6>
        <h6>{release_date}</h6>
        <h6>{opening_crawl}</h6>
        <h6>{director}</h6>
        <h6>{producer}</h6>
        <h6>{characters}</h6>
        {/* {name, height, mass, hair_color, skin color, eye color, birth year} */}
      </Card>)
    }
}

export default App;
