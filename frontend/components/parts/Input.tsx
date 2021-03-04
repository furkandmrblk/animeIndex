import styled from 'styled-components';
import * as typeface from '../../theme/GlobalFont';
import * as color from '../../theme/GlobalColor';

// Input Fields
export const Input = styled.input`
  height: 3.0625rem;
  width: 25.3125rem;

  font-size: ${typeface.$smfont};
  padding-left: 1rem;

  background-color: ${color.$white};
  border-radius: 5px;
  border: none;

  &:focus,
  input:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: ${color.$gray};
    font-size: ${typeface.$smfont};
  }
  &:-ms-input-placeholder {
    color: ${color.$gray};
    font-size: ${typeface.$smfont};
  }
  &:-moz-placeholder {
    color: ${color.$gray};
    font-size: ${typeface.$smfont};
  }
  &::-moz-placeholder {
    color: #c3c2c2;
    font-size: ${typeface.$smfont};
  }

  margin-bottom: 2.2rem;
`;
