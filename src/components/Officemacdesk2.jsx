/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/officemacdesk2.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {motion} from "framer-motion-3d"

export function Deskv(props) {
  const {section} = props;
  const { nodes, materials } = useGLTF('models/officemacdesk2.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.04} rotation-y={Math.PI} position-z={0.6} position-y={0.3} position-x={-0.2}>
        <motion.group 
            position={[-5.85, 10.37, -16.3]} 
            scale={0.05}
            animate={{
              scale: section === 0 ? 0.05 : 0.01,
            }}
            >
          <mesh geometry={nodes.polySurface60_Display_Shader_0.geometry} material={materials.Display_Shader} />
          <mesh geometry={nodes.polySurface60_MonitorBlack_Shader_0.geometry} material={materials.MonitorBlack_Shader} />
          <mesh geometry={nodes.polySurface60_MonitorChrome_Shader_0.geometry} material={materials.MonitorChrome_Shader} />
          <mesh geometry={nodes.polySurface61_aiStandardSurface11_0.geometry} material={materials.aiStandardSurface11} />
        </motion.group>
        <group position={[0, -5.25, 7.94]} scale={2.69}>
          <mesh geometry={nodes.polySurface1_lambert1_0.geometry} material={materials.lambert1} />
          <mesh geometry={nodes.polySurface1_TableCeramic_Shader_0.geometry} material={materials.TableCeramic_Shader} />
          <mesh geometry={nodes.polySurface1_TableWood_Shader_0.geometry} material={materials.TableWood_Shader} />
        </group>
        <group position={[0.3, -4.36, 8.85]} rotation={[0, 0.03, 0]} scale={2.58}>
          <mesh geometry={nodes.polySurface5_BBookpaper_Shader_0.geometry} material={materials.BBookpaper_Shader} />
          <mesh geometry={nodes.polySurface5_BBookRoot_Shader_0.geometry} material={materials.BBookRoot_Shader} />
        </group>
        <group position={[0, -5.08, 8.17]} rotation={[-0.01, 0, 0]} scale={2.69}>
          <mesh geometry={nodes.polySurface7_Keyboard_Shader_0.geometry} material={materials.Keyboard_Shader} />
          <mesh geometry={nodes.polySurface7_KeyboardDown_Shader_0.geometry} material={materials.KeyboardDown_Shader} />
        </group>
        <mesh geometry={nodes.pCube4_Tablet_Stylus_Shader_0.geometry} material={materials.Tablet_Stylus_Shader} position={[-15.44, 10.49, -1.46]} rotation={[-Math.PI, 1.15, -Math.PI]} scale={[4.04, 0.18, 6.2]} />
        <mesh geometry={nodes.pCylinder18_Tablet_Stylus_Shader_0.geometry} material={materials.Tablet_Stylus_Shader} position={[-14.1, 10.47, 1.12]} rotation={[0, 0.55, Math.PI / 2]} scale={[0.09, 1.65, 0.09]} />
        <mesh geometry={nodes.polySurface4_lambert1_0.geometry} material={materials.lambert1} position={[0.75, -5.29, 8.17]} scale={2.69} />
        <mesh geometry={nodes.polySurface6_Mouse_Shader_0.geometry} material={materials.Mouse_Shader} position={[0.7, -5.25, 7.66]} scale={2.69} />
      </group>
    </group>
  )
}

useGLTF.preload('models/officemacdesk2.glb')
