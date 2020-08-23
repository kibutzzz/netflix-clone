import React from 'react';
import Movie from '../Movie';
import styled from 'styled-components';
import { MovieList } from '../../types';

const SideScroller = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;

    align-items: center;
    
    width: 100%;
    
    &::-webkit-scrollbar {
        height: 0.4em;      
        width: 2em;  
    }

    &::-webkit-scrollbar-thumb {
        background-color: #555;
        outline: 1px solid black;
        border-radius: 100px;
    }

    &::-webkit-scrollbar-track {
       
    }
`;

const Container = styled.div`
    width: 100%;
    padding: 24px 72px;

    display: flex;
    flex-direction: column;

    color: white;
`;


interface Props extends MovieList {}

function SideList(props: Props) {
    return (
        <Container>
            <h2>{props.name}</h2>
            <SideScroller>
                {
                    props.content.map(movie => <Movie movie={movie} isFeatured={false} />)
                }
            </SideScroller>
        </Container>
    )
}

export default SideList;