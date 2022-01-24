import React, { Component } from "react";
import {
  Header,
  Left,
  ProfilePic,
  Social,
  Info,
  MessageBtn,
  Right,
  Section,
  Nav
} from "../styles/discoverInfo.style";
import Like from "./common/like";

import axios from "axios";

class DiscoverInfo extends Component {
  constructor() {
    super();

    this.state = {
      photographer: {},
    };
  }

  async componentDidMount() {
    await axios
      .get(`http://localhost:6500/photographers/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ photographer: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { photographer } = this.state;
    return (
      <>
        <main>
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
              <Nav>
                <li>Gallery</li>
                <li>Collections</li>
              </Nav>

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
        </main>
      </>
    );
  }
}

export default DiscoverInfo;
