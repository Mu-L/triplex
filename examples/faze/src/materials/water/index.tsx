import { useFrame } from "@react-three/fiber";
import { Color } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color as Color3, MeshStandardMaterial } from "three";
import CustomShaderMaterial from "three-custom-shader-material";
import { defaultWaves } from "./wave";
import vert from "./vertex.glsl";
import frag from "./fragment.glsl";

export function WaterMaterial({
  color,
  opacity = 1.0,
  transparent,
  wavelength = 1,
  speed = 1,
}: {
  color?: Color;
  opacity?: number;
  transparent?: boolean;
  wavelength?: number;
  speed?: number;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null!);

  useFrame((_, delta) => {
    ref.current.uniforms.u_windTime.value +=
      ref.current.uniforms.u_windSpeed.value * delta;
  });

  const uniforms = useMemo(() => {
    const [waveA, waveB, waveC] = defaultWaves(wavelength);
    return {
      u_windSpeed: { value: 0.1 * speed },
      u_windTime: { value: 0.0 },
      u_waveA: { value: waveA },
      u_waveB: { value: waveB },
      u_waveC: { value: waveC },
      u_opacity: { value: opacity },
      u_waterColor: { value: new Color3("#1ca3ec").convertLinearToSRGB() },
      u_highlightColor: { value: new Color3("#b3ffff").convertLinearToSRGB() },
    };
  }, [opacity, speed, wavelength]);

  return (
    <CustomShaderMaterial
      baseMaterial={MeshStandardMaterial}
      color={color}
      fragmentShader={frag}
      ref={ref}
      metalness={0.1}
      transparent={transparent}
      uniforms={uniforms}
      vertexShader={vert}
    />
  );
}