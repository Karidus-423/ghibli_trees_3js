import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color, Group } from 'three'
import { Leaves } from './tree_leaves'
import { Trunk } from './tree_trunk'

export const Scene = () => {
  const refLeaves = useRef(null);
  const refTrunk = useRef(null);
  const groupRef = useRef();

  useFrame(() => {
    const { current: group } = groupRef;
    if (group) {
      group.rotation.y = group.rotation.z += 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        castShadow
        position={[15, 15, 10]}
        shadow-mapSize={[2048, 2048]}
      />
      <group ref={groupRef}>
        <Leaves 
          position={[0, 10, -6]}
          colors={[
            new Color('#427062').convertLinearToSRGB(),
            new Color('#33594e').convertLinearToSRGB(),
            new Color('#234549').convertLinearToSRGB(),
            new Color('#1e363f').convertLinearToSRGB()
          ]}
        />
        <Trunk
          position={[3, -26, 16]}
          colors={[
            new Color('#9e7444').convertLinearToSRGB(),
            new Color('#805a30').convertLinearToSRGB(),
            new Color('#65431c').convertLinearToSRGB(),
            new Color('#52391d').convertLinearToSRGB()
          ]}
        />
      </group>
      <Leaves
        position={[0, 28, 15]}
        colors={[
          new Color('#4a8d7e').convertLinearToSRGB(),
          new Color('#377f6a').convertLinearToSRGB(),
          new Color('#184f52').convertLinearToSRGB(),
          new Color('#143b36').convertLinearToSRGB()
        ]}
      />
      <Trunk 
        position={[0, -12, 40]}
        colors={[
          new Color('#9e7444').convertLinearToSRGB(),
          new Color('#805a30').convertLinearToSRGB(),
          new Color('#65431c').convertLinearToSRGB(),
          new Color('#52391d').convertLinearToSRGB()
        ]}
      />
    </>
  )
}
