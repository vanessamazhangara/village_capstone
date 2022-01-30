import React, { Component } from "react";
import {ReviewDiv, Card, ReviewBtn} from '../styles/review.style'

class Reviews extends Component {
 

  render() {
    const reviews = this.props.reviews;
    return (
      <ReviewDiv>

       <div>
         <ReviewBtn onClick={this.props.openModal}>Write Review</ReviewBtn>
        </div> 
        {reviews.map((review) => {
          return (
            <Card key={review.id}>
              <h3>{review.title}</h3> 
              <span>{`${review.name}`}</span>
              <p>
                {review.review}
              </p>
            </Card>
          );
        })}
      </ReviewDiv>
    );
  }
}

export default Reviews;
