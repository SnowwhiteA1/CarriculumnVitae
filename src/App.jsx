import Header from './components/Header.jsx';
import Summary from './components/Summary.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import Personal from './components/Personal.jsx';

export default function App() {
  return (
    <div className="w-full min-h-screen p-6 bg-white text-gray-800">
      <Header />
      <Personal />
      <Summary />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}
