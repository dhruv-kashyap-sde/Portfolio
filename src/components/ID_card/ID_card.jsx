import React from 'react';
import { Canvas } from '@react-three/fiber';
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';

function ID_card() {
  
    return (
        <Canvas>
          <OrbitControls/>
            <mesh>
                <boxGeometry />
                <meshBasicMaterial wireframe color="white" />
            </mesh>
        </Canvas>
    );
}

export default ID_card;
