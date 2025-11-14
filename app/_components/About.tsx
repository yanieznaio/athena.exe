import Image from "next/image";
import React from "react";
import Polaroid from "./Polaroid";
import BackgroundSection, { BigTextTitle } from "./BackgroundSection";
import BigTitle from "./BigTitle";
import HighlightedText from "./HighlightedText";

const About = () => {
  return (
    <div>
      <div className="min-h-screen w-full bg-white flex flex-col justify-center items-center cream py-40">
        <BigTitle
          lines={[
            "Vérifiez vos",
            { text: " contacts ", highlight: true },
            "de manière",
            "intelligente",
          ]}
          size="xlarge"
          highlightColor="purple"
        />
        <div className="mt-30">
          <Polaroid
            imageSrc="/ChatGPT Image Nov 13, 2025, 10_33_07 PM.png"
            imageAlt="Illustration VoiceCheck AI"
            overlayText="Grâce à notre système IA de vérification"
            captionText={
              <span className="flex flex-col">
                <span>Passez des appels téléphoniques automatiques</span>
                <span>et validez vos contacts en temps réel.</span>
              </span>
            }
            size="large"
            background="yellow"
            imagePosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
