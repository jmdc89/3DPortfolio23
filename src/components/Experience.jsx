import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Deskv } from "./Officemacdesk2";
import {motion} from "framer-motion-3d";


export const Experience = (props) => {
  const {section} = props;

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
          < Deskv />
        )}
        {animation === "Typing" && (
          <mesh scale={[0.8,0.5,0.8]} position-y={0.25}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        )}
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </motion.group>
    </>
  );
};
