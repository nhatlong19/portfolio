import { ShaderMaterialParameters } from 'three';

export const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uViewportWidth;
  uniform float uViewportHeight;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying float vDistToMouse;

  void main() {
    vUv = uv;
    vNormal = normal;

    // Calculate distance to mouse in world space
    vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    // Normalize mouse position to world space based on viewport
    vec2 mouseWorld = vec2(
      (uMouse.x - 0.5) * uViewportWidth,
      (uMouse.y - 0.5) * uViewportHeight
    );
    vec3 mousePos = vec3(mouseWorld.x, mouseWorld.y, 0.0);

    vDistToMouse = distance(worldPosition, mousePos);

    // Simple warp effect based on distance to mouse
    float warpFactor = max(0.0, 1.0 - vDistToMouse / (uViewportWidth * 0.1)); // Adjust 0.1 for influence radius
    warpFactor = pow(warpFactor, 2.0); // Sharpen the effect

    vec3 warpedPosition = position + normal * warpFactor * 0.5; // Adjust 0.5 for warp strength

    gl_Position = projectionMatrix * modelViewMatrix * vec4(warpedPosition, 1.0);
  }
`;

export const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uDistHighlight;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying float vDistToMouse;

  void main() {
    // Simple color based on normal and a subtle time effect
    vec3 color = uColor * (dot(vNormal, vec3(0.0, 0.0, 1.0)) * 0.5 + 0.5);

    // Highlight near mouse
    float highlight = max(0.0, 1.0 - vDistToMouse / uDistHighlight);
    color += vec3(1.0, 1.0, 1.0) * highlight * 0.3; // White highlight, adjust 0.3 for intensity

    gl_FragColor = vec4(color, 1.0);
  }
`; 