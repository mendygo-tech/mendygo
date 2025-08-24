import Image, { StaticImageData } from "next/image";
import React from "react";

type ImageWithFadeProps = {
    lightSrc: StaticImageData;
    darkSrc: StaticImageData;
    alt: string;
    layoutType?: "contain" | "cover";
    className?: string;
};

const ImageWithFade: React.FC<ImageWithFadeProps> = ({
    lightSrc,
    darkSrc,
    alt,
    layoutType = "cover",
    className = "",
}) => {
    const objectStyle =
        layoutType === "contain"
            ? "object-contain w-full h-full"
            : "object-cover w-full h-full object-top";

    return (
        <div
            className={`relative w-full aspect-[16/9] sm:h-[60vh] rounded-t-lg overflow-hidden ${className}`}
        >
            {/* Light image */}
            <Image
                src={lightSrc}
                alt={alt}
                className={`transition-transform duration-300 block dark:hidden ${objectStyle}`}
                priority
                fill
            />

            {/* Dark image */}
            <Image
                src={darkSrc}
                alt={alt}
                className={`transition-transform duration-300 hidden dark:block ${objectStyle}`}
                priority
                fill
            />

            {/* Fade overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[15%] pointer-events-none bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#06060D] dark:via-[#121212] dark:to-transparent" />
        </div>
    );
};

export default ImageWithFade;
