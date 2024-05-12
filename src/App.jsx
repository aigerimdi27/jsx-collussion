import "./App.css";
import { Category } from "./components/Category";
import { Fashion } from "./components/Fashion";
import { Header } from './components/Header';
import { Hero } from './components/Hero';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Category />
      <Fashion />
    </div>
  );
}
