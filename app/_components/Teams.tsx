import React from "react";
import BigTitle from "./BigTitle";
import Polaroid from "./Polaroid";

const Teams = () => {
  return (
    <div className="py-40 cream flex flex-col justify-center items-center w-full max-w-8xl">
      <h1 className="text-6xl md:text-[12rem] text-center leading-[0.85] uppercase tracking-[-0.08em] font-extrabold max-w-8xl flex flex-col">
        <span>
          Notre <strong className="purple">histoire</strong>{" "}
        </span>
        <span>et notre équipe</span>
      </h1>
      <div className="ml-auto max-w-2xl mt-20 md:mr-20 px-2">
        <h2 className="purple font-extrabold text-3xl">
          Né lors d'un hackathon au Stade Vélodrome
        </h2>
        <p className="font-semibold text-3xl mt-2 ">
          VoiceCheck AI a été créé par l'équipe de{" "}
          <span className="italic font-extrabold">l'école 42 Marseille</span>{" "}
          lors d'un hackathon au Stade Vélodrome en collaboration avec
          ElevenLabs et Hugging Face, où nous avons relevé le défi de
          révolutionner la vérification des contacts
        </p>
      </div>

      <div className="flex gap-8 mt-32 items-center justify-center">
        <div className="rotate-[-4deg]">
          <Polaroid
            imageSrc="/IMG_9355.jpeg"
            imageAlt="Membre de l'équipe 1"
            captionText="Développeuse de la team"
            size="medium"
            background="white"
          />
        </div>

        <div className="rotate-[2deg] mt-8">
          <Polaroid
            imageSrc="/IMG_9342.jpeg"
            imageAlt="Membre de l'équipe 2"
            captionText="menbres de la team"
            size="medium"
            background="yellow"
          />
        </div>

        <div className="rotate-[-3deg]">
          <Polaroid
            imageSrc="/JEG_9496.jpeg"
            imageAlt="l'equipe 42 marseille - Stade velodrome"
            captionText="l'equipe 42 marseille - Stade velodrome"
            size="medium"
            background="white"
          />
        </div>
      </div>

      {/* Bouton Offrez-nous un café */}
      <a
        href="https://www.leetchi.com/fr/c/athena-1337192?utm_source=copylink&utm_medium=social_sharing&utm_campaign=potm" // Remplace par le lien réel
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 px-8 py-4 bg-yellow text-black font-extrabold rounded-full uppercase tracking-wide hover:bg-yellow-600 transition-colors"
      >
        Offrez-nous un café ☕
      </a>
    </div>
  );
};

export default Teams;
