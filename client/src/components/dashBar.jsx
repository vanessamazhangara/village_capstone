import React, { Component } from "react";
import { Link } from "react-router-dom";
import {LeftBar, ProfilePic, Avatar, Name, LinksContainer, Ul, Links} from '../styles/userDashboard.styles';

class Dashbar extends Component {
  state = {};
  render() {
      const {loginUser} = this.props;
    return (
      <>
        <LeftBar>
          <ProfilePic>
            <Avatar src={loginUser.avatar} />
            <Name>{`${loginUser.first_name} ${loginUser.last_name}`}</Name>
          </ProfilePic>
          <LinksContainer>
            <Ul>
                <Link to={`/dashboard/${loginUser.id}/account`} style={{ textDecoration: 'none', color: "white"}}>
                <Links><i class="fa fa-cog" aria-hidden="true"></i>Account</Links>
                </Link>
              
            </Ul>
            <Ul>
                <Link to={`/dashboard/${loginUser.id}/reviews`} style={{ textDecoration: 'none', color: "white"}}>
                <Links><i class="fa fa-bars" aria-hidden="true"></i>Reviews</Links>

                </Link>
            </Ul>
          </LinksContainer>
        </LeftBar>
      </>
    );
  }
}

export default Dashbar;
