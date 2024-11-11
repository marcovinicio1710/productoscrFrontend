import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from "react";

export const ProductImages = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(product.imagen_1_url);

    // Responsiveness settings for the carousel
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 6 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 6 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 5 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 4 }, // Adjusted for mobile
    };

    // Combine all images (main images and extra images)
    const combinedImages = [
        { id: 'main-1', imagen_url: product.imagen_1_url, alt_text: 'Imagen principal 1' },
        { id: 'main-2', imagen_url: product.imagen_2_url, alt_text: 'Imagen principal 2' },
        ...(product.imagenes || []) // Extra images from the backend
    ];

    return (
        <div className="w-full md:w-2/5 mb-2 flex flex-col items-center ">
            {/* Main image */}
            <div className="w-64 md:w-full max-w-lg mb-4">
                <img 
                    src={selectedImage || product.imagen_1_url} 
                    alt={product.nombre} 
                    className="w-full h-auto object-contain rounded-lg"
                />
            </div>

            {/* Thumbnails */}
            {combinedImages.length > 0 && (
                <div className="w-full max-w-lg">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        swipeable={true}
                        draggable={true}
                        arrows={true}
                        autoPlay={false}
                        keyBoardControl={true}
                        transitionDuration={500}
                        itemClass="px-2 mt-1"
                    >
                        {combinedImages.map((img) => (
                            img.imagen_url && (
                                <div 
                                    key={img.id} 
                                    className="cursor-pointer"
                                    onClick={() => setSelectedImage(img.imagen_url)}
                                >
                                    <img
                                        src={img.imagen_url}
                                        alt={img.alt_text}
                                        className={`w-16 h-16 object-cover rounded-lg ${selectedImage === img.imagen_url ? 'border-2 border-blue-500' : ''}`}
                                    />
                                </div>
                            )
                        ))}
                    </Carousel>
                </div>
            )}
        </div>
    );
};
