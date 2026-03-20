import About from './components/sections/About/About';
import Hero from './components/sections/Hero/Hero';
import Nav from './components/sections/Nav/Nav';
import ProjectList from './components/sections/Projects/ProjectList';

function App() {
  return (
    <div className="app">
      <Nav />

      <main>
        <Hero />
        <ProjectList />
        <About />
      </main>
    </div>
  );
}

export default App;
