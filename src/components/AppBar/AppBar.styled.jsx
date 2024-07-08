import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 16px;
`;
