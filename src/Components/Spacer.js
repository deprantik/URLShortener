import styled from 'styled-components';

const Spacer = styled.div`
  height: ${props => props.height || '1'}rem;
  width: 100%;
`;

export default Spacer;