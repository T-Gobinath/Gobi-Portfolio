import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, ExternalLink, Menu, X, Code, Database, Cloud, Briefcase, User, GraduationCap } from 'lucide-react';
import GobinathImage from './assets/Gobinath.png'; // Adjust the path if necessary

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Set browser tab title
    document.title = "Gobinath";

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
    backend: ['Java', 'Spring Boot', 'SQL', 'PostgreSQL'],
    tools: ['GitHub', 'Azure Deployment']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Gobinath<span className="text-purple-400">.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-white hover:text-purple-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-white hover:text-purple-400"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
                <img 
                  src={GobinathImage} 
                  alt="Gobinath" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Gobinath</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">Java Full Stack Developer</p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Building modern web applications with React, Spring Boot, and cloud technologies. 
            Passionate about creating scalable solutions and seamless user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-purple-400 text-purple-400 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Full Stack Java Developer</h3>
                <p className="text-gray-300 mb-6">
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating efficient, scalable applications that solve real-world problems.
                </p>
                <p className="text-gray-300 mb-6">
                  With a strong foundation in both frontend and backend development, I specialize in 
                  building complete web solutions using React, Spring Boot, and cloud deployment strategies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-purple-400">
                    <User size={16} />
                    <span>Problem Solver</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Code size={16} />
                    <span>Clean Code</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Briefcase size={16} />
                    <span>Team Player</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Frontend Focus</h4>
                  <p className="text-gray-400 text-sm">Creating responsive, interactive user interfaces with modern frameworks</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Backend Expertise</h4>
                  <p className="text-gray-400 text-sm">Building robust APIs and database solutions with Java ecosystem</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Cloud Ready</h4>
                  <p className="text-gray-400 text-sm">Deploying and managing applications on cloud platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
              </div>
              <div className="space-y-3">
                {skills.frontend.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Backend</h3>
              </div>
              <div className="space-y-3">
                {skills.backend.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Tools & Cloud</h3>
              </div>
              <div className="space-y-3">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Master of Computer Applications (MCA)</h3>
                  <p className="text-purple-400 mb-2">Nandha Engineering College</p>
                  <p className="text-gray-400">2021</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-blue-400 mb-2">Nandha Arts and Science College</p>
                  <p className="text-gray-400">2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Project</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Chatee Web Application</h3>
                <p className="text-gray-300 mb-6">
                  A full-stack chat application built with React frontend and Spring Boot backend, 
                  deployed on Azure with PostgreSQL database. Features real-time messaging and 
                  responsive design.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Spring Boot', 'PostgreSQL', 'Azure'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://ashy-beach-077b6170f.6.azurestaticapps.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  View Live Project
                </a>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h4 className="text-white font-semibold mb-4">Project Highlights</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Full-stack development with modern technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cloud deployment on Azure platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Responsive design for all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Production-ready application architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-300">I'm actively seeking full-time opportunities as a Java Full Stack Developer.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:gobinathemail@icloud.com"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300 group-hover:text-purple-400">gobinathemail@icloud.com</p>
                  </div>
                </a>

                <a
                  href="tel:+918015277175"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300 group-hover:text-purple-400">+91 8015277175</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/gobinath-t-10a355342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-gray-300 group-hover:text-purple-400">Connect with me</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Open to Full-Time Roles</h3>
              <p className="text-gray-300 mb-6">
                I am actively seeking full-time opportunities as a Java Full Stack Developer. 
                If you have a role that matches my skills and experience, I would love to connect!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-purple-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Open to full-time positions</span>
                </div>
                <div className="flex items-center gap-3 text-purple-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Ready to join dynamic teams</span>
                </div>
                <div className="flex items-center gap-3 text-purple-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Available to relocate or work remotely</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Gobinath T. Built with React and passion for great code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;