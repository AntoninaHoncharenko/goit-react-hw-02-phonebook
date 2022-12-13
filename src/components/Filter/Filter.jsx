import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <label htmlFor="text">Find contacts by name</label>
        <input type="text" name="text" id="text" onChange={onChange} />
      </>
    );
  }
}
