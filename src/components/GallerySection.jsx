import { useState } from "react"
import Icon from "./AppIcon"
import image1 from '../assets/images/DJI_20241004184746_0443_D.png'
import image2 from '../assets/images/IMG_9924.png'
import image3 from '../assets/images/Web_01.jpg'
import image4 from '../assets/images/Web_001.jpg'
import image5 from '../assets/images/Web_1g6.jpg'
import image6 from '../assets/images/Web_002.jpg'
import image7 from '../assets/images/Web_2j3.jpg'
import image8 from '../assets/images/Web_04.jpg'
import image9 from '../assets/images/Web_06.jpg'
import image10 from '../assets/images/Web_07.jpg'
import image11 from '../assets/images/Web_08.jpg'
import image12 from '../assets/images/Web_11.jpg'
import image13 from '../assets/images/Web_0011.jpg'

export default function GallerySection() {
   const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalImageIndex, setModalImageIndex] = useState(0);

  const galleryImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(galleryImages.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(galleryImages.length / 3)) % Math.ceil(galleryImages.length / 3));
  };

  const openModal = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setModalImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextModalImage = () => {
    const nextIndex = (modalImageIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setModalImageIndex(nextIndex);
  };

  const prevModalImage = () => {
    const prevIndex = (modalImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setModalImageIndex(prevIndex);
  };
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
                  <span className="block bg-[linear-gradient(135deg,#ffffff_0%,#ffae00_50%,#f4a261_100%)] bg-clip-text text-transparent">Sample Gallery</span>
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  A showcase of our creative work and design transformations
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  image1,
                  image2,
                  image3,
                  image4,
                  image5,
                  image6,
                  image7,
                  image8,
                  image9,
                  image10,
                  image11,
                  image12,
                  image13,
                ].map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 cursor-pointer"
                    onClick={() => openModal(image, index)}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Icon name="ZoomIn" size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            alt="Selected gallery image"
                            className="max-w-full max-h-full object-contain"
                        />

                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                        >
                            <Icon name="X" size={24} />
                        </button>

                        {/* Previous button */}
                        <button
                            onClick={prevModalImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                        >
                            <Icon name="ChevronLeft" size={24} />
                        </button>

                        {/* Next button */}
                        <button
                            onClick={nextModalImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors"
                        >
                            <Icon name="ChevronRight" size={24} />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}