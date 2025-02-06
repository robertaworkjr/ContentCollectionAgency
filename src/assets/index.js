// Import all images
import faceMix from './images/FaceMix.png';
import lightning from './images/Leonardo_Lightning_XL_In_a_stunning_contrast_of_light_and_shad_1.jpg';
import dockScene from './images/Leonardo_Phoenix_A_14yearold_Black_man_stands_near_the_Docks_w_2.jpg';
import logoEye1 from './images/Leonardo_Phoenix_An_elegant_minimalist_logo_featuring_a_eye_sy_0.jpg';
import logoEye2 from './images/Leonardo_Phoenix_An_elegant_minimalist_logo_featuring_a_eye_sy_2.jpg';
import logoIcon1 from './images/Leonardo_Phoenix_An_elegant_minimalist_logo_featuring_a_icon_h_0.jpg';
import logoIcon2 from './images/Leonardo_Phoenix_An_elegant_minimalist_logo_featuring_a_icon_h_2.jpg';
import empathyMap1 from './images/Leonardo_Phoenix_An_empathetic_empathy_mapping_design_techniqu_1 (2).jpg';
import empathyMap2 from './images/Leonardo_Phoenix_An_empathetic_empathy_mapping_design_techniqu_2 (2).jpg';
import empathyMap3 from './images/Leonardo_Phoenix_An_empathetic_empathy_mapping_design_techniqu_3 (1).jpg';
import galleryShot from './images/galleryshot.png';
import glassAphrodite from './images/glass-sculpture-of-aphrodite-2.png';

// Import videos
import instaFilterVideo from './videos/InstaFilter1.mp4';
import nikeVideo from './videos/NIkeVideo1.mp4';
import propertyVideo from './videos/PropertyVideo1.mp4';
import staticVideo from './videos/StaticVideo3D.mp4';

// Categorized images with default fallbacks
const defaultImage = glassAphrodite; // Use a reliable image as default

export const images = {
  // Logos and branding
  logos: [logoEye1, logoEye2, logoIcon1, logoIcon2],
  
  // Artistic shots
  artistic: [lightning, glassAphrodite, galleryShot],
  
  // People and scenes
  scenes: [dockScene, faceMix],
  
  // Design process
  process: [empathyMap1, empathyMap2, empathyMap3],
  
  // All images in a single array
  all: [
    faceMix,
    lightning,
    dockScene,
    logoEye1,
    logoEye2,
    logoIcon1,
    logoIcon2,
    empathyMap1,
    empathyMap2,
    empathyMap3,
    galleryShot,
    glassAphrodite,
  ],
};

// Helper function to safely get images
export const getRandomImages = (count = 1, category = 'all') => {
  try {
    const imageArray = images[category] || images.all;
    if (!imageArray || !Array.isArray(imageArray) || imageArray.length === 0) {
      console.warn('No images found for category:', category);
      return [defaultImage];
    }

    // Ensure count doesn't exceed available images
    const safeCount = Math.min(count, imageArray.length);
    
    // Shuffle array and get first n items
    const shuffled = [...imageArray]
      .sort(() => Math.random() - 0.5)
      .slice(0, safeCount);
    
    return shuffled;
  } catch (error) {
    console.error('Error getting random images:', error);
    return [defaultImage];
  }
};

// Export video content
export const videos = {
  instaFilter: instaFilterVideo,
  nike: nikeVideo,
  property: propertyVideo,
  static3D: staticVideo,
};

// Portfolio data with videos
export const portfolioItems = [
  {
    id: 1,
    title: "Instagram Filter Design",
    description: "Custom AR filter development for social media engagement",
    video: videos.instaFilter,
    category: "Social Media",
  },
  {
    id: 2,
    title: "Nike Product Campaign",
    description: "Dynamic product showcase with motion graphics",
    video: videos.nike,
    category: "Product",
  },
  {
    id: 3,
    title: "Real Estate Visualization",
    description: "Architectural visualization for luxury properties",
    video: videos.property,
    category: "Real Estate",
  },
  {
    id: 4,
    title: "3D Motion Graphics",
    description: "Abstract 3D animation for brand identity",
    video: videos.static3D,
    category: "Branding",
  },
];
