import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Like from "./common/like";
import { PortfolioCard, PortfolioCardImage, Overlay} from '../styles/discover.style'

class Discover extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      portfolios: [
      
      ],
   
    };

  }

  componentDidMount() {
    axios.get('https://localhost:6500/photos')
    .then((res) => {
      console.log(res.data)
    })
  }

  handleSearchChange = (input) => {
    this.setState({ input });
  };

  handleLike = portfolio => {
    const portfolios = [...this.state.portfolios];
    const index = portfolios.indexOf(portfolio);
     portfolios[index] = {...portfolios[index] };
    portfolios[index].liked = !portfolios[index].liked;
    this.setState( { portfolios })
  }

  render() {
      const { portfolios } = this.state;

      let galleryDisplay = portfolios.map(portfolio => {
        return <PortfolioCard index={portfolio.id}>
        <Link to="">
            <PortfolioCardImage src={portfolio.cardImage} alt="portfolio image" />
         </Link>
        <Overlay>
          <img className="portfolio-card-pic" src={portfolio.portfolioPic} alt="profile-pic" />
          <div>
            <h2>{`${portfolio.firstName} ${portfolio.lastName}`}</h2>
            <div>{portfolio.tags.map(tag => {
                return <span>{tag}</span>
            })}</div>
          </div>
          <Like liked={portfolio.liked} toggleLike={() => this.handleLike(portfolio)}/>
        </Overlay>
      </PortfolioCard>
      });

    return (
      <>
        <div>
          <input
            value={this.state.input}
            placeholder="search"
            onChange={(e) => this.handleSearchChange(e.target.value)}
          />
        </div>
        <h1>portfolios</h1>
        <section>
          {/* <PortfolioCard>
            <Link to="/portfoliopage/name">
                <PortfolioCardImage src="https://images.unsplash.com/photo-1595550891383-152fbed0f9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWRpdG9yaWFsJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt="portfolio image" />
             </Link>
            <Overlay>
              <img className="portfolio-card-pic" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="profile-pic" />
              <div>
                <h2>{`${portfolios[0].firstName} ${portfolios[0].lastName}`}</h2>
                <div>tags</div>
              </div>
              <div>likes</div>
            </Overlay>
          </PortfolioCard> */}
          {galleryDisplay}
        </section>
      </>
    );
  }
}

export default Discover;
