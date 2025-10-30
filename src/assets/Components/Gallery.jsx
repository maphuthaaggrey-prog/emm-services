import React, { useState } from 'react';
import Footer from './Footer'
import SEO from '../Components/SEO'


import before from '../images/gallery/before/IMG-20251023-WA0034.jpg'
import before1 from '../images/gallery/before/IMG-20251023-WA0013.jpg'
import before2 from '../images/gallery/before/IMG-20251023-WA0017.jpg'
import before3 from '../images/gallery/before/IMG-20251029-WA0017.jpg'
import before4 from '../images/gallery/before/IMG-20251029-WA0010.jpg'
import before5 from '../images/gallery/before/IMG-20251029-WA0023.jpg'
import after from '../images/gallery/after/IMG-20251023-WA0031.jpg'
import after1 from '../images/gallery/after/IMG-20251025-WA0017.jpg'
import after2 from '../images/gallery/after/IMG-20251025-WA0066.jpg'
import after3 from '../images/gallery/after/IMG-20251029-WA0013.jpg'
import after4 from '../images/gallery/after/IMG-20251029-WA0003.jpg'
import after5 from '../images/gallery/after/IMG-20251029-WA0015.jpg'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      before: before,
      after: after,
      title: 'Trommel screen panel',
      description: 'The screening panel undergoes a dramatic transformation from a heavily clogged state to fully operational condition. Initially, a dense layer of soil, clay, organic matter, and fine debris is compacted across the mesh openings, with particularly thick buildup in the lower sections blocking proper material flow and reducing efficiency. After cleaning, the screen reveals clear, open mesh apertures throughout the panel, with the metal framework and wire mesh fully visible and unobstructed',
      location: 'Komati Power Station'
    },
    {
      id: 2,
      before: before1,
      after: after1,
      title: 'Stairwell and Floor Area',
      description: 'The floor beneath the staircase, once covered in thick layers of industrial dust and debris, was restored to a clean and safe condition. All surfaces were cleared, leaving the space looking refreshed, well-maintained, and ready for operation again — a true before-and-after transformation.',
      location: 'Matla Power Station'
    },
    {
      id: 3,
      before: before2,
      after: after2,
      title: 'Belt conveyor line',
      description: 'Our team successfully cleaned this extensive conveyor belt system, tackling heavy accumulations of dust, dirt, and material residue that had built up across the belt surfaces, rollers, and structural framework. The cleaning process addressed multiple angled conveyor units on both sides of the facility, removing caked-on debris and restoring operational efficiency. ',
      location: 'Kriel Power Station'
    },
    {
      id: 4,
      before: before3,
      after: after3,
      title: 'Exterior area of Silo 3',
      description: 'The "before" image shows significant spillage spread across a wide area in front of the facility, with material buildup beneath the radial stacker and extending across the work zone. We cleared all accumulated material from the exterior surfaces, cleaned the ground area around the equipment, and restored safe access and operational clearances. This extensive spillage cleanup is essential for maintaining workplace safety, preventing environmental contamination, eliminating tripping and vehicle hazards, ensuring regulatory compliance, and keeping operational areas accessible for equipment maintenance and material handling operations in mining and bulk storage facilities.',
      location: 'Lethabo Power Station'
    },
    {
      id: 5,
      before: before4,
      after: after4,
      title: `Exterior tail end area of Silo 3's radial stacker`,
      description: 'The "before" image shows significant material buildup on the concrete surface near the discharge point, creating safety hazards, environmental concerns, and operational issues. We cleared all accumulated material from the exterior area, cleaned the surrounding concrete surfaces, and restored safe access around the equipment.',
      location: 'Komati Power Station'
    },
    {
      id: 6,
      before: before5,
      after: after5,
      title: 'Radial stockpile conveyor',
      description: 'The "before" image shows large piles of spillage material that had accumulated on the ground, creating safety hazards and operational inefficiencies. We thoroughly cleared the accumulated material from beneath the conveyor structure, cleaned the discharge area, and restored proper material flow management. This cleaning prevents material buildup that can interfere with equipment operation, creates tripping hazards, and leads to material waste. ',
      location: 'Matla Power Station'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
            <SEO 
                title="Gallery - Emily Mahlehu Mlotshywa (Pty) Ltd"
                description="View our project gallery showcasing industrial cleaning, transportation, and construction work completed across South Africa."
                canonical="https://yourdomain.com/gallery"
            />
    <div className='wrap'>
      <div className="gallery-container">
        <p className="text002">GALLERY</p>
        <p className="text003">BEFORE & AFTER CLEANING</p>
        <p className="thick-line"></p>

        <div className="gallery-intro">
          <p className='text006'>Witness the transformation through our specialized cleaning services. 
          Each project demonstrates our commitment to excellence and attention to detail 
          in power plant maintenance and cleaning.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="comparison-container">
                <div className="image-section">
                  <h4>Before Cleaning</h4>
                  <div 
                    className="image-wrapper before-image"
                    onClick={() => openModal({...item, type: 'before'})}
                  >
                    <img src={item.before} alt={`Before - ${item.title}`} />
                    <div className="image-overlay">
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                </div>
                
                <div className="image-section">
                  <h4>After Cleaning</h4>
                  <div 
                    className="image-wrapper after-image"
                    onClick={() => openModal({...item, type: 'after'})}
                  >
                    <img src={item.after} alt={`After - ${item.title}`} />
                    <div className="image-overlay">
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for enlarged images */}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>×</button>
              <img 
                src={selectedImage.type === 'before' ? selectedImage.before : selectedImage.after} 
                alt={`${selectedImage.type} - ${selectedImage.title}`}
              />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p className="image-type">{selectedImage.type === 'before' ? 'Before Cleaning' : 'After Cleaning'}</p>
                <p className="description">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
                <section id="contact">
                <Footer />
              </section>
              </>
  );
}

export default Gallery;