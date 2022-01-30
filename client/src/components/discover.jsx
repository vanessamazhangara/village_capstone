import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Like from "./common/like";
import { PortfolioCard, PortfolioCardImage, Overlay, Section, H1, Input} from '../styles/discover.style'

class Discover extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      filteredPortfolios: [],
      portfolios: [],
      
    };
   
  }

  async componentDidMount() {
    await axios.get('http://localhost:6500/photos')
    .then(res => {
      console.log(res.data)
      this.setState({ portfolios: res.data, filteredPortfolios: res.data})
  
      
    })
    
  }

  searchPortfolio = () => {
    const updated = this.state.portfolios.filter( image => {
      return this.state.input.toLowerCase() === image.city.toLowerCase()
    })
    this.setState({ filteredPortfolios: updated})
  }

  handleSearchChange = (input) => {
    // this.setState({ input });
    const updated = this.state.portfolios.filter( image => {
      return image.city.toLowerCase().includes(input.toLowerCase())
    })
    this.setState({ filteredPortfolios: updated})

  };

  handleLike = portfolio => {
    const portfolios = [...this.state.portfolios];
    const index = portfolios.indexOf(portfolio);
     portfolios[index] = {...portfolios[index] };
    portfolios[index].liked = !portfolios[index].liked;
    this.setState( { portfolios })
  }

  render() {
      const { filteredPortfolios } = this.state;

      let galleryDisplay = filteredPortfolios.map(portfolio => {
        return <PortfolioCard index={portfolio.photographer_id}>
        <Link to={`/discover/${portfolio.photographer_id}`}>
            <PortfolioCardImage src={portfolio.image_url} alt="portfolio image" />
         </Link>
        <Overlay>
          <img className="portfolio-card-pic" src={portfolio.avatar} alt="profile-pic" />
          <div>
            <h2>{`${portfolio.first_name} ${portfolio.last_name}`}</h2>
            {/* <div>{portfolio.tags.map(tag => {
                return <span>{tag}</span>
            })}</div> */}
          </div>
        </Overlay>
          <span>{portfolio.likes}</span> <Like liked={portfolio.liked} toggleLike={() => this.handleLike(portfolio)}/>
      </PortfolioCard>
      });

    return (
      <>
        <div>
          <Input
            // value={this.state.input}
            placeholder="search"
            onChange={(e) => this.handleSearchChange(e.target.value)}
          />
        </div>
        <H1>Portfolios</H1>
        <Section>
          {galleryDisplay}
        </Section>
      </>
    );
  }
}

export default Discover;
