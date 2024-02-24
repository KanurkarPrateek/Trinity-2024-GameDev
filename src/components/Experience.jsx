import Level from "./Level";
import Lights from "./Lights";
import { Physics } from "@react-three/rapier";

// Rest of your Experience component remains unchanged
export default function Experience() {
  return (
    <>
      <Lights />
      <Physics debug>
        <Level/>
      </Physics>      
   </>
  );
}
