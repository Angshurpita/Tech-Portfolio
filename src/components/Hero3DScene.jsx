import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DScene({ isDark = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, High-Performance WebGL Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(isDark ? 0x070b14 : 0xf4f8ff, 0.014);

    const camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 27);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.3 : 1.15;
    container.appendChild(renderer.domElement);

    // 2. Main 3D World Groups
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    const mainOrbGroup = new THREE.Group();
    worldGroup.add(mainOrbGroup);

    const shardsGroup = new THREE.Group();
    worldGroup.add(shardsGroup);

    // Dynamic responsive positioning:
    // On desktop, offset to the right side so it frames the text majestically;
    // On mobile/tablet, center it.
    const updateLayout = () => {
      const isMobile = window.innerWidth < 1024;
      mainOrbGroup.position.x = isMobile ? 0 : 5.8;
      mainOrbGroup.position.y = isMobile ? -0.8 : 0.2;
      mainOrbGroup.scale.setScalar(isMobile ? 0.78 : 1.0);
      shardsGroup.position.x = isMobile ? 0 : 1.5;
    };
    updateLayout();

    // 3. High-Contrast, Vivid Color Palette
    const primaryColor = isDark ? 0x38bdf8 : 0x0052cc;
    const secondaryColor = isDark ? 0x818cf8 : 0x4f46e5;
    const accentColor = isDark ? 0x00f0ff : 0x0088ff;
    const coreColor = isDark ? 0x1e3a8a : 0x0033aa;
    const emberColor = isDark ? 0x38bdf8 : 0x0284c7;

    // ============================================================
    // A. HEAVY CENTRAL CELESTIAL CORE & GEODESIC SINGULARITY
    // ============================================================
    // Layer 1: Solid Inner Optical Crystal (Physical Transmission Core)
    const coreGeo = new THREE.IcosahedronGeometry(3.6, 2);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: coreColor,
      emissive: primaryColor,
      emissiveIntensity: isDark ? 0.8 : 0.55,
      roughness: 0.12,
      metalness: 0.45,
      transmission: 0.7,
      thickness: 3.0,
      ior: 1.55,
      transparent: true,
      opacity: isDark ? 0.95 : 0.88
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainOrbGroup.add(coreMesh);

    // Internal Core Pulsing Point Light (Illuminates the astrolabe from within)
    const corePointLight = new THREE.PointLight(primaryColor, isDark ? 5.5 : 4.5, 45);
    mainOrbGroup.add(corePointLight);

    // Layer 2: Faceted Geodesic Wireframe Shell (Deforming Organic Singularity)
    const shellGeo = new THREE.IcosahedronGeometry(5.2, 3);
    const origPositions = new Float32Array(shellGeo.attributes.position.array);

    const shellMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.85 : 0.75,
      roughness: 0.1,
      metalness: 0.8,
      emissive: primaryColor,
      emissiveIntensity: isDark ? 0.65 : 0.45
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    mainOrbGroup.add(shellMesh);

    // Layer 3: Shimmering Vertex Energy Nodes
    const pointGeo = new THREE.IcosahedronGeometry(5.25, 2);
    const pointMat = new THREE.PointsMaterial({
      color: accentColor,
      size: 0.42,
      transparent: true,
      opacity: 0.95
    });
    const vertexPoints = new THREE.Points(pointGeo, pointMat);
    mainOrbGroup.add(vertexPoints);

    // Layer 4: Middle Dodecahedron Counter-Rotating Cage
    const midShellGeo = new THREE.DodecahedronGeometry(4.4, 1);
    const midShellMat = new THREE.MeshStandardMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.6 : 0.52,
      emissive: secondaryColor,
      emissiveIntensity: 0.35
    });
    const midShellMesh = new THREE.Mesh(midShellGeo, midShellMat);
    mainOrbGroup.add(midShellMesh);

    // ============================================================
    // B. HEAVY INDUSTRIAL / CELESTIAL ASTROLABE RINGS (4 THICK GIMBALS)
    // ============================================================
    const rings = [];
    const ringConfigs = [
      { r: 7.6, tube: 0.18, color: primaryColor, rx: 0.38, ry: 0.16, speed: 0.15 },
      { r: 9.8, tube: 0.16, color: accentColor, rx: -0.42, ry: 0.28, speed: -0.19 },
      { r: 12.2, tube: 0.14, color: secondaryColor, rx: 0.65, ry: -0.32, speed: 0.13 },
      { r: 14.8, tube: 0.12, color: primaryColor, rx: -0.25, ry: 0.55, speed: -0.10 }
    ];

    ringConfigs.forEach((cfg, idx) => {
      // Solid Heavy Gimbal Track
      const ringGeo = new THREE.TorusGeometry(cfg.r, cfg.tube, 20, 160);
      const ringMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        roughness: 0.2,
        metalness: 0.8,
        emissive: cfg.color,
        emissiveIntensity: isDark ? 0.4 : 0.25,
        transparent: true,
        opacity: isDark ? 0.9 : 0.8
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = cfg.rx * Math.PI;
      ringMesh.rotation.y = cfg.ry * Math.PI;
      mainOrbGroup.add(ringMesh);

      // Glowing Neon Core Line Running through the Ring Trench
      const conduitGeo = new THREE.TorusGeometry(cfg.r, cfg.tube * 0.3, 8, 120);
      const conduitMat = new THREE.MeshBasicMaterial({
        color: accentColor,
        transparent: true,
        opacity: 0.9
      });
      const conduitMesh = new THREE.Mesh(conduitGeo, conduitMat);
      ringMesh.add(conduitMesh);

      // Dual Orbiting Satellite Stations per Ring
      const sats = [];
      for (let s = 0; s < 2; s++) {
        const satStation = new THREE.Group();
        const angle = (s * Math.PI) + (idx * 0.4);
        satStation.position.set(
          Math.cos(angle) * cfg.r,
          Math.sin(angle) * cfg.r,
          0
        );

        // Satellite Body
        const satBodyGeo = new THREE.OctahedronGeometry(0.48, 0);
        const satBodyMat = new THREE.MeshStandardMaterial({
          color: cfg.color,
          metalness: 0.85,
          roughness: 0.15,
          emissive: cfg.color,
          emissiveIntensity: 0.6
        });
        const satBody = new THREE.Mesh(satBodyGeo, satBodyMat);
        satStation.add(satBody);

        // Satellite Glowing Beacon Core
        const beaconGeo = new THREE.SphereGeometry(0.2, 12, 12);
        const beaconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const beacon = new THREE.Mesh(beaconGeo, beaconMat);
        satStation.add(beacon);

        ringMesh.add(satStation);
        sats.push(satStation);
      }

      rings.push({ mesh: ringMesh, speed: cfg.speed, sats });
    });

    // ============================================================
    // C. HEAVY FLOATING MONOLITHS & POLYHEDRAL CLUSTERS (48 SHARDS)
    // ============================================================
    const shardCount = 48;
    const shards = [];
    const shardGeos = [
      new THREE.IcosahedronGeometry(1.2, 0),
      new THREE.OctahedronGeometry(1.3, 0),
      new THREE.DodecahedronGeometry(1.1, 0),
      new THREE.TetrahedronGeometry(1.4, 0),
      new THREE.CylinderGeometry(0.7, 1.1, 2.2, 6) // Hexagonal Monolithic Pillar
    ];

    for (let i = 0; i < shardCount; i++) {
      const geo = shardGeos[i % shardGeos.length];

      // Solid Heavy Metallic Shard Body
      const shardMat = new THREE.MeshStandardMaterial({
        color: i % 3 === 0 ? primaryColor : (i % 3 === 1 ? secondaryColor : accentColor),
        roughness: 0.18,
        metalness: 0.75,
        emissive: i % 2 === 0 ? primaryColor : secondaryColor,
        emissiveIntensity: isDark ? 0.35 : 0.22,
        transparent: true,
        opacity: isDark ? 0.88 : 0.78
      });
      const shardMesh = new THREE.Mesh(geo, shardMat);

      // Wireframe Accent Cage on Shards
      const wireCageMat = new THREE.MeshBasicMaterial({
        color: accentColor,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.6 : 0.4
      });
      const wireCage = new THREE.Mesh(geo, wireCageMat);
      wireCage.scale.setScalar(1.04);
      shardMesh.add(wireCage);

      // Varied Scale: From medium fragments to massive heavy monolithic pillars
      const isMonolith = i % 7 === 0;
      const scale = isMonolith ? (1.6 + Math.random() * 0.8) : (0.55 + Math.random() * 0.7);
      shardMesh.scale.set(scale, scale, scale);

      // Deep 3D Spherical & Cylindrical Distribution
      const radius = 9 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      shardMesh.position.set(
        radius * Math.cos(phi) * Math.sin(theta),
        radius * Math.sin(phi),
        radius * Math.cos(phi) * Math.cos(theta) - 3
      );

      shardMesh.userData = {
        rotX: (Math.random() - 0.5) * 0.024,
        rotY: (Math.random() - 0.5) * 0.024,
        rotZ: (Math.random() - 0.5) * 0.024,
        floatSpeed: 0.6 + Math.random() * 1.6,
        offset: Math.random() * Math.PI * 2,
        initY: shardMesh.position.y
      };

      shardsGroup.add(shardMesh);
      shards.push(shardMesh);
    }

    // ============================================================
    // D. UNDULATING 3D TOPOLOGY HORIZON MESH (CYBERNETIC MOUNTAIN WAVES)
    // ============================================================
    const gridCols = 60;
    const gridRows = 45;
    const terrainGeo = new THREE.PlaneGeometry(130, 95, gridCols, gridRows);
    terrainGeo.rotateX(-Math.PI * 0.44);
    terrainGeo.translate(0, -13, -8);

    const terrainOrigPositions = new Float32Array(terrainGeo.attributes.position.array);

    const terrainMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.55 : 0.42,
      roughness: 0.3,
      metalness: 0.6,
      emissive: primaryColor,
      emissiveIntensity: isDark ? 0.4 : 0.25
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    worldGroup.add(terrainMesh);

    // Glowing Horizon Peaks Points
    const terrainPointsMat = new THREE.PointsMaterial({
      color: accentColor,
      size: 0.28,
      transparent: true,
      opacity: isDark ? 0.8 : 0.65
    });
    const terrainPoints = new THREE.Points(terrainGeo, terrainPointsMat);
    worldGroup.add(terrainPoints);

    // ============================================================
    // E. DENSE VOLUMETRIC ENERGY STARDUST & SPARKS (1,200 PARTICLES)
    // ============================================================
    const particleCount = 1200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cPrimary = new THREE.Color(primaryColor);
    const cAccent = new THREE.Color(accentColor);
    const cSecondary = new THREE.Color(secondaryColor);
    const cWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 85;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 55;

      const rand = Math.random();
      const col = rand > 0.6 ? cPrimary : (rand > 0.3 ? cAccent : (rand > 0.15 ? cSecondary : cWhite));
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.26,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.9 : 0.8,
      blending: THREE.NormalBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    worldGroup.add(particles);

    // ============================================================
    // F. CINEMATIC MULTI-POINT LIGHTING
    // ============================================================
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.4 : 2.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(primaryColor, isDark ? 5.5 : 4.5);
    keyLight.position.set(18, 22, 18);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(accentColor, isDark ? 4.0 : 3.5);
    fillLight.position.set(-20, -14, 15);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(secondaryColor, isDark ? 4.8 : 3.8, 65);
    rimLight.position.set(0, 15, -18);
    scene.add(rimLight);

    // 4. Interactive Mouse Tracking & Scroll Parallax
    const targetMouse = { x: 0, y: 0 };
    const curMouse = { x: 0, y: 0 };
    let targetScroll = 0;
    let curScroll = 0;

    const onPointerMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      targetMouse.x = x * 2;
      targetMouse.y = -y * 2;
    };

    const onScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetScroll = window.scrollY / maxScroll;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Window Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      updateLayout();
    };
    window.addEventListener('resize', onResize);

    // 5. Animation Loop
    let clock = new THREE.Clock();
    let animId = null;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerping
      curMouse.x += (targetMouse.x - curMouse.x) * 0.05;
      curMouse.y += (targetMouse.y - curMouse.y) * 0.05;

      // Smooth scroll lerping
      curScroll += (targetScroll - curScroll) * 0.06;

      // Camera parallax reacting to mouse and scroll
      camera.position.x = curMouse.x * 2.2;
      camera.position.y = curMouse.y * 1.8 - curScroll * 3.5;
      camera.lookAt(0, -curScroll * 2.0, 0);

      // Rotate Main Celestial Orb & Astrolabe
      mainOrbGroup.rotation.y = elapsed * 0.1 + curMouse.x * 0.4 + curScroll * 1.5;
      mainOrbGroup.rotation.x = Math.sin(elapsed * 0.06) * 0.12 + curMouse.y * 0.28 + curScroll * 0.8;

      // Pulse Central Core Singularity
      const corePulse = 1 + Math.sin(elapsed * 2.4) * 0.045;
      coreMesh.scale.set(corePulse, corePulse, corePulse);
      corePointLight.intensity = (isDark ? 5.5 : 4.5) + Math.sin(elapsed * 3.0) * 1.5;

      // Animate Thick Astrolabe Gimbal Rings & Satellites
      rings.forEach((r) => {
        r.mesh.rotation.z = elapsed * r.speed;
        r.sats.forEach((sat, sIdx) => {
          sat.rotation.x += 0.035;
          sat.rotation.y += 0.025;
        });
      });

      // Shimmer middle counter-rotating dodecahedron shell
      midShellMesh.rotation.x = -elapsed * 0.12;
      midShellMesh.rotation.y = elapsed * 0.14;

      // Deform Central Geodesic Shell Vertices (Organic breathing pulse)
      const shellPos = shellMesh.geometry.attributes.position;
      for (let i = 0; i < shellPos.count; i++) {
        const u = i * 3;
        const ox = origPositions[u];
        const oy = origPositions[u + 1];
        const oz = origPositions[u + 2];
        const dist = Math.sqrt(ox * ox + oy * oy + oz * oz);

        const wave = Math.sin(dist * 1.5 - elapsed * 2.4 + ox * 0.35) * 0.28;
        const factor = 1 + wave / dist;

        shellPos.array[u] = ox * factor;
        shellPos.array[u + 1] = oy * factor;
        shellPos.array[u + 2] = oz * factor;
      }
      shellPos.needsUpdate = true;

      // Tumbling Shards in 3D Depth
      shards.forEach((s) => {
        s.rotation.x += s.userData.rotX;
        s.rotation.y += s.userData.rotY;
        s.rotation.z += s.userData.rotZ;
        s.position.y = s.userData.initY + Math.sin(elapsed * s.userData.floatSpeed + s.userData.offset) * 0.9;
      });
      shardsGroup.rotation.y = elapsed * 0.025 + curScroll * 0.5;

      // Undulate 3D Terrain Horizon Waveform
      const tPos = terrainMesh.geometry.attributes.position;
      for (let i = 0; i < tPos.count; i++) {
        const u = i * 3;
        const ox = terrainOrigPositions[u];
        const oy = terrainOrigPositions[u + 1];
        const oz = terrainOrigPositions[u + 2];

        // Multi-frequency rolling topological mountain waves
        const wave = Math.sin(ox * 0.14 + elapsed * 1.5) * Math.cos(oy * 0.14 + elapsed * 1.0) * 3.4
                   + Math.sin((ox + oy) * 0.09 + elapsed * 2.0) * 1.4;
        tPos.array[u + 2] = oz + wave;
      }
      tPos.needsUpdate = true;

      // Cosmic Particle Drift
      particles.rotation.y = elapsed * 0.022 + curScroll * 0.3;
      particles.rotation.x = Math.sin(elapsed * 0.04) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Complete Clean-up on Unmount / Theme Switch
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (animId) cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      shellGeo.dispose();
      pointGeo.dispose();
      midShellGeo.dispose();
      terrainGeo.dispose();
      particleGeo.dispose();
      shardGeos.forEach((g) => g.dispose());
      coreMat.dispose();
      shellMat.dispose();
      pointMat.dispose();
      midShellMat.dispose();
      terrainMat.dispose();
      terrainPointsMat.dispose();
      particleMat.dispose();
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        maskImage: 'radial-gradient(ellipse 120% 105% at 50% 50%, black 85%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 120% 105% at 50% 50%, black 85%, transparent 100%)'
      }}
    />
  );
}
