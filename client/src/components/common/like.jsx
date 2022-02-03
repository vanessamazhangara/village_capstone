import React, { Component } from "react";
// import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
// import  { faHeart, faTrash} from '@fortawesome/free-solid-svg-icons';
// import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
// import { faHeart as far}

class Like extends Component {
   state = {
       loading: false,
   }

  

  handleClick= async () => {
   if (!this.state.loading) {
     this.setState({loading: true})
     await this.props.handleLike()
     this.setState({loading: false})
   }

  }

  render() {
    let classes = "fa fa-heart";
    if (this.props.liked) classes += "-o";

    return (
      <>
      <i
        
        onClick={this.handleClick}
        style={{ cursor: "pointer", color: "#DF345D"}}
        className={classes}
        aria-hidden="true"
      ></i>
      {this.state.loading && <span>adding new like</span>}
      </>
    );
  }
}

export default Like;
