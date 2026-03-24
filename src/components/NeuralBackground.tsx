import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Float } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

const WireGrid = () => {
  const { mouse, viewport } = useThree();
  const linesRef = useRef<THREE.Group>(null);
  const pulsesRef = useRef<THREE.Group>(null);

  const gridSize = 40;
  const gridDivisions = 20;
  const step = gridSize / gridDivisions;

  // Create grid lines
  const lines = useMemo(() => {
    const tempLines: THREE.Vector3[][] = [];
    // Horizontal lines
    for (let i = -gridDivisions / 2; i <= gridDivisions / 2; i++) {
      tempLines.push([
        new THREE.Vector3(-gridSize / 2, i * step, 0),
        new THREE.Vector3(gridSize / 2, i * step, 0),
      ]);
    }
    // Vertical lines
    for (let i = -gridDivisions / 2; i <= gridDivisions / 2; i++) {
      tempLines.push([
        new THREE.Vector3(i * step, -gridSize / 2, 0),
        new THREE.Vector3(i * step, gridSize / 2, 0),
      ]);
    }
    return tempLines;
  }, []);

  // Create electricity pulses
  const pulses = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * gridSize,
        (Math.random() - 0.5) * gridSize,
        0
      ),
      direction: Math.random() > 0.5 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0),
      speed: 0.1 + Math.random() * 0.2,
      length: 2 + Math.random() * 5,
    }));
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      // Subtle rotation based on mouse
      linesRef.current.rotation.x = THREE.MathUtils.lerp(linesRef.current.rotation.x, mouse.y * 0.1, 0.05);
      linesRef.current.rotation.y = THREE.MathUtils.lerp(linesRef.current.rotation.y, mouse.x * 0.1, 0.05);
    }

    if (pulsesRef.current) {
      pulsesRef.current.children.forEach((pulse, i) => {
        const p = pulses[i];
        pulse.position.addScaledVector(p.direction, p.speed);
        
        // Wrap around
        if (pulse.position.x > gridSize / 2) pulse.position.x = -gridSize / 2;
        if (pulse.position.x < -gridSize / 2) pulse.position.x = gridSize / 2;
        if (pulse.position.y > gridSize / 2) pulse.position.y = -gridSize / 2;
        if (pulse.position.y < -gridSize / 2) pulse.position.y = gridSize / 2;
      });
    }
  });

  return (
    <group>
      <group ref={linesRef}>
        {lines.map((points, i) => (
          <line key={i}>
            <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints(points)} />
            <lineBasicMaterial attach="material" color="#0A3D91" transparent opacity={0.15} />
          </line>
        ))}
      </group>

      <group ref={pulsesRef}>
        {pulses.map((p, i) => (
          <mesh key={i} position={p.position}>
            <boxGeometry args={p.direction.x > 0 ? [p.length, 0.05, 0.05] : [0.05, p.length, 0.05]} />
            <meshStandardMaterial 
              color="#00D2FF" 
              emissive="#00D2FF" 
              emissiveIntensity={10} 
              transparent 
              opacity={0.8} 
            />
          </mesh>
        ))}
      </group>

      {/* Mouse Glow */}
      <mesh position={[mouse.x * viewport.width / 2, mouse.y * viewport.height / 2, 1]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial 
          color="#00D2FF" 
          emissive="#00D2FF" 
          emissiveIntensity={5} 
          transparent 
          opacity={0.1} 
        />
      </mesh>
    </group>
  );
};

export const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <WireGrid />
        
        <fog attach="fog" args={["#000000", 5, 25]} />
      </Canvas>
      
      {/* Overlay Gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
      <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 to-transparent opacity-50" />
    </div>
  );
};
