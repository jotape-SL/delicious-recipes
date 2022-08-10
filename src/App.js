import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
