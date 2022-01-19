import React, { Component } from 'react';
import { Main, Container, ContainerTwo } from '../styles/landing.style';

class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <Main>
                <Container>
                    {/* <img src='https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60' alt=''/> */}
                </Container>
                <ContainerTwo>
                <div>
                    <h1>Discover and hire local photographers in your area.</h1>
                    <p>Photographers, sign up today and begin booking sessions in your city! </p>
                </div>
                <button>Sign Up</button>
                </ContainerTwo>
            </Main>
        );
    }
}
 
export default Landing;