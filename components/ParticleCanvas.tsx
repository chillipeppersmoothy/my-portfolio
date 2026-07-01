"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { particleObject } from "./../public/assets/particleObject";

export default function ParticleCanvas() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = particleObject;

  if (init) {
    return <Particles id="tsparticles" options={options} className="z-[-10]" />;
  }

  return null;
}
