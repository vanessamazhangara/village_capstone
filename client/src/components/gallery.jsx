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
          
               <div class="col-md-4">
                 <img src="https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
               </div>
               <div class="col-md-4">
                 <img src="https://images.pexels.com/photos/861034/pexels-photo-861034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
               </div>
               {/* <div class="col-md-4">
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
               </div> */}
             
      </Grid>
    );
  }
}

export default Gallery;
