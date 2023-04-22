import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state ={
    query:'',
    page:1,
    images:[],
    onLoad: false,
  }
  async getImage(){
    const {query, page} = this.state;
    const images = await ImageService.getImages(query,page)
    return images.data.photos;
  }
   async componentDidUpdate(_, prevState){
    // if(this.state.query && this.state.query !== prevState.query){
    //   this.setState({page: 1, })
    // }

    // if(prevState.query !== this.state.query && this.state.page === 1){
    //   const result = await this.getImage(this.state.query, 1);
    //   this.setState((prevState) => ({
    //     images: [...prevState.images, ...this.normalaziedImage(result)],
    //   }))
    // }

    if(prevState.query !== this.state.query || prevState.page !== this.state.page){
      const result = await this.getImage();
      this.setState((prevState) => ({
        images: [...prevState.images, ...this.normalaziedImage(result)],
      }))
    }
  }
  normalaziedImage(array){
    return array.map(({id,alt,src,avg_color}) => ({id,alt,src,avg_color}) )
  }
  onSubmit = (query) =>{
    this.setState({query, page:1, images:[]})
  }
  handleLoadMore=()=>{
    this.setState(prevState=> ({
      page: prevState.page + 1
    }))
  }
  render() {
    return (
      <>
      <SearchForm onSubmit={this.onSubmit}/>
      {this.state.images && <Grid> {this.state.images.map(({id,alt,src,avg_color}) => (<GridItem key={id}>
    <CardItem color={avg_color}>
      <img src={src.landscape} alt={alt} />
    </CardItem>
</GridItem>))}
<Button  onClick={this.handleLoadMore}>Load More</Button>
</Grid>
}
      {this.state.images.length === 0 && <Text textAlign="center">Sorry. There are no images ... 😭</Text>}
      </>
    );
  }
}
