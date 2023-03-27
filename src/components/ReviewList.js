import React from "react" 
import ReviewForm from "./ReviewForm";

// import Review from "./Review";
//import Card from 'react-bootstrap/Card';

export default class ReviewList extends React.Component
console.log("This works");
{

    constructor(props) {
        super(props);
        this.state = {
            review: " ", //an empty string for a single review
            reviews: [], //push reviews into this array
        };
    }
//for review form
    handleChange = (event) => {
        this.setState({ review: event.target.value });
    };

handleSubmit = (event) => {
    event.preventDefault();

    let newReview = {
        review: this.state.review,
    };

    this.setState({
        reviews: [...this.state.reviews, newReview],
        review: " ", 
    })
}

render() {
    return (
        <div>
            <ReviewForm
            review={review.review}
            />
            <form onSubmit={this.handleSubmit}>
            </form>
            <input
            type="text"
            className="form-control"
            id="review"
            value={this.state.review}
            onChange={this.handleChange}
            />
             <button type="submit" className="btn btn-primary">
                Submit
              </button>
              
        </div>


    )
    
}

    // constructor(props) {
    //     super(props);
    //       this.state = {reviews: new Array()};
    //   }
    
    //   // onHandleChange()
    //   onFormSubmit(formState) {
    //     const reviews = this.state.reviews.slice();
    //     reviews.push(formState);
    //     this.setState ({
    //       reviews
    //     })
    //   }
    
    //   render() {
    //     return (
    //       <div className='container'>
    //         {this.state.reviews.map(function(review, index) {
    //           return <div key={index}>
    //             {/* <{review.reviewInfo}> */}
    //           <Review />
    //         })}
    //         <ReviewForm onFormSubmit={(formState) => this.onFormSubmit(formState)} />
    //       </div>
    //     )
    //   }
    }

    console.log("This works");
    