import styled from 'styled-components';
import { motion } from 'framer-motion';
// Imports from src
import { primaryColor } from '../base/variables';

// Container
export const Nav = styled(motion.div)`
    display: grid;
    position: fixed;
    grid-template-columns:
        [side-left-start] minmax(6rem, 1fr) [side-left-end center-start]
        repeat(8, [col-start] minmax(min-content, 14.62rem) [col-end])
        [center-end side-right-start] minmax(6rem, 1fr) [side-right-end];
    grid-template-rows: min-content 1fr min-content;
    grid-row-gap: 5rem;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: ${primaryColor};
`;

// Header
export const NavHeader = styled.div`
    position: relative;
    grid-column: center-start / center-end;
    margin-top: 7rem;
    height: 0;

    h2 {
        color: ${(props) => props.theme.background};
        font-size: 2.5rem;
        font-weight: 700;
    }
`;

export const CloseNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -3rem;

    button {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        order: 1;
        width: 9rem;
        height: 8rem;
        padding: 2rem;
        border: none;
        background: none;
        outline: none;

        &:hover + span {
            opacity: 1;
        }

        &::before,
        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 3.5rem;
            height: 0.6rem;
            background: ${(props) => props.theme.background};
        }

        &::before {
            transform: rotate(45deg);
        }

        &::after {
            transform: rotate(-45deg);
        }
    }

    span {
        transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        color: ${(props) => props.theme.background};
        font-size: 2.5rem;
        font-weight: 700;
    }
`;

// Projects list
export const NavList = styled.div`
    grid-column: center-start / center-end;

    ul {
        padding: 0;

        li {
            width: fit-content;
            height: 9rem;
            overflow: hidden;
            list-style: none;
            font-size: 3rem;
            font-weight: 900;
            line-height: 9rem;
            text-transform: uppercase;

            .link {
                position: relative;
                display: flex;
                align-items: center;
                height: 100%;
                width: calc(100% + 7.8rem);
                color: ${(props) => props.theme.background};

                .arrow {
                    display: flex;
                    align-items: center;
                    margin-right: 0.8rem;
                }
            }

            svg {
                width: 7rem;
                height: 7rem;
                fill: ${(props) => props.theme.background};
            }

            h2 {
                display: block;
                font-size: 5rem;
                font-weight: 800;
                text-transform: uppercase;
            }
        }
    }
`;

// Projects images
export const NavImages = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    grid-column: col-start 3 / -1;

    .reveal {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        background: ${primaryColor};
    }

    .img {
        position: absolute;
        display: flex;
        align-items: center;
        z-index: -1;
        height: 100%;
        width: 100%;

        .img-fluid {
            display: inline-block;
            width: 100%;
        }
    }
`;

