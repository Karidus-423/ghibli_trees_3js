import { forwardRef, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { Vector3 } from 'three'
import { GhibliShader } from './ghibli-shader'

export const Leaves = forwardRef((props, ref) => {
  const { nodes } = useGLTF('/newton.glb')

  const uniforms = useMemo(
    () => ({
      colorMap: {
        value: props.colors
      },
      brightnessThresholds: {
        value: [0.6, 0.35, 0.001]
      },
      lightPosition: { value: new Vector3(15, 15, 15) }
    }),
    [props.colors]
  )

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[-0.059, 0.298, 0.703]}
        rotation={[0.329, -0.027, 0.023]}
        scale={[2,2,2]}
      >
      <shaderMaterial 
      attach="material"
      {...GhibliShader}
      uniforms = {uniforms}
      />
      </mesh>
    </group>
  )
})

useGLTF.preload('/newton.glb')
