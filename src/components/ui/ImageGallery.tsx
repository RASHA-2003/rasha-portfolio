import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { ProjectImage } from '../../types/portfolio';

export interface ImageGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, projectTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-48 sm:h-64 rounded-xl border border-[#E2DCea] bg-[#FAF8FC] flex flex-col items-center justify-center text-[#655E75]">
        <ImageIcon className="w-8 h-8 mb-2 opacity-60 text-[#8C79A8]" />
        <p className="text-sm">No screenshots available</p>
      </div>
    );
  }

  const currentImage = images[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full space-y-3">
      {/* Main Image Display */}
      <div className="relative w-full min-h-[260px] sm:min-h-[360px] md:min-h-[420px] max-h-[500px] rounded-xl overflow-hidden border border-[#E2DCea] bg-[#FAF8FC] flex items-center justify-center p-2 sm:p-3 group">
        {/* Subtle blurred ambient backdrop to smoothly fill non-16:9 aspect ratios */}
        <img
          src={currentImage.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 pointer-events-none scale-110"
        />

        {/* Sharp original image with natural proportions preserved without cropping */}
        <img
          src={currentImage.url}
          alt={currentImage.altText || `${projectTitle} - Screenshot ${activeIndex + 1}`}
          className="relative z-10 max-h-[240px] sm:max-h-[340px] md:max-h-[480px] w-auto h-auto max-w-full object-contain rounded-lg shadow-sm transition-all duration-300"
          loading="lazy"
        />

        {/* Counter Badge */}
        <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-md border border-[#E2DCea] text-[#282433] shadow-sm">
          {activeIndex + 1} / {images.length}
        </div>

        {/* Navigation Arrows (if multiple images) */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2DCea] text-[#282433] opacity-85 sm:opacity-0 group-hover:opacity-100 hover:bg-[#8C79A8] hover:border-[#8C79A8] hover:text-white transition-all cursor-pointer focus-visible:opacity-100 shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2DCea] text-[#282433] opacity-85 sm:opacity-0 group-hover:opacity-100 hover:bg-[#8C79A8] hover:border-[#8C79A8] hover:text-white transition-all cursor-pointer focus-visible:opacity-100 shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      {currentImage.caption && (
        <p className="text-xs sm:text-sm text-[#655E75] text-center italic px-2">
          {currentImage.caption}
        </p>
      )}

      {/* Thumbnails Rail (if multiple images) */}
      {images.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Jump to screenshot ${idx + 1}`}
              className={`relative shrink-0 w-20 sm:w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer bg-[#FAF8FC] ${
                activeIndex === idx
                  ? 'border-[#8C79A8] ring-2 ring-[#8C79A8]/30 opacity-100 scale-105'
                  : 'border-[#E2DCea] opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-contain p-0.5"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
