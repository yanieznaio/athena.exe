import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import DualRowSlider from "./_components/Slider";
import BackgroundSection from "./_components/BackgroundSection";
import { BigTextTitle } from "./_components/BackgroundSection";
import Teams from "./_components/Teams";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <BackgroundSection
        backgroundColor="yellow" // yellow background
        backgroundImage="/ChatGPT Image Nov 13, 2025, 10_33_07 PM.png" // optional background image
        textMode="normal" // normal text
        height="100vh" // adjust height
        contentAlign="center"
        contentJustify="center"
        overlayOpacity={0.2} // optional overlay
        imagePosition="center"
      >
        <BigTextTitle
          lines={["ESSAYE ", "MAINTENANT"]}
          size="large"
          color="yellow" // yellow text
          align="center"
        />
      </BackgroundSection>
      <DualRowSlider
        purpleImages={[
          {
            src: "/ChatGPT Image Nov 13, 2025, 10_33_07 PM.png",
            alt: "Image 1",
          },
          { src: "", alt: "Empty" }, // Will show white background
          {
            src: "/ChatGPT Image Nov 13, 2025, 10_33_07 PM.png",
            alt: "Image 3",
          },
        ]}
        yellowImages={[
          { src: "", alt: "Empty" }, // Will show white background
          {
            src: "/ChatGPT Image Nov 13, 2025, 10_33_07 PM.png",
            alt: "Image 6",
          },
        ]}
      />
      <Teams />
    </div>
  );
}
