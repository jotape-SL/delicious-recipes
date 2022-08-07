import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SpliedeSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/sea-green';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  return (
    <Wrapper>
      <h3>Popular Recipes</h3>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
            </Card>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default Popular;

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;

  img {
    border-radius: 1.5rem;
  }
`;
