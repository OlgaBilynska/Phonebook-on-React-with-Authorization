import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  padding: 20px 50px;
  text-align: center;

  @media screen and (min-width: 750px) {
    padding: 20px 200px;
  }

  @media (min-width: 1200px) {
    padding: 20px 450px;
  }
`;
