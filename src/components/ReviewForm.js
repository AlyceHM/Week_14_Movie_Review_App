import React from "react" 
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Stars from './Stars';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            userReview: '',
          }
        

        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    resetForm() {
      this.setState({
        userReview: '',
      });
    }
  
    submitReview() {
      this.props.onSubmit(this.state);
      this.resetForm();
    }
  
    // I think this should be onChange, parent gets handleChange
    // handleChange(e) {
    //   let target = e.target;
    //   let name = target.name;
    //   let value = target.value;
    //   this.setState({
    //     [name]: value
    //   });
    // }
  
    handleInputChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }

//     render() {
//       return (
//         <Form className="reviewForm">
//           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//             <Form.Label></Form.Label>
//             <Form.Control type="text" id="userReview" placeholder='Add Your Review Here' value={this.state.userReview} onChange={this.handleInputChange} />
//           </Form.Group>
//           <div className="d-grid gap-2">
//             <Button variant="primary" active size="lg" onClick={this.submitReview}>Save Review</Button>
//           </div>
//           <input type='hidden' name='movieId' id='movieId' value={this.id}/>
//           <input type='hidden' id='showMovieId' placeholder={this.id}/>
//           <div>
//             <Stars />
//           </div>
//         </Form>
//       )
//     }
        render() {
            return (
                
                <div>
                    
                    <div>
                        <h3>Write a review!</h3>
                        <input name="userReview" type="text" id="userReview" value={this.state.userReview} onChange={this.handleInputChange} />
                        <button className="btn btn-primary" onClick={this.submitReview}>Submit Review</button> 
                        <Stars />
                    </div>
                
                </div>
                
            )
        }


}

