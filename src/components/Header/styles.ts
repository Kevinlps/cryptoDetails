import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(to right, #8c14fc, #a537fd);
  padding: 30px 20px;
  display: flex;
  align-items: center;

  @media (max-width:600px) {
    flex-direction: column;
  }
`

export const AppTitle = styled.h1`
  color: #fff;
  font-family: 'bold';
  margin: 0;
  text-shadow: 2px 2px #333;

  @media (max-width: 600px){
    text-align: center;

  }
`
export const VsCurrencyLabel = styled.span`
  margin: 0 10px 0 auto;
  color: #fff;
  font-family: 'bold';

  @media (max-width:600px ) {
    margin: 10px 0;
  }
`

export const SelectVsCurrency = styled.select`
  height: 39px;
  border: 2px solid #d5b8ff;
  background-color: #fff;
  border-radius: 10px;
  padding: 0 10px;
  font-family: 'bold';
  color: #8c14fc;
`

export const VsCurrencyOption = styled.option`
  font-size: 100%;
  color: #8c14fc;

  @media (max-width: 600px){
    text-align-last: center;

  }
`