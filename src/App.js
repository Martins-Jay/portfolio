import About from './components/sections/About/About';
import Hero from './components/sections/Hero/Hero';
import Nav from './components/sections/Nav/Nav';
import ProjectList from './components/sections/Projects/ProjectList';
import TechStack from './components/sections/CoreCapabilities/CoreCapabilities';
import MyProcess from './components/sections/MyProcess/MyProcess';

function App() {
  return (
    <div className="app">
      <Nav />

      <main>
        <Hero />
        <TechStack />
        <ProjectList />
        <About />
        <MyProcess />
      </main>
    </div>
  );
}

export default App;
