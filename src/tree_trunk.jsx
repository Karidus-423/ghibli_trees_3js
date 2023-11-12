import { forwardRef, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { Vector3 } from 'three'
import { GhibliShader } from './ghibli-shader'

export const Trunk = forwardRef((props, ref) => {
  const { nodes } = useGLTF('/tree_trunk.glb')

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
        geometry={nodes.Trunk.geometry}
        position={[-3.024, 29.509, -20.505]}
        rotation={[-0.018, 0.787, -3.129]}
        scale={[0.42,0.8,0.42]}
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

useGLTF.preload('/tree_trunk.glb')
