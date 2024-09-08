import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = ( { isMobile}) => {
  const computer = useGLTF('./studio/studio.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.10} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
      position={[-20, 100, 10]}
      angle={0.12}
      penumbra={1}
      intensity={5}
      castShadow
      shadow-mapSize={1024}
      decay={false}/>  
      <primitive object={computer.scene}
      scale={isMobile ? 0.5 : 0.75}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]} />
      
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
     // Add a listener for changes to the screen size
     const mediaQuery = window.matchMedia('(max-width: 500px)');

     // set the initial value of the isMobile variable
 
     setIsMobile(mediaQuery.matches);
 
     // define a callback function to handle changes to the media query
 
     const handleMediaQueryChange = (event) => {
       setIsMobile(event.matches);      
     };
 
     // add the callback function as a listener for changes to the mediaquery
 
     mediaQuery.addEventListener('change', handleMediaQueryChange);
 
     // remove this listener when the component is unmounted
 
     return () => {
       mediaQuery.removeEventListener('change', handleMediaQueryChange);
     }
   })


  return (
    <Canvas
    frameloop="demand"
    camera={{ position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
      enableZoom={true}
       />
      <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />

    </Canvas>
  )


}

export default ComputersCanvas