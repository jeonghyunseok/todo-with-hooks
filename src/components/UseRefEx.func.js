import React, { useRef } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 20px;
`;

export default function UseRefEx() {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.select();
  };
  return (
    <Section>
      <input autoFocus ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </Section>
  );
}
