import React, { Component } from "react";
import {DashCard} from '../styles/userDashboard.styles'

class DashReviews extends Component {
  state = {};
  render() {
    const { loginReviews } = this.props;
    return (
      <div>
        {loginReviews.map((review) => {
          return <DashCard key={review.id}>
              <h3>{review.title}</h3> 
              <span>{`${review.name}`}</span>
              <p>
                {review.review}
              </p>
              </DashCard>;
        })}
      </div>
    );
  }
}

export default DashReviews;
