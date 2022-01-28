import axios from "axios";
import React, { Component } from "react";
// import {
//   Main,
//   LeftBar,
//   ProfilePic,
//   TopDiv,
//   Avatar,
//   Name,
//   LinksContainer,
//   Ul,
//   Greeting,
//   Text,
//   Account,
//   Info,
//   UpdateBtn,
// } from "../styles/dashboard.style";
import {Container} from '../styles/userDashboard.styles';
import Dashbar from "./dashBar";
import { Route } from "react-router-dom";
import DashAccount from "./dashContent";
import DashReviews from "./dashReviews";


class Dashboard extends Component {
  state = {
      loginUser: {},
  };

  async componentDidMount() {
      
      axios.get(`http://localhost:6500/photographers/${JSON.parse(localStorage.getItem(`villageUser`)).id}`)
      .then(res => {
          console.log(res.data[0])
          this.setState({loginUser: res.data[0]})
      })
  }
  render() {
    // if(!this.props.user) {
    //     return <Redirect to='/'/>
    // }
    const {loginUser} = this.state;
    return (
      
        //  <Main> 
        //   <Greeting>
        //     <Text>
        //       Welcome,
        //       <span> Jane</span>
        //     </Text>
        //   </Greeting>

        //   <section>
        //     <LeftBar>
        //       <ProfilePic>
        //         <Avatar src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
        //         <Name>Jane Doe</Name>
        //       </ProfilePic>
        //       <LinksContainer>
        //         <Ul>
        //           <li>Account</li>
        //         </Ul>
        //         <Ul>
        //           <li>Reviews</li>
        //         </Ul>
        //       </LinksContainer>
        //     </LeftBar>
        //     <Account>
        //       <Info>
        //           <p class="mb-0">First Name</p>
        //         <p class="col-sm-9 text-secondary">Kenneth Valdez</p>
        //       </Info>
        //       <Info>
        //           <p class="mb-0">Email</p>
        //         <p class="col-sm-9 text-secondary">email@email</p>
        //       </Info>
        //       <Info>
        //           <p class="mb-0">City</p>
        //         <p class="col-sm-9 text-secondary">City</p>
        //       </Info>
        //       <Info>
        //           <p class="mb-0">State</p>
        //         <p class="col-sm-9 text-secondary">State</p>
        //       </Info>
        //       <UpdateBtn>Update</UpdateBtn>
        //     </Account>
        //   </section>
        // </Main>
      

      <Container>
          <Dashbar loginUser={loginUser} />
          <Route path='/dashboard/:id/account' render={(props) => <DashAccount loginUser={loginUser} {...props} />} />
          <Route path='/dashboard/:id/reviews' render={(props) => <DashReviews loginUser={loginUser} {...props} />} />
         
          


      </Container>
    );
  }
}

export default Dashboard;
