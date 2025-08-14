import React from 'react';

//helper data links form api or cms ...
const navLinks = ['LINK 1', 'LINK 2', 'LINK 3' , 'LINK 4'];


const teamMembers = [
  { name: 'Tenzin', role: 'Lead Developer' },
  { name: 'Kalsang', role: 'UX/UI Designer' },
  { name: 'Rabuchi', role: 'Project Manager' },
];


//svg icons
const CodeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);


const ArrowRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);


const UsersIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);



//main app comp
export default function App() {
  return (
    <div className="bg-slate-900 text-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection
          title="HEADING TEXT 2 HERE"
          description="Our this and that thne here but there when im here you there we go there good there bad here good weather its raining and sun shining somewhere in india"
          imageUrl="https://placehold.co/600x400/1a202c/4a5568?text=Hero+Image"
          imageOnLeft={true}
        />
        <FeatureSection
          title="HEADING TEXT 3 OVER HERE"
          description="we do this some of this and some of that and this and that too and you doin this? we help you in thsi and that and those too. cat is not good i like dog more and it has to do with their attitude and loyal is more expected form dog and not cat and yea"
          imageUrl="https://placehold.co/600x400/1a202c/4a5568?text=Hero+Imagen"
          imageOnLeft={false}
        />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}


// header comps
const Header = () => {
  return (
    <header className="border-b border-slate-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CodeIcon className="h-8 w-8 text-cyan-400" />
          <span className="text-2xl font-bold text-white">Website Logo and title Title</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
              {link}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-slate-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};


//hero section 
const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Innovative Solutions with Tenzin Kalsang
          </h1>
          <p className="text-lg text-slate-400 mb-8">
           This is the hero section first seciton number 1 section good section the first appearing section in user eye section and some optimizeddddddd paragraph section and somehting and somehtin over here
          </p>
          <a href="#" className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg">
            Get Started <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="order-1 md:order-2">
           <img 
            src="https://placehold.co/600x400/1e293b/475569?text=Hero+Image" 
            alt="Abstract representation of web development" 
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};


//reusable feature section
const FeatureSection = ({ title, description, imageUrl, imageOnLeft }) => {
  const imageClass = imageOnLeft ? 'md:order-1' : 'md:order-2';
  const textClass = imageOnLeft ? 'md:order-2' : 'md:order-1';


  return (
    <section className="bg-slate-800/50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={textClass}>
            <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
            <p className="text-slate-400 leading-relaxed">{description}</p>
          </div>
          <div className={imageClass}>
            <img 
              src={imageUrl}
              alt={title}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


//team member ? section
const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">CONTRIBUTER (or team or smtn else)</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Brilliant Mind behind this project, 9-5 underpaid worker with career at brink getting fired coz of AI here 
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-slate-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto mb-4 flex items-center justify-center">
                <UsersIcon className="h-12 w-12 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-cyan-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


//call to action cta
const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-purple-600 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">How can we help you ?</h2>
        <p className="text-slate-200 max-w-2xl mx-auto mb-8">
          Contact us today and let's discuss coz we are closed tommorow.
        </p>
        <button className="bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-200 transition-colors duration-300 shadow-xl transform hover:scale-105">
          Contact Us
        </button>
      </div>
    </section>
  );
};


//footer
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-6">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()}  All Rights Reserved</p>
      </div>
    </footer>
  );
};
