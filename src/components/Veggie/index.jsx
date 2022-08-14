import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
import { Wrapper, Card, Gradient } from '../GlobalStyle';

function Veggie() {
  const wid = window.innerWidth;
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Veggie Recipes</h3>
        <Splide
          options={
            wid < 800
              ? {
                  perPage: 1,
                  pagination: false,
                  drag: 'free',
                  gap: '3rem',
                  arrows: false,
                }
              : {
                  perPage: 4,
                  pagination: false,
                  drag: 'free',
                  gap: '2rem',
                }
          }
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Veggie;
