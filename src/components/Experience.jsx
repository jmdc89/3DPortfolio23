import { ContactShadows, Environment, OrbitControls, Sky, useScroll } from "@react-three/drei";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Deskv } from "./Officemacdesk2";
import { motion } from "framer-motion-3d";
import { useThree, useFrame } from "@react-three/fiber";
import { useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import * as THREE from "three";

export const Experience = (props) => {
  const {menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }


    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z])
  });


  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });


  return (
    <>
      <motion.group 
        position={[0.025658745714699907, -0.08, 2.154407346872966]}
         animate={ "" +  section}
         transition={{
           duration: 0.6,
         }}
         variants={{
           0: {
             scaleX: 1,
             scaleY: 1,
             scaleZ: 1,
             y: 0,
             rotateY: 0.5,
           },
           1: {
             y: -viewport.height -0.4,
             x: 0,
             z: 2,
             rotateX: 0,
             rotateY: 0,
             rotateZ: 0,
           },
           2: {
             x: -2,
             y: -viewport.height * 2 + 0.5,
             z: 0,
             rotateX: 0,
             rotateY: Math.PI / 2,
             rotateZ: 0,
           },
           3: {
             y: -viewport.height * 3 + 1,
             x: 0.3,
             z: 0,
             rotateX: 0,
             rotateY: -Math.PI / 4,
             rotateZ: 0,
           },
         }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>


      {/* <Sky /> */}
      <Environment preset="sunset" />
      <ambientLight intensity={1} />
      <motion.group
        position-y={0}
        position-z={2}
        rotation-y={Math.PI / 5}
        animate={{
          y: section === 0 ? 0 : -0.5,
        }}
      >
        < Deskv section={section} />
        <group 
          ref={characterContainerAboutRef}  
          name="Empty" position={[-0.07, -0.08, 0.14]} 
          rotation={[-Math.PI, 0.04, -Math.PI]} 
          // scale={4}
          ></group>
          {/* /* <group scale={[1.5, 1.5, 1.5]} position-y={-1.5}>
            <Avatar animation={section === 0 ? "Falling" : "Standing"} />
          </group> */}
        
        {/* <group ref={characterContainerAboutRef}  name="Empty" position={[-0.07, -0.08, 0.14]} rotation={[-Math.PI, 0.04, -Math.PI]} scale={0.25}> */}
          {/* <group scale={[1.5, 1.5, 1.5]} position-y={-1.5}>
            <Avatar animation={section === 0 ? "Falling" : "Standing"} />
          </group> */}
        {/* </group> */}
        {/* <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <Avatar animation={animation} />
        {animation === "Typing" && (
          < Deskv section={section} />
        )}
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="blue" />
          </mesh> */}
        {/* )} */}
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="blue" />
          </mesh>
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        // scale={[0.9, 0.9, 0.9]}
        // rotation-y={-Math.PI / 4}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -5, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[5, -2, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -3, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
    </>
  );
};
