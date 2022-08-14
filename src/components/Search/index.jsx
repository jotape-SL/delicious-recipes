import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
  const formSearch = document.getElementById('search');

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };

  return (
    <FromStyle onSubmit={submitHandler}>
      <label htmlFor='search' className='sr-only'>
        Search for certain recipes
      </label>
      <FaSearch onClick={() => formSearch.focus()} />
      <input
        type='text'
        id='search'
        name='search'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </FromStyle>
  );
}

const FromStyle = styled.form`
  position: relative;
  text-align: center;
  cursor: text;
  input {
    width: 70%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    padding: 0.8rem 3rem;
    border-radius: 1rem;
    color: white;
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translate(100%, -50%);
    color: white;
  }
  @media (max-width: 800px) {
    input {
      width: 100%;
    }
  }
`;

export default Search;
