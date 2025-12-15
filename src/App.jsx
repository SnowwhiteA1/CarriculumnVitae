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

   <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 bg-white text-gray-800">
        <Header />
        <Personal />
        <Summary />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </div>
    </div>
  );
}
