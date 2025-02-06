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

// Categorized images
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

// Utility functions
export const getRandomImage = (category = 'all') => {
  const imageArray = images[category] || images.all;
  return imageArray[Math.floor(Math.random() * imageArray.length)];
};

export const getRandomImages = (count = 1, category = 'all') => {
  const imageArray = [...(images[category] || images.all)];
  const result = [];
  const totalAvailable = Math.min(count, imageArray.length);
  
  for (let i = 0; i < totalAvailable; i++) {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    result.push(imageArray.splice(randomIndex, 1)[0]);
  }
  
  return result;
};

// Portfolio data with videos
export const portfolioItems = [
  {
    id: 1,
    title: 'Instagram Filter Campaign',
    description: 'Creative social media filters that engage and delight users.',
    image: getRandomImage('social'),
    video: instaFilterVideo,
    category: 'Social Media',
  },
  {
    id: 2,
    title: 'Nike Product Showcase',
    description: 'Dynamic product visualization for the latest sportswear collection.',
    image: getRandomImage('product'),
    video: nikeVideo,
    category: 'Product',
  },
  {
    id: 3,
    title: 'Luxury Property Tour',
    description: 'Virtual walkthrough of high-end real estate properties.',
    image: getRandomImage('real-estate'),
    video: propertyVideo,
    category: 'Real Estate',
  },
  {
    id: 4,
    title: '3D Animation Reel',
    description: 'Showcase of our latest 3D animation and motion graphics work.',
    image: getRandomImage('animation'),
    video: staticVideo,
    category: 'Animation',
  },
];

// Videos (placeholder for future use)
export const videos = {
  // Add video imports here when needed
};
