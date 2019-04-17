import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 20px;
`;

export default class UseRefEx extends React.Component {
  constructor(...args) {
    super(...args);
    this.inputRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.inputRef.current.focus();
    this.inputRef.current.select();
  };
  render() {
    return (
      <Section>
        <input autoFocus ref={this.inputRef} />
        <button onClick={this.handleClick}>Focus</button>
      </Section>
    );
  }
}
