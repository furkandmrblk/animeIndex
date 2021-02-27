import styled from 'styled-components';
import * as typeface from '../../theme/GlobalFont';
import * as color from '../../theme/GlobalColor';

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.3rem;
  width: 11rem;

  background-color: ${color.$red};

  color: ${color.$white};
  font-size: ${typeface.$smfont};
  text-align: center;

  border: none;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;

  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${color.$darkred};
  }

  &:active {
    transform: scale(1.02);
  }

  user-select: none;
`;
