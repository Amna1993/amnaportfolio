import Layout from './components/Layout';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Link from 'next/link'; // Import Link from Next.js for internal navigation

const HomePage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-xl font-semibold">
              <Link href="/" className="text-white">Amna Razzaq</Link>
            </div>
            <div className="space-x-4">
              {/* Use Link component for internal navigation */}
              <Link href="#about" className="hover:text-gray-400">About</Link>
              <Link href="#portfolio" className="hover:text-gray-400">Portfolio</Link>
              <Link href="#contact" className="hover:text-gray-400">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Import and Render Sections */}
        <About />
        <Portfolio />
        <Contact />
      </div>
    </Layout>
  );
};

export default HomePage;
