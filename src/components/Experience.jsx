import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Avatar />
      <ambientLight intensity={1} />
    </>
  );
};
