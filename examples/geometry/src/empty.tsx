import { forwardRef, memo } from "react";

const WhiteBox = forwardRef(() => (
  <>
    <group
      position={[1.9086648049886241, 0.04572838022181329, -0.688279655460336]}
      scale={[1, 1, 1]}
      rotation={[10, 0, 0, "XYZ"]}
    >
      <mesh
        position={[
          1.9086648049886241, 0.04572838022181329, 0.39765303595505175,
        ]}
        scale={[1, 1, 1]}
        rotation={[-1.7524068513792561, 0.10591308637924984, 0.833266430489208]}
      >
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
    </group>
  </>
));

export const AnotherBox = memo(() => (
  <mesh
    position-x={-2}
    rotation={[0, 0, 0]}
    position={undefined}
    visible={true}
    castShadow={undefined}
    receiveShadow={undefined}
  >
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="pink" />
  </mesh>
));

export function Empty() {
  return (
    <>
      <mesh
        position={[-0.8747332311659066, 0, 0]}
        rotation={[0, 0, -0.5833472919033484]}
        scale={[2.4353118252497836, 2.4353118252497836, 2.4353118252497836]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="pink" />
      </mesh>
      <pointLight
        position={[-1.9975799090485649, 2.588841540204465, 2.6706718717036817]}
      />
    </>
  );
}

export default WhiteBox;