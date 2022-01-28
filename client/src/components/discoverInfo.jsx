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
      
    };
  }

  async componentDidMount() {
    await axios
      .get(`http://localhost:6500/photographers/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        const photographer = {
            id: res.data[0].photographer_id,
            avatar: res.data[0].avatar ,
            first_name: res.data[0].first_name ,
            last_name: res.data[0].last_name ,
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
  }

  

  render() {
    const { photographer, gallery, reviews } = this.state;
    return (
      <>
        <Main>
          <Header></Header>
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
              <MessageBtn>{`Message, ${photographer.first_name}`}</MessageBtn>
            </Left>
            <Right>
            <SideBar id={photographer.id} />
                <Route path={`/discover/:id/gallery`} render={(props) => < Gallery {...props} gallery={gallery} /> } />
                <Route path={`/discover/:id/reviews`} render={(props) => <Reviews  openModal={this.openModal} {...props} reviews={reviews}/>  }/>
           

              {/* <div class="row gallery">
              <div class="col-md-4">
                <img src="https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <div class="col-md-4">
                <img src="https://images.pexels.com/photos/861034/pexels-photo-861034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <div class="col-md-4">
                <img src="https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <div class="col-md-4">
                <img src="https://images.pexels.com/photos/5049/forest-trees-fog-foggy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <div class="col-md-4">
                <img src="https://images.pexels.com/photos/428431/pexels-photo-428431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <div class="col-md-4">
                <img src="https://images.pexels.com/photos/50859/pexels-photo-50859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
            </div> */}
            </Right>
          </Section>
        </Main>
        {this.state.showModal && <Modal closeModal={this.state.closeModal} userId={photographer.id} />}
      </>
    );
  }
}

export default DiscoverInfo;
