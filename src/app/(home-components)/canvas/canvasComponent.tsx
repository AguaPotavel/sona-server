"use client";

import {
  ContactShadows,
  Html,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import { Canvas, Object3DProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { SonaLogo } from "@/app/_shared/components/ui/sona-logo";

export default function CanvasComponent({
  sizes,
}: {
  sizes: { width: number; height: number };
}) {
  return (
    <div style={{ width: `${sizes.width}px`, height: `${sizes.height}px` }}>
      <Canvas camera={{ position: [0, 10, 8], fov: 30 }} flat color="#fff">
        {/* <ambientLight intensity={1} /> */}

        <PerspectiveCamera
          makeDefault
          fov={30}
          position={[-4, 10, 8]}
          rotation={[0, 0, 0]}
        />

        <spotLight
          intensity={100}
          angle={4}
          penumbra={0.5}
          position={[0, 0, 4]}
          castShadow
          color={"#4f46e5"}
        />

        <spotLight
          intensity={100}
          angle={1}
          penumbra={0.1}
          position={[1, 5, 5]}
          castShadow
          color={"#afafaf"}
        />

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.05}
          enableZoom={false}
          makeDefault
          target={[0, 0, 0]}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 5}
        />

        <ContactShadows
          resolution={512}
          position={[0, -0.8, 0]}
          opacity={1}
          scale={5}
          blur={2}
          far={0.8}
        />
        <LeagueLogo rotation={[1, Math.PI / 1.8, 0]} />
        {/* <Environment preset="sunset" background blur={1} /> */}
      </Canvas>
    </div>
  );
}

function LeagueLogo(props: Object3DProps) {
  const ref = useRef<any>();
  const { nodes, materials } = useGLTF("/gaming_laptop.glb");

  console.log(nodes);
  console.log(materials);

  let newMaterials: any = {};

  Object.keys(materials).map((item) => {
    newMaterials[item.replace(".", "")] = materials[item];
  });

  console.log(newMaterials);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(0, 0, 0);
    ref.current.position.y = (-2 + Math.cos(t / 4)) / 5;
  });

  return (
    <group ref={ref} position={[0, -1, 0]} scale={1}>
      <mesh
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cube001_1.geometry}
        material={materials.Material}
        position={[-1.2, 0.5, 0.15]}
        rotation={[0, 4.2, -45]}
        castShadow
      >
        <mesh
          receiveShadow
          //   castShadow
          //@ts-ignore
          geometry={nodes.Object_4.geometry}
          material={newMaterials.Material001}
        ></mesh>
        <mesh
          receiveShadow
          //   castShadow
          //@ts-ignore
          geometry={nodes.Object_5.geometry}
          material={newMaterials.Material001}
        ></mesh>
        <mesh
          receiveShadow
          //   castShadow
          //@ts-ignore
          geometry={nodes.Object_6.geometry}
          material={materials.Material}
        ></mesh>
        <mesh
          receiveShadow
          //   castShadow
          //@ts-ignore
          geometry={nodes.Object_7.geometry}
          material={materials.Material}
        >
          <Html
            className="content"
            rotation={[-Math.PI / 2, 0, -4.71]}
            position={[-1.9, 0.22, 0.02]}
            transform
            occlude
            distanceFactor={2}
          >
            <ContentPage />
          </Html>
        </mesh>
        <mesh
          receiveShadow
          castShadow
          //@ts-ignore
          geometry={nodes.Object_8.geometry}
          material={newMaterials.Material005}
        ></mesh>
        <mesh
          receiveShadow
          castShadow
          //@ts-ignore
          geometry={nodes.Object_9.geometry}
          material={newMaterials.Material006}
        ></mesh>
        <mesh
          receiveShadow
          //   castShadow
          //@ts-ignore
          geometry={nodes.Object_10.geometry}
          material={materials.Material}
        ></mesh>
        <mesh
          receiveShadow
          //@ts-ignore
          geometry={nodes.Object_11.geometry}
          material={materials.Material}
        ></mesh>
      </mesh>

      <mesh
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cube003_2.geometry}
        material={materials.Material}
        position={[-1.74, 0.5, 1.1]}
        rotation={[0, 4.2, 0]}
      >
        <mesh
          receiveShadow
          castShadow
          //@ts-ignore
          geometry={nodes.Object_13.geometry}
          material={newMaterials.Material002}
        ></mesh>
        <mesh
          receiveShadow
          castShadow
          //@ts-ignore
          geometry={nodes.Object_14.geometry}
          material={newMaterials.Material009}
        ></mesh>
        <mesh
          receiveShadow
          //@ts-ignore
          geometry={nodes.Object_15.geometry}
          material={newMaterials.Material009}
        ></mesh>
        <mesh
          receiveShadow
          castShadow
          //@ts-ignore
          geometry={nodes.Object_16.geometry}
          material={newMaterials.Material010}
        ></mesh>
        <mesh
          receiveShadow
          castShadow
          //@ts-ignore
          geometry={nodes.Object_17.geometry}
          material={newMaterials.Material005}
        ></mesh>
        <mesh
          receiveShadow
          castShadow
          //@ts-ignore
          geometry={nodes.Object_18.geometry}
          material={newMaterials.Material008}
        ></mesh>
        <mesh
          receiveShadow
          castShadow
          //@ts-ignore
          geometry={nodes.Object_19.geometry}
          material={newMaterials.Material005}
        ></mesh>
      </mesh>
    </group>
  );
}

function ContentPage({
  onPointerOver,
  onPointerOut,
}: {
  onPointerOver?: MouseEvent;
  onPointerOut?: MouseEvent;
}) {
  return (
    <div className="w-full h-full flex text-xs bg-slate-950 justify-center">
      <SonaLogo />
    </div>
  );
}

useGLTF.preload("/gaming_laptop.glb");
