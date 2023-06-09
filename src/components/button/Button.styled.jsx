import styled from 'styled-components';

export const Btn = styled.button`
  margin-top: 80px;
  padding: 6px 14px;
  font-size: 15px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  cursor: pointer;
  font-family: inherit;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  background-color: #fff;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border: 1px solid black;
  text-decoration: none;
  text-transform: uppercase;
  color: black;

  @media (min-width: 768px) {
    padding: 8px 16px;
    font-size: 18px;
  }

  &:hover {
    border-color: red;
  }
`;
