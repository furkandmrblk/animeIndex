import styled from 'styled-components';
import * as typeface from '../../theme/GlobalFont';
import * as color from '../../theme/GlobalColor';

export const ErrorField = styled.h1`
  font-size: ${typeface.$paragraph};
  font-weight: ${typeface.$light};
  color: ${color.$white};
  text-align: left;

  margin-top: -1.7rem;
`;
