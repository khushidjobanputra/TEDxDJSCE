import * as THREE from "three";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Reflector, Text, useTexture, useGLTF } from "@react-three/drei";
import bannerImg from "../assets/Home-images/bannerImg.webp";
import Speaker from "../Components/Home/Speaker";
import { info } from "../Components/Home/constant";
import mobileBanner from "../assets/Home-images/mobileBanner.jpg";

export default function Home() {
  return (
<<<<<<< HEAD
    <>
      <div
        id="banner"
        className="w-[100vw]"
        // style={{
        //   backgroundImage: `url(${bannerImg})`,
        // }}
      >
        <img className="w-full hidden lg:block" src={bannerImg} alt="" />
        <img className="w-full block lg:hidden" src={mobileBanner} alt="" />
      </div>
=======
    <div className='mt-17 sm:h-[25rem]'>
    <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
      <color attach="background" args={['black']} />
      <fog attach="fog" args={['black', 15, 20]} />
      <Suspense fallback={null}>
        <group position={[0, -3, 0]}>
          <Carla rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 1, 0.6]} scale={[0.26, 0.26, 0.26]} />
          <VideoText position={[0, 2.8, -2]}  />
          <Ground />
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <directionalLight position={[-50, 0, -40]} intensity={0.7} />
        <Intro />
>>>>>>> ed611db30b9c85919df66ddb566c13ed1d7e6626

      {/* <div className="mt-17 h-screen">
        <Canvas
          concurrent
          gl={{ alpha: false }}
          pixelRatio={[1, 1.5]}
          camera={{ position: [0, 3, 100], fov: 15 }}
        >
          <color attach="background" args={["black"]} />
          <fog attach="fog" args={["black", 15, 20]} />
          <Suspense fallback={null}>
            <group position={[0, -3, 0]}>
              <Carla
                rotation={[0, Math.PI - 0.4, 0]}
                position={[-1.2, 1, 0.6]}
                scale={[0.26, 0.26, 0.26]}
              />
              <VideoText position={[0, 2.8, -2]} />
              <Ground />
            </group>
            <ambientLight intensity={0.5} />
            <spotLight position={[0, 10, 0]} intensity={0.3} />
            <directionalLight position={[-50, 0, -40]} intensity={0.7} />
            <Intro />
          </Suspense>
        </Canvas>
      </div> */}

      {/* bg-yellow-400 */}
      <div id="speaker-section" className="">
        <h1 className="text-white text-5xl text-center mt-10">Our Speakers</h1>
        {/* bg-red-600 */}
        <div id="bottom-sec" className=" w-[100vw]">
          {info.map((data, index) => (
            <Speaker
              key={index}
              name={data.name}
              imageSrc={data.imageSrc}
              content={data.content}
              index={index}
            />
          ))}

          {/* <Speaker name="Raj Dayal" content="" />
          <Speaker name="Raj Dayal" content="" /> */}
        </div>
      </div>
    </>
  );
}

function Carla(props) {
  const { scene } = useGLTF("/carla-draco.glb");
  return <primitive object={scene} {...props} />;
}

function VideoText(props) {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/drei.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
      Tedx
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  );
}

function Ground() {
  const [floor, normal] = useTexture([
    "/SurfaceImperfections003_1K_var1.jpg",
    "/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <Reflector
      blur={[400, 100]}
      resolution={512}
      args={[10, 10]}
      mirror={0.5}
      mixBlur={6}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}
