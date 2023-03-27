//a component that holds all the information for each individual movie

import React from "react" 
import Card from 'react-bootstrap/Card';
// import ReviewList from './ReviewList';
// import Stars from './Stars';

export default class Movies extends React.Component {
    //all the movie data is referenced with below states
    //movie date is found in MovieList 
   
    constructor(props) {
        super(props);
        this.state = {
          id: props.id,
          title: props.title,
          image: props.image,
          summary: props.summary,
          released: props.released,
          // stars: props.stars
        };
      }
    
      render() {
        return (
          <Card style={{ width: '28rem' }}>
            <Card.Header>{this.state.title}</Card.Header>
            {/* <Card.Img variant="top" src={this.state.image} /> */}
            <Card.Body>
              <div className="cardBody">
                {this.state.summary}
                <br></br>
                {this.state.released}
                <br />
                {this.state.image}
              </div>
            </Card.Body>
            <Card.Footer className="text-muted">
              {/* <Stars /> */}
              {/* <ReviewList /> */}
            </Card.Footer>
          </Card>
        )
        }
    }
    