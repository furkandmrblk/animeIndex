import styled, { keyframes } from 'styled-components';

export const CardAnimation = keyframes`
    0%, 100% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(0, 10px);
    }
`;
