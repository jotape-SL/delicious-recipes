import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react';

function Recipe() {
  let params = useParams();
  const [details, setDetail] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetail(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <h2>{details.title}</h2>
      <DivStatic>
        <div className='summary'>
          <h1>Summary</h1>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
        </div>
        <div className='name'></div>
      </DivStatic>
      <Info>
        <div className='button-container'>
          <Button
            className={activeTab === 'instructions' && 'active'}
            onClick={() => setActiveTab('instructions')}
          >
            Intructions
          </Button>
          <Button
            className={activeTab === 'ingredients' && 'active'}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </Button>
        </div>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.section`
  margin: 5rem 0;
  .active {
    background: linear-gradient(35deg, #555555, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 6rem;
    text-align: center;
    font-size: 3.5rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    font-weight: bold;
  }
  ul {
    margin-top: 2rem;
  }
  @media (max-width: 800px) {
    margin: 0;
    h2 {
      font-size: 2rem;
      margin: 4rem 0 3rem 0;
    }
  }
`;
const DivStatic = styled.div`
  display: flex;
  flex-direction: row;
  .name {
    img {
      width: 25vw;
      border-radius: 0.5rem;
    }
    .summary {
      margin-right: 5rem;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
  .button-container {
    text-align: center;
  }
  @media (max-width: 800px) {
    margin: 0 0.7rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  border: 2px solid black;
  border-radius: 0.3rem;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
  .active {
    color: invert;
    background: invert;
  }
  @media (max-width: 800px) {
    font-size: 1.2rem;
    padding: 1rem;
    margin-right: 1rem;
    &:hover {
      scale: unset;
    }
  }
`;

export default Recipe;
