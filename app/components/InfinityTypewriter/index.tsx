import React from "react";
import Typewriter from "typewriter-effect";

interface TypeWriterType {
  label: string;
}

export const InfiniteTypewriter: React.FC<TypeWriterType> = ({ label }) => {
  return (
    <Typewriter
      options={{
        strings: [label],
        autoStart: true,
        loop: true,
      }}
    />
  );
};
