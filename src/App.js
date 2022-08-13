import Category from './components/Category';
import Pages from './Pages';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Search from './components/Search';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <GlobalStyle />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
