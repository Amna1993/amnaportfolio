import Image from 'next/image';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web app built with React and Next.js.',
      image: '/images/project1.png',
      liveLink: 'https://1000.tools/',
      sourceCode: 'https://github.com/Amna1993/restaurant',
    },
    {
      title: 'Project 2',
      description: 'A full-stack application using ReactJS.',
      image: '/images/project5.png',
      liveLink: 'https://amnarestaurant.netlify.app/',
      sourceCode: 'https://github.com/Amna1993/restaurant',
    },
    {
      title: 'Project 3',
      description: 'Portfolio in Reactjs.',
      image: '/images/project2.png',
      liveLink: 'https://iqrabatool.netlify.app/',
      sourceCode: 'https://github.com/Amna1993/iqra',
    },
    {
      title: 'Project 4',
      description: 'Note Appp using Html, CSS, JS',
      image: '/images/project4.png',
      liveLink: 'https://amna1993.github.io/note10/',
      sourceCode: 'https://github.com/Amna1993/note10',
    },
    
  ];

  return (
    <section id="portfolio" className="p-10 bg-black text-white">
      <h2 className="text-5xl sm:text-6xl font-bold text-center mb-12">My Portfolio</h2>
      <p className="text-center mb-16 text-lg sm:text-xl max-w-3xl mx-auto">
        Here are some of the projects I have worked on. Click on the images to explore the live versions or visit the source code on GitHub.
      </p>

      <div className="relative mx-auto w-full max-w-screen-lg">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-16 relative`}
          >
            {/* Connecting Line */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-300 ${index !== 0 ? 'top-0' : 'top-6'}`}
            ></div>

            {/* Image Section */}
            <div className="w-1/2 px-4">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="w-1/2 px-4">
              <h3 className="text-3xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-lg mb-6">{project.description}</p>

              {/* Links */}
              <div className="flex gap-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 text-lg font-medium"
                >
                  View Live
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors duration-300 text-lg font-medium"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
