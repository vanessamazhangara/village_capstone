import React, { Component } from 'react';
// import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
// import  { faHeart, faTrash} from '@fortawesome/free-solid-svg-icons';
// import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
// import { faHeart as far}


class Like extends Component {
    // state = {
    //     className: 'heart'
    //   }
    
    //   toggleClass = (e) => {
    //     if (this.state.className === 'heart') {
    //       this.setState({ className: 'clicked' })
    //     } else if (this.state.className === 'clicked') {
    //       this.setState({ className: 'heart' })
    //     }
    //   }
    

    render() { 
        return (
            <i className="fa fa-heart-o" aria-hidden="true"></i>
        )
            
    }
}
 
export default Like;