import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Deskv } from "./Officemacdesk2";
import {motion} from "framer-motion-3d";
import { useThree } from "@react-three/fiber";


export const Experience = (props) => {
  const {section} = props;
  const {viewport} = useThree();

  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });


  return (
    <>
      {/* <Sky /> */}
      <Environment preset="sunset" />
      <ambientLight intensity={1} />
      <motion.group 
      position-y={0}
      position-z={2} 
      rotation-y={Math.PI/5}
      // animate={{
      //   y: section === 0 ? 0 : -0.5,
      // }}
      >
        <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <Avatar animation={animation} />
        {animation === "Typing" && (
          < Deskv section={section}/>
        )}
        {animation === "Typing" && (
          <mesh scale={[0.8,0.5,0.8]} position-y={0.25}>
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
        )}
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
        <group scale={[1.5, 1.5, 1.5]} position-y={-1.5}>
          <Avatar animation={section === 0 ? "Falling" : "Standing"} />
        </group>
      </motion.group>
    </>
  );
};
