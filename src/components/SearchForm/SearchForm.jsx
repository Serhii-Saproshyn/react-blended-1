import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state={
    query:'',
  }
  handleChange =(e)=>{
    const q = e.target.value.trim().toLowerCase();
    this.setState({query: q})
  }
  handleSubmit= (event)=>{
    event.preventDefault();
    if(this.state.query === ''){
      return alert("Empty");
    }
    this.props.onSubmit(this.state.query);
    this.setState({query:''})
  }
  render() {
    const {query} = this.state;
    return <>
    <SearchFormStyled onSubmit={this.handleSubmit}>
  <FormBtn type="submit">
    <FiSearch size="16px" />
  </FormBtn>
  <InputSearch
    placeholder="What do you want to write?"
    name="search"
    required
    autoFocus
    value={query}
    onChange={this.handleChange}
  />
</SearchFormStyled>
    </>;
  }
}
