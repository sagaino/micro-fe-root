import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import DetailPokemon from './components/DetailPokemon';

function App() {
  const About = () => {
    return (
      <div>about</div>
    )
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Route>
        <Route path='/pokemon/:id' element={<DetailPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
