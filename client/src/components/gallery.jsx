import React, { Component } from "react";
import { Grid } from "../styles/gallery.style";

class Gallery extends Component {
  state = {};
  render() {
      const gallery = this.props.gallery;
      
    return (
      <Grid>
          {gallery.map(image => {
             return (
             <div key={image.id}>
                <img src={image.image_url}/>
            </div>
             )
          })}
      </Grid>
    );
  }
}

export default Gallery;
