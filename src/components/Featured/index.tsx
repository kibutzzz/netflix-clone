import React from 'react';
import styled from 'styled-components';
import { Movie } from '../../types';

const Container = styled.div` 
    position: relative;
    
    img {
        object-fit: cover;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        
        ::after {
            
        }
    }
`;

const FloatingInfo = styled.div` 
    position: absolute;
    top: 20%;

    margin: 0 72px;
    padding: 100px 0;

    color: white;
    text-shadow: 0 0 5px  black;
    line-height: 1.5rem;
  
    h1 {
        font-size: 6rem;
        margin: 0.7em 0;
    }

    span {
        display: block;
        font-size: 1.25rem;
        max-width: 800px;
    }
`;

interface Props {
    movie: Movie
}

function Featured(props: Props) {
    return (
        <Container>
            <img src={props.movie.imageUrl} alt={props.movie.name} />
            <FloatingInfo>
                <h1>{props.movie.name}</h1>
                <span>{props.movie.description}</span>
            </FloatingInfo>
        </Container>
    );
}

export default Featured;