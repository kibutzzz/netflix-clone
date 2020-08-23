import React from 'react';
import styled from 'styled-components';
import { Movie as MovieType } from '../../types';

interface ContainerProps {
    width?: number;
    height?: number;
    isFeatured: boolean
}

function getImagePixelSize(defaultSize: number, size?: number, factor = 1): string {
    if (size && factor) {
        size /= factor;
    }
    return size ? size + "px" : defaultSize + "px";
}

const Container = styled.div<ContainerProps>`
    display: block;

    flex-shrink: 0;

    width: 280px;
    height: 158px;
    width: ${ props => getImagePixelSize(250, props.width, props.isFeatured ? 1.2 : 1.75)};
    height: ${ props => getImagePixelSize(250, props.height, props.isFeatured ? 1.2 : 1.75)};

    margin: 0 1px;
    
    background-color: black;
    color: white;
    position: relative;

    &:hover 
    {
        width: ${ props => getImagePixelSize(500, props.width)};
        height: ${ props => getImagePixelSize(281, props.height)};
    
        > div {
            opacity: 1;
            visibility: visible;
        }
    }

    & {
        transition: width 1s, height 1s, opacity 2s;        
        transition-delay: 0.7s;
        > div {
            opacity: 0.0;
            visibility: hidden;
        }
    }

    img {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }
`;

const Info = styled.div`   
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 8px;
    
    text-shadow: 2px 3px 3px #000;
`;


interface Props extends ContainerProps {
    movie: MovieType
}

function Movie(props: Props) {
    return <Container isFeatured={props.isFeatured} width={props.width} height={props.height}>
        <img src={props.movie.imageUrl} alt={props.movie.name} />
        <Info>
            <h4>{props.movie.name}</h4>
            <span>T1:E1 episodio 1</span>
        </Info>
    </Container>
}

Movie.defaultProps = {
    height: 281,
    width: 500,
    isFeatured: false
};

export default Movie;