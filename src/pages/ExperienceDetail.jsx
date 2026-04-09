import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);

  // Full data for each experience with random placeholder images
  const experiencesData = {
    "voidstone-studio": {
      id: "voidstone-studio",
      title: "Founder & Creative Director",
      company: "Voidstone Studio (INORPI-registered)",
      period: "2024 – Present",
      location: "Tunis, Tunisia",
      description: "Independent fashion brand specializing in avant-garde, alternative, and gothic aesthetics. Full creative direction from concept to production. Currently developing an e-commerce platform using microservice architecture.",
      fullDescription: "As the founder of Voidstone Studio, I built a brand from the ground up that merges dark aesthetics with wearable art. This journey involved everything from initial concept development to final production and now expanding into e-commerce.",
      responsibilities: [
        "Creative direction for all collections and brand identity",
        "Design and development of avant-garde fashion pieces",
        "E-commerce platform development using microservice architecture",
        "Brand strategy and market positioning",
        "Supplier and manufacturer relationship management"
      ],
      achievements: [
        "Successfully launched 5 collections (2024-2025)",
        "Built brand presence across social media (10k+ followers)",
        "Developed custom e-commerce platform from scratch",
        "Featured in local fashion publications"
      ],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800"
      ],
      video: null,
      skills: ["Creative Direction", "Brand Strategy", "Full Stack Dev", "Collection Development"],
      hasVideo: false
    },
    "ofla-turki": {
      id: "ofla-turki",
      title: "Creative Designer",
      company: "Ofla Turki",
      period: "Jan 2024 – Jun 2024",
      location: "Tunis, Tunisia",
      description: "Led end-to-end development of multiple top-selling collections. Oversaw design process from concept to final production.",
      fullDescription: "At Ofla Turki, I led the design team through multiple seasonal collections, from initial concept to final production. I managed supplier relationships and ensured quality control throughout the production process.",
      responsibilities: [
        "Led design team for seasonal collections",
        "Managed supplier relationships and production timelines",
        "Created technical specifications and production sheets",
        "Quality control and final product approval"
      ],
      achievements: [
        "Increased collection sales by 40%",
        "Reduced production costs by 25%",
        "Successfully launched 3 best-selling collections"
      ],
      images: [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800"
      ],
      skills: ["Team Leadership", "Production Management", "Technical Design", "Quality Control"],
      hasVideo: false
    },
    "la-flamme": {
      id: "la-flamme",
      title: "Illustrator & Concept Designer",
      company: "La Flamme",
      period: "Aug 2024 – Feb 2025",
      location: "Remote",
      description: "Created concept illustrations and developed visual identity for brand collections.",
      fullDescription: "Worked remotely with La Flamme to develop their brand identity through illustrations and concept designs that captured their unique aesthetic.",
      responsibilities: [
        "Created original concept illustrations for collections",
        "Developed brand visual identity guidelines",
        "Designed marketing materials and lookbooks",
        "Collaborated with marketing team on brand storytelling"
      ],
      achievements: [
        "Created illustrations for 4 successful campaigns",
        "Brand recognition increased by 60%",
        "Featured in industry publications"
      ],
      images: [
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800",
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800"
      ],
      skills: ["Illustration", "Brand Identity", "Adobe Creative Suite", "Concept Development"],
      hasVideo: false
    },
    "freelance-costume": {
      id: "freelance-costumes",
      title: "Freelance Costume Designer",
      company: "Various Projects",
      period: "2025 – Present",
      location: "Tunis, Tunisia",
      description: "Custom costume design for theatrical productions, drag performances, and private commissions.",
      fullDescription: "As a freelance costume designer, I've worked with diverse clients on unique projects ranging from theatrical productions to drag performances.",
      responsibilities: [
        "Custom costume design for diverse clients",
        "Theatrical and performance wear creation",
        "Fabric sourcing and material selection",
        "Fittings and alterations"
      ],
      achievements: [
        "First Prize winner - National Drag Competition",
        "Designed costumes for 15+ performances",
        "Featured in local theater productions"
      ],
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800"
      ],
      skills: ["Costume Design", "Pattern Making", "Fabric Sourcing", "Performance Wear"],
      hasVideo: false
    }
  };

  useEffect(() => {
    const foundExp = experiencesData[id];
    if (foundExp) {
      setExperience(foundExp);
      setLoading(false);
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white/60 animate-pulse text-2xl">LOADING...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 md:px-8">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 p-4 md:p-6 bg-black/90 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1 md:gap-2 text-white/80 hover:text-white transition-colors group text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            BACK TO HOME
          </Link>
          
          <h1 className="text-white text-sm md:text-base tracking-wider truncate max-w-[200px]">
            {experience.title}
          </h1>
          
          <Link to="/" className="text-white/60 hover:text-white text-xs md:text-sm tracking-wider transition-colors">
            HOME
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            {experience.title}
          </h1>
          <p className="text-white/80 text-lg mb-2">{experience.company}</p>
          <div className="flex justify-center gap-4 text-white/40 text-sm">
            <span>{experience.period}</span>
            <span>•</span>
            <span>{experience.location}</span>
          </div>
        </motion.div>

        {/* Images Grid */}
        {experience.images && experience.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experience.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${experience.title} ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                  onClick={() => window.open(img, '_blank')}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Video Section */}
        {experience.hasVideo && experience.video && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <video
              src={experience.video}
              controls
              className="w-full rounded-lg"
              poster={experience.images?.[0]}
            />
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-white mb-4 border-b border-white/20 pb-2">
            Overview
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {experience.fullDescription || experience.description}
          </p>
        </motion.div>

        {/* Responsibilities & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-lg p-6"
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Key Responsibilities
            </h2>
            <ul className="space-y-2">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                  <span className="text-white/40 mt-1">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-lg p-6"
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Key Achievements
            </h2>
            <ul className="space-y-2">
              {experience.achievements.map((ach, idx) => (
                <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {experience.skills.map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-white/10 border border-white/20 text-white/80 text-sm rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceDetail;