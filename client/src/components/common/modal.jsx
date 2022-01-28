import React, { Component } from "react";
import axios from "axios";
import { ModalStyle, Form } from "../../styles/modal.style";

class Modal extends Component {
  constructor() {
    super();

    this.state = {
        review: "",
      title: "",
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
      });
  }


  submitReview = async (e) => {
      
    await axios.post(`http://localhost:6500/reviews/${this.props.userId}`, {
        
        review: this.state.review,
        title: this.state.title,
        name: this.state.name,
        photographerId: `${this.props.userId}`
    })
    .then((res) => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
  };

  async componentDidUpdate() {
      axios.get(`http://localhost:6500/reviews/${this.props.userId}`)
  }

  render() {
    const { closeModal } = this.props;
    return (
      <ModalStyle>
        <Form onSubmit={this.submitReview}>
          <button onClick={closeModal}><i className="fa fa-window-close" aria-hidden="true"></i></button>
          <div>
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          </div>
          <div>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          </div>
          <div>
            <label>Review</label>
            <input type="text" name="review" value={this.state.review} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit!</button>
        </Form>
      </ModalStyle>
    );
  }
}

export default Modal;
