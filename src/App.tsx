import React from 'react';
import styled from 'styled-components';
import SideList from './components/SideList';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import FeaturedList from './components/FeaturedList';
import { AppData } from './types';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;  
  position: relative;
`;

const ListsContainer = styled.div`
  position: relative;
  top: -160px;

  background: linear-gradient(0, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 91%, rgba(0,0,0,0) 100%);
`;



const appData : AppData = {
  mainAtraction: {
    imageUrl: "http://lorempixel.com/1920/1080/",
    name: "A Origem",
    description: "Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos."
  },
  featuredMovies: [
    {
      imageUrl: "http://lorempixel.com/420/800/",
      name: "Nome do Filme"
    },
    {
      imageUrl: "http://lorempixel.com/421/800/",
      name: "Nome do Filme"
    },
    {
      imageUrl: "http://lorempixel.com/422/800/",
      name: "Nome do Filme"
    },
    {
      imageUrl: "http://lorempixel.com/423/800/",
      name: "Nome do Filme"
    },
    {
      imageUrl: "http://lorempixel.com/424/800/",
      name: "Nome do Filme"
    }
  ],
  moviesList: [
    {
      name: "Minha lista",
      content: [
        {
          imageUrl: "http://lorempixel.com/500/500/",
          name: "Nome do Filme"
        },
        {
          imageUrl: "http://lorempixel.com/500/501/",
          name: "Nome do Filme"
        },
        {
          imageUrl: "http://lorempixel.com/500/502/",
          name: "Nome do Filme"
        },
      ]
    },
    {
      name: "Ação",
      content: [
        {
          imageUrl: "http://lorempixel.com/500/280",
          name: "Filme de"
        },
        {
          imageUrl: "http://lorempixel.com/500/281",
          name: "Filme de"
        },
        {
          imageUrl: "http://lorempixel.com/500/282",
          name: "Filme de"
        }, {
          imageUrl: "http://lorempixel.com/501/281",
          name: "Filme de"
        },
        {
          imageUrl: "http://lorempixel.com/502/282",
          name: "Filme de"
        },
        {
          imageUrl: "http://lorempixel.com/503/281",
          name: "Filme de"
        },
        {
          imageUrl: "http://lorempixel.com/504/282",
          name: "Filme de"
        }, {
          imageUrl: "http://lorempixel.com/505/281",
          name: "Filme de"
        },
        {
          imageUrl: "http://lorempixel.com/506/282",
          name: "Filme de"
        },
      ]
    },
    {
      name: "Drama",
      content: [
        {
          imageUrl: "http://lorempixel.com/499/281",
          name: "Filme de dram"
        },
        {
          imageUrl: "http://lorempixel.com/501/281",
          name: "Filme de dram"
        },
        {
          imageUrl: "http://lorempixel.com/502/281",
          name: "Filme de dram"
        },
        {
          imageUrl: "http://lorempixel.com/498/281",
          name: "Filme de dram"
        },
        {
          imageUrl: "http://lorempixel.com/500/279",
          name: "Filme de dram"
        },
        {
          imageUrl: "http://lorempixel.com/502/290",
          name: "Filme de dram"
        },
      ]
    }
  ]
}

function App() {
  return (
    <Container>
      <Navbar />
      <Featured movie={appData.mainAtraction}/>
      <ListsContainer>
        {
          appData.moviesList.filter((list, index) => {
            return index < 2;
          }).map(list => <SideList {...list} />)
        }
        <FeaturedList movies={appData.featuredMovies}/>
        {
          appData.moviesList.filter((list, index) => {
            return index >= 2;
          }).map(list => <SideList {...list} />)
        }
      </ListsContainer>
    </Container>
  );
}

export default App;