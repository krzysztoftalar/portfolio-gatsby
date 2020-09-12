import styled from 'styled-components';
// Imports from src
import { primaryColor } from '../base/variables';
import { motion } from 'framer-motion';

export const Cursor = styled.div<{ elX: string; elY: string }>`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    transform: translate(-50%, -50%);
    transition: all 0.1s ease-in-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    border-radius: 100%;
    background: ${primaryColor};
    pointer-events: none;

    &::after {
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 100%;
        background: ${(props) => props.theme.background};
    }

    &.hovered,
    &.pointer,
    &.locked {
        width: 5.6rem;
        height: 5.6rem;
        background: transparent !important;

        &::after {
            background: none;
        }
    }

    &.hovered {
        border: 5px solid ${primaryColor};
    }

    &.pointer {
        border: 5px solid ${(props) => props.theme.text};
    }

    &.locked {
        border: 5px solid ${primaryColor};
        top: ${(props) => props.elY} !important;
        left: ${(props) => props.elX} !important;
        transition: all 0.1s ease-in-out;
        transition-property: left, top;
        will-change: left, top;

        &--txtColor {
            border: 5px solid ${(props) => props.theme.text};
        }
    }

    &.nav-open {
        background: ${(props) => props.theme.text};
    }
`;

export const Drag = styled(motion.div)`
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    background: ${primaryColor};
`;