import "./App.css"
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}