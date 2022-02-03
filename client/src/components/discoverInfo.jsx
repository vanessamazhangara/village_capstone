import React, { Component } from "react";
import SideBar from "./sideBar";
import Gallery from "./gallery";
import Reviews from "./reviews";
import Modal from "./common/modal";
import { Route} from "react-router-dom";

import {
  Header,
  Left,
  ProfilePic,
  Social,
  Info,
  MessageBtn,
  Right,
  Section,
  Main,
} from "../styles/discoverInfo.style";
import Like from "./common/like";

import axios from "axios";

class DiscoverInfo extends Component {
  constructor() {
    super();

    this.state = {
      photographer: {},
      reviews: [],
      gallery: [],
      showModal: false,
      requestReceived: 0,
      
    };
  }

  async componentDidMount() {
    await axios
      .get(`http://localhost:6500/photographers/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data, "PPFGPPGDPF");
        const photographer = {
            id: res.data[0].photographer_id,
            avatar: res.data[0].avatar ,
            first_name: res.data[0].first_name ,
            last_name: res.data[0].last_name ,
            email: res.data[0].email,
            city: res.data[0].city,
            state: res.data[0].state,
            website: res.data[0].website,
        }
        this.setState({ photographer });
        const photos = res.data.map(photo => {
            return {id: photo.id, image_url: photo.image_url}
        })
        this.setState({gallery: photos})
      })
      .catch((err) => console.log(err));

      this.fetchReviews()
  }

  async componentDidUpdate(prevProps, prevState ) {
    if(prevState.requestReceived !== this.state.requestReceived) {
      this.fetchReviews()
    }
}

fetchReviews = async () => {
  await axios.get(`http://localhost:6500/reviews/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({reviews: res.data})
      })
      .catch((err) => console.log(err));
}

  openModal = () => {
    this.setState({showModal: true})
  }

  closeModal = () => {
    this.setState({showModal: false})
    console.log('CLOSE MODAL')
  }

  submitReview = async (data) => {
    //   e.preventDefault()
      
    await axios.post(`http://localhost:6500/reviews/${this.props.match.params.id}`, {
        
        review: data.review,
        title: data.title,
        name: data.name,
        photographerId: `${this.props.match.params.id}`
    })
    .then((res) => {
        console.log(res.data)
        this.closeModal()
        this.setState({requestReceived: this.state.requestReceived + 1})
        
    })
    .catch(err => console.log(err))
  };

  

  render() {
    const { photographer, gallery, reviews } = this.state;
    return (
      <>
        <Main>
          <Header></Header>
          {photographer.first_name ? (
             <Section>
             <Left>
               <ProfilePic>
                 <img
                   src={`${photographer.avatar}`}
                   alt="photographer-profile-pic"
                 />
               </ProfilePic>
               <Info>
                 <h4>{`${photographer.first_name} ${photographer.last_name}`}</h4>
                 <p>{`${photographer.city}, ${photographer.state}`}</p>
                 <p>{`${photographer.website}`}</p>
               </Info>
               <Social>
                 <Like>Likes</Like>
                 <i className="fa fa-facebook-square" aria-hidden="true"></i>
                 <i className="fa fa-instagram" aria-hidden="true"></i>
               </Social>
               <MessageBtn><a href={`mailto:${photographer.email}`} style={{textDecoration: "none", color: "black"}}>{`Message, ${photographer.first_name}`}</a></MessageBtn>
             </Left>
             <Right>
             <SideBar id={photographer.id} />
                 <Route path={`/discover/:id/gallery`} render={(props) => < Gallery {...props} gallery={gallery} /> } />
                 <Route path={`/discover/:id/reviews`} render={(props) => <Reviews  openModal={this.openModal} {...props} reviews={reviews}/>  }/>
             </Right>
           </Section>
          ) : <h1>loading...</h1>}
         
        </Main>
        {this.state.showModal && <Modal submitReview={this.submitReview}  closeModal={this.closeModal}  />}
      </>
    );
  }
}

export default DiscoverInfo;
