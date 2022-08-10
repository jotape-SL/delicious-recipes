import Category from './components/Category';
import Pages from './Pages';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Search from './components/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
