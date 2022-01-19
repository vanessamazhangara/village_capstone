import React, { Component } from "react";
// import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
// import  { faHeart, faTrash} from '@fortawesome/free-solid-svg-icons';
// import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
// import { faHeart as far}

class Like extends Component {
   state = {
       like: 0,
   }

   addLike = () => {
    let newCount = this.state.like + 1;
      this.setState({
      likes: newCount
    });

  };
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";

    return (
      <i
        onClick={this.addLike}
        onClick={this.props.toggleLike}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      >{this.state.like}</i>
    );
  }
}

export default Like;
