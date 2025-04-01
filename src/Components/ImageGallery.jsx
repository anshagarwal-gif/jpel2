// import React, { useState } from 'react';
// import GalleryItem from './GalleryItem';
// import './ImageGallery.css';
// import { X } from 'lucide-react';

// const galleryImages = [
//   {
//     id: 1,
//     src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
//     alt: "Industrial CNC Machine",
//     description: "High-precision CNC machining center"
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1565439371131-f5e1c91e7bb0?auto=format&fit=crop&w=800&q=80",
//     alt: "Robotic Arm Assembly",
//     description: "Advanced robotic assembly system"
//   },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1563456161948-5847b88c2f48?auto=format&fit=crop&w=800&q=80",
//     alt: "Quality Control System",
//     description: "Automated quality inspection unit"
//   },
//   {
//     id: 4,
//     src: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80",
//     alt: "Manufacturing Line",
//     description: "Smart manufacturing production line"
//   }
// ];

// const ImageGallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
  
//   return (
//     <div className="gallery-container">
//       <div className="gallery-inner">
//         <h2 className="gallery-title">
//           Our Manufacturing Excellence
//         </h2>
        
//         {/* Diamond Gallery Layout */}
//         <div className="gallery-layout">
//           {/* Top Image */}
//           <div className="gallery-item-top">
//             <GalleryItem
//               image={galleryImages[0]}
//               index={0}
//               onSelect={() => setSelectedImage(galleryImages[0])}
//             />
//           </div>
          
//           {/* Left Image */}
//           <div className="gallery-item-left">
//             <GalleryItem
//               image={galleryImages[1]}
//               index={1}
//               onSelect={() => setSelectedImage(galleryImages[1])}
//             />
//           </div>
          
//           {/* Right Image */}
//           <div className="gallery-item-right">
//             <GalleryItem
//               image={galleryImages[2]}
//               index={2}
//               onSelect={() => setSelectedImage(galleryImages[2])}
//             />
//           </div>
          
//           {/* Bottom Image */}
//           <div className="gallery-item-bottom">
//             <GalleryItem
//               image={galleryImages[3]}
//               index={3}
//               onSelect={() => setSelectedImage(galleryImages[3])}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Lightbox */}
//       {selectedImage && (
//         <div 
//           className="lightbox"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button 
//             className="lightbox-close"
//             onClick={() => setSelectedImage(null)}
//           >
//             <X size={32} />
//           </button>
//           <div className="lightbox-content" onClick={e => e.stopPropagation()}>
//             <img
//               src={selectedImage.src}
//               alt={selectedImage.alt}
//               className="lightbox-image"
//             />
//             <p className="lightbox-description">
//               {selectedImage.description}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGallery;