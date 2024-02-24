import * as THREE from "three";

const boxGeometry= new THREE.BoxGeometry(1,1,1);

const BlockStart = ({positionProp =[0,0,0]}) => {
    const blockHeight = 0.2;
    const blockSize= 4;

  return (
    <>
    <group position={positionProp}>
    <mesh receiveShadow position={[0,-1 * (blockHeight/2),0]}>
        <boxGeometry args={[blockSize,blockHeight,blockSize]}/>
        <meshStandardMaterial color="limegreen" />
    </mesh>
    </group>
    </>
  )
}


const Level = () => {
  return (
    <>
     <BlockStart positionProp={[0,0,0]}/>
    </>
  )
}

export default Level