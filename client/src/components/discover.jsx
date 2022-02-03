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
      like: 0,
     
      
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
    // const portfolios = [...this.state.filteredPortfolios];
    // const index = portfolios.indexOf(portfolio);
    //  portfolios[index] = {...portfolios[index] };
    // // portfolios[index].liked = !portfolios[index].liked;
    // this.setState( { filteredPortfolios: portfolios})

    axios.put(`http://localhost:6500/photographers/${portfolio.id}/like`)
    .then(res => {
      console.log(res.data)
      let newCount = this.state.like + 1;
      this.setState({
      like: newCount
    })
    console.log(newCount);
    })

    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.like !== this.state.like) {
      console.log('new count added.')
       axios.get('http://localhost:6500/photos')
    .then(res => {
      console.log(res.data)
      this.setState({ portfolios: res.data, filteredPortfolios: res.data})
  
    })
    }
  }

  

  render() {
      const { filteredPortfolios } = this.state;

      let galleryDisplay = filteredPortfolios.map(portfolio => {
        return <PortfolioCard key={portfolio.photographer_id}>
        <Link to={`/discover/${portfolio.photographer_id}`}>
            <PortfolioCardImage src={portfolio.image_url} alt="portfolio image" />
         </Link>
        <Overlay>
          <img className="portfolio-card-pic" src={portfolio.avatar} alt="profile-pic" />
          <div>
            <h2>{`${portfolio.first_name} ${portfolio.last_name}`}</h2>
          </div>
        </Overlay>
          <span>{portfolio.likes}</span> <Like  liked={portfolio.liked} handleLike={() => this.handleLike(portfolio)}/>
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
