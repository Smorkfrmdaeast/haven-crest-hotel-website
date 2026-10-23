import React, { useState } from 'react';
import { FALLBACK_IMAGE_DATA_URI } from '../../config/images';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  aspectRatioClass?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  aspectRatioClass = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If prop src updates, reset state
  React.useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(FALLBACK_IMAGE_DATA_URI);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#161618] ${aspectRatioClass} ${className}`}>
      {/* Skeleton Shimmer */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 animate-shimmer bg-[#1A1A1E]" 
          aria-hidden="true" 
        />
      )}

      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
