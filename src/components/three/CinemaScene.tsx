import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural cinema seats instancing
function CinemaSeats() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const rows = 10;
  const cols = 14;
  const count = rows * cols;

  React.useEffect(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    let idx = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Leave middle aisle open
        if (c === 6 || c === 7) continue;

        const x = (c - cols / 2) * 0.9;
        const z = 2 - r * 1.2;
        const y = -1.2 + r * 0.25; // stepped elevation

        dummy.position.set(x, y, z);
        dummy.rotation.x = 0;
        dummy.scale.set(0.7, 0.45, 0.5);
        dummy.updateMatrix();

        meshRef.current.setMatrixAt(idx++, dummy.matrix);
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#661010" roughness={0.7} metalness={0.1} />
    </instancedMesh>
  );
}

// Grand glowing theater screen at the far end
function CinemaScreen() {
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (screenRef.current) {
      // Gentle luminous pulsation
      const emissiveIntensity = 1.2 + Math.sin(clock.getElapsedTime() * 1.5) * 0.15;
      (screenRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = emissiveIntensity;
    }
  });

  return (
    <group position={[0, 1.8, -11]}>
      {/* Screen Frame */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[12.2, 6.2, 0.2]} />
        <meshStandardMaterial color="#050505" roughness={0.9} />
      </mesh>
      {/* Luminous Screen */}
      <mesh ref={screenRef}>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial
          color="#fff8eb"
          emissive="#ffdca8"
          emissiveIntensity={1.2}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

// Side theater walls with warm amber lighting arches
function TheaterArchitecture() {
  return (
    <group>
      {/* Floor / Red carpet central aisle */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, -4]}>
        <planeGeometry args={[20, 24]} />
        <meshStandardMaterial color="#080606" roughness={0.8} />
      </mesh>

      {/* Carpet Runner down the middle */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.49, -4]}>
        <planeGeometry args={[2.0, 24]} />
        <meshStandardMaterial color="#4a0d0d" roughness={0.9} />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-7.5, 2, -4]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[24, 10]} />
        <meshStandardMaterial color="#140f0c" roughness={0.6} />
      </mesh>

      {/* Right Wall */}
      <mesh position={[7.5, 2, -4]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[24, 10]} />
        <meshStandardMaterial color="#140f0c" roughness={0.6} />
      </mesh>

      {/* Ceiling Arch Frame */}
      <mesh position={[0, 5.5, -4]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[16, 24]} />
        <meshStandardMaterial color="#0a0706" roughness={0.9} />
      </mesh>
    </group>
  );
}

// Camera gentle drift controller
function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime() * 0.4;
    camera.position.x = Math.sin(t * 0.5) * 0.25;
    camera.position.y = 0.2 + Math.cos(t * 0.3) * 0.1;
  });
  return null;
}

export const CinemaScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.4, 4], fov: 55 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#0a0808']} />
        <fogExp2 attach="fog" args={['#0d0806', 0.08]} />

        {/* Ambient & Atmosphere lights */}
        <ambientLight intensity={0.25} color="#d4af37" />

        {/* Golden Wall Sconces (Left & Right) */}
        <pointLight position={[-6.5, 2, 0]} intensity={2.5} color="#e69c24" distance={10} />
        <pointLight position={[-6.5, 2, -5]} intensity={2.5} color="#e69c24" distance={10} />
        <pointLight position={[6.5, 2, 0]} intensity={2.5} color="#e69c24" distance={10} />
        <pointLight position={[6.5, 2, -5]} intensity={2.5} color="#e69c24" distance={10} />

        {/* Projection Spotlight pointing at screen */}
        <spotLight
          position={[0, 4, 3]}
          target-position={[0, 1.8, -11]}
          intensity={4.0}
          angle={0.6}
          penumbra={0.7}
          color="#ffeedd"
        />

        <CameraRig />
        <TheaterArchitecture />
        <CinemaSeats />
        <CinemaScreen />
      </Canvas>
    </div>
  );
};

