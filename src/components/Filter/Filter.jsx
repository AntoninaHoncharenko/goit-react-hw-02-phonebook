import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { onChange, filter } = this.props;
    return (
      <>
        <label htmlFor="text">Find contacts by name</label>
        <input type="text" value={filter} id="text" onChange={onChange} />
      </>
    );
  }
}
