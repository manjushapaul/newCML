'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

interface ParticleConfig {
  speed: number // Base speed multiplier (0.5 - 2.0)
  density: number // Number of particles (50 - 300)
  color: string // Particle color (hex or rgba)
  spread: number // How far particles spread (0.3 - 1.0)
  size: number // Particle size in pixels (1 - 4)
}

type ParticleShape = 'circle' | 'triangle' | 'square'

interface Particle {
  x: number
  y: number
  vx: number // Velocity X
  vy: number // Velocity Y
  size: number
  opacity: number
  color: string // Particle color (different shade of blue)
  shape: ParticleShape // Particle shape
  baseX: number // Original X position (for drift pattern)
  baseY: number // Original Y position
  theta: number // Spherical coordinate theta (for 3D rotation)
  phi: number // Spherical coordinate phi (for 3D rotation)
  strand: number // DNA strand index (0 or 1)
  helixIndex: number // Index along helix
}

// Classy blue and purple color palette - different shades for elegant look
const bluePalette = [
  '#4A90E2', // Mid-blue (base)
  '#5B9BD5', // Soft blue
  '#3B7BC8', // Deeper blue
  '#6BA3D6', // Light blue
  '#2E5C8A', // Navy blue
  '#7BB3E8', // Sky blue
  '#4B7FA8', // Steel blue
  '#5FA8D3', // Ocean blue
  '#3A6FA5', // Royal blue
  '#6C9BCF', // Periwinkle blue
  // Brighter blue shades
  '#5DA3FF', // Bright blue
  '#6BB6FF', // Light bright blue
  '#4D9EFF', // Vivid blue
  '#7FC8FF', // Sky bright blue
  '#5CB3FF', // Electric blue
  '#8BD4FF', // Pale bright blue
  // Purple shades
  '#9B7EDE', // Soft purple
  '#A88FE8', // Light purple
  '#8B6FCF', // Medium purple
  '#B59DF0', // Bright purple
  '#9575CD', // Lavender purple
  '#A188D4', // Light lavender
  '#C4A5E8', // Pale purple
  '#B388E6', // Bright lavender
]

const defaultConfig: ParticleConfig = {
  speed: 1.5, // Increased for more movement
  density: 1500, // Tripled particle count (500 -> 1500)
  color: '#4A90E2', // Mid-blue (base, but particles will use palette)
  spread: 0.8, // Increased spread
  size: 2.6, // Increased by 30% (2 * 1.3 = 2.6)
}

interface ParticleBackgroundProps {
  config?: Partial<ParticleConfig>
  className?: string
  onMouseMove?: (x: number, y: number) => void
  onMouseLeave?: () => void
}

export function ParticleBackground({ config = {}, className = '', onMouseMove, onMouseLeave }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseVelocityRef = useRef<{ vx: number; vy: number } | null>(null)
  const prevMousePosRef = useRef<{ x: number; y: number } | null>(null)
  const lastMouseMoveTimeRef = useRef<number>(Date.now())
  const restoreTimerRef = useRef<NodeJS.Timeout | null>(null)
  const shouldReduceMotion = useReducedMotion() ?? false

  const finalConfig = { ...defaultConfig, ...config }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Generate DNA double helix structure coordinates crossing the middle of hero section
    const generateDNAHelixCoords = (width: number, height: number, numPoints: number, rotationAngle: number = 0) => {
      const coords: { x: number; y: number; z: number; strand: number }[] = []
      
      // DNA helix parameters - crossing the middle of hero section
      const centerX = width * 0.5 // Middle horizontally
      const centerY = height * 0.5 // Middle vertically
      const helixRadius = Math.min(width, height) * 0.315 // Radius of each strand from center (reduced by 30%: 0.45 -> 0.315)
      const turns = 5 // Number of helix turns
      const heightScale = Math.min(width, height) * 0.84 // Vertical extent of helix (reduced by 30%: 1.2 -> 0.84)
      const strandOffset = Math.PI // 180 degrees offset between the two strands
      
      // Split particles between two strands
      const particlesPerStrand = Math.floor(numPoints / 2)
      
      // Generate first strand
      for (let i = 0; i < particlesPerStrand; i++) {
        const t = i / particlesPerStrand // 0 to 1
        const angle = t * turns * Math.PI * 2
        const z = (t - 0.5) * heightScale
        
        // First strand position (offset by 0)
        const x3d = Math.cos(angle) * helixRadius
        const y3d = Math.sin(angle) * helixRadius
        const z3d = z
        
        // Apply 3D rotation around Y axis
        const cosRot = Math.cos(rotationAngle)
        const sinRot = Math.sin(rotationAngle)
        const xRot = x3d * cosRot - z3d * sinRot
        const zRot = x3d * sinRot + z3d * cosRot
        
        // Project to 2D with perspective
        const perspective = 1 + zRot * 0.0008
        const x = centerX + xRot * perspective
        const y = centerY + y3d * perspective
        
        coords.push({
          x: x,
          y: y,
          z: zRot,
          strand: 0,
        })
      }
      
      // Generate second strand (intertwined with first)
      for (let i = 0; i < particlesPerStrand; i++) {
        const t = i / particlesPerStrand // 0 to 1
        const angle = t * turns * Math.PI * 2 + strandOffset // Offset by 180 degrees
        const z = (t - 0.5) * heightScale
        
        // Second strand position (opposite side)
        const x3d = Math.cos(angle) * helixRadius
        const y3d = Math.sin(angle) * helixRadius
        const z3d = z
        
        // Apply 3D rotation around Y axis
        const cosRot = Math.cos(rotationAngle)
        const sinRot = Math.sin(rotationAngle)
        const xRot = x3d * cosRot - z3d * sinRot
        const zRot = x3d * sinRot + z3d * cosRot
        
        // Project to 2D with perspective
        const perspective = 1 + zRot * 0.0008
        const x = centerX + xRot * perspective
        const y = centerY + y3d * perspective
        
        coords.push({
          x: x,
          y: y,
          z: zRot,
          strand: 1,
        })
      }
      
      // Shuffle coordinates to mix the two strands naturally
      for (let i = coords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [coords[i], coords[j]] = [coords[j], coords[i]]
      }
      
      return coords
    }

    // Rotation state for 3D spiral rotation animation
    let rotationAngle = 0
    const rotationSpeed = 0.008

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const rect = canvas.getBoundingClientRect()
      
      // Generate DNA double helix structure coordinates crossing the middle
      const helixCoords = generateDNAHelixCoords(rect.width, rect.height, finalConfig.density, rotationAngle)

      for (let i = 0; i < finalConfig.density; i++) {
        // Use DNA helix coordinates
        const coord = helixCoords[i] || { x: rect.width * 0.5, y: rect.height * 0.5, z: 0, strand: 0 }
        const baseX = coord.x
        const baseY = coord.y

        // Initial position at helix coordinate
        const x = baseX
        const y = baseY

        // Store DNA helix parameters for rotation
        const helixIndex = i
        const strand = coord.strand || 0
        const turns = 5
        const t = helixIndex / finalConfig.density
        const helixAngle = t * turns * Math.PI * 2 + (strand * Math.PI) // Angle with strand offset
        const theta = helixAngle // Store angle for 3D rotation
        const phi = (t - 0.5) * Math.PI // Vertical angle for 3D

        // Initial velocity: very slow to maintain DNA helix shape
        const velocity = (0.01 + Math.random() * 0.02) * finalConfig.speed
        // Velocity tangent to helix direction
        const tangentAngle = helixAngle + Math.PI / 2
        const vx = Math.cos(tangentAngle) * velocity
        const vy = Math.sin(tangentAngle) * velocity

        // More varied particle sizes (small to large) - increased by 30%
        const sizeVariation = Math.random()
        let particleSize
        if (sizeVariation < 0.4) {
          // 40% small particles
          particleSize = finalConfig.size * (0.5 + Math.random() * 0.3)
        } else if (sizeVariation < 0.8) {
          // 40% medium particles
          particleSize = finalConfig.size * (0.8 + Math.random() * 0.4)
        } else {
          // 20% large particles
          particleSize = finalConfig.size * (1.2 + Math.random() * 0.8)
        }

        // Assign random blue shade from palette for classy look
        const particleColor = bluePalette[Math.floor(Math.random() * bluePalette.length)]
        
        // Assign random shape (circle, triangle, or square)
        const shapeRandom = Math.random()
        let particleShape: ParticleShape
        if (shapeRandom < 0.4) {
          particleShape = 'circle' // 40% circles
        } else if (shapeRandom < 0.7) {
          particleShape = 'triangle' // 30% triangles
        } else {
          particleShape = 'square' // 30% squares
        }

        particlesRef.current.push({
          x,
          y,
          vx,
          vy,
          size: particleSize,
          opacity: 1.0, // Full opacity
          color: particleColor,
          shape: particleShape,
          baseX,
          baseY,
          theta,
          phi,
          strand: strand,
          helixIndex: helixIndex,
        })
      }
    }

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      
      // Reinitialize particles on resize
      initParticles()
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Track mouse position and velocity on the parent section
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Update last mouse move time immediately
      lastMouseMoveTimeRef.current = Date.now()
      
      // Calculate cursor velocity/direction - ensure all movements are captured
      if (prevMousePosRef.current) {
        const deltaX = x - prevMousePosRef.current.x
        const deltaY = y - prevMousePosRef.current.y
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        
        // Normalize and scale velocity - lower threshold to capture all movements
        if (distance > 0.1) { // Lower threshold to capture all movements
          const speed = Math.min(distance * 0.08, 3) // Reduced speed for slower movement
          mouseVelocityRef.current = {
            vx: (deltaX / distance) * speed,
            vy: (deltaY / distance) * speed,
          }
        } else if (distance > 0) {
          // Even tiny movements should be captured
          mouseVelocityRef.current = {
            vx: deltaX * 0.25,
            vy: deltaY * 0.25,
          }
        } else {
          // Keep previous velocity for smoother transition
          if (!mouseVelocityRef.current) {
            mouseVelocityRef.current = { vx: 0, vy: 0 }
          }
        }
      } else {
        mouseVelocityRef.current = { vx: 0, vy: 0 }
      }
      
      prevMousePosRef.current = { x, y }
      onMouseMove?.(x, y)
    }

    const handleMouseLeave = () => {
      mouseVelocityRef.current = null
      prevMousePosRef.current = null
      lastMouseMoveTimeRef.current = Date.now() // Reset timer on mouse leave
      onMouseLeave?.()
    }

    // Use parent element (section) for mouse tracking to avoid blocking clicks
    const parentElement = canvas.parentElement
    if (parentElement) {
      parentElement.addEventListener('mousemove', handleMouseMove)
      parentElement.addEventListener('mouseleave', handleMouseLeave)
    }

    // Helper function to draw different shapes (reusable for both static and animated)
    const drawParticle = (particle: Particle, x: number, y: number) => {
      ctx.save()
      ctx.translate(x, y)
      
      switch (particle.shape) {
        case 'circle':
          ctx.beginPath()
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2)
          ctx.fill()
          break
          
        case 'triangle':
          ctx.beginPath()
          ctx.moveTo(0, -particle.size)
          ctx.lineTo(-particle.size * 0.866, particle.size * 0.5)
          ctx.lineTo(particle.size * 0.866, particle.size * 0.5)
          ctx.closePath()
          ctx.fill()
          break
          
        case 'square':
          ctx.beginPath()
          const squareSize = particle.size * 1.2
          ctx.rect(-squareSize / 2, -squareSize / 2, squareSize, squareSize)
          ctx.fill()
          break
      }
      
      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      
      if (shouldReduceMotion) {
        // Static cluster for reduced motion
        ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)

        particlesRef.current.forEach((particle) => {
          ctx.globalAlpha = 1.0
          ctx.fillStyle = particle.color
          drawParticle(particle, particle.baseX, particle.baseY)
        })
        ctx.globalAlpha = 1
        return
      }

      ctx.clearRect(0, 0, rect.width, rect.height)

      // Center of DNA helix structure (middle of hero section)
      const centerX = rect.width * 0.5
      const centerY = rect.height * 0.5
      const helixRadius = Math.min(rect.width, rect.height) * 0.315 // Reduced by 30% (0.45 -> 0.315)
      const heightScale = Math.min(rect.width, rect.height) * 0.84 // Reduced by 30% (1.2 -> 0.84)
      const turns = 5
      const strandOffset = Math.PI

      // Check if cursor has been inactive for 2 seconds (calculate once per frame)
      const timeSinceLastMove = Date.now() - lastMouseMoveTimeRef.current
      const shouldRestore = timeSinceLastMove > 2000 // 2 seconds delay
      
      // Apply cursor velocity damping once per frame (before particle loop)
      // Less aggressive damping to keep particles responsive to cursor movement
      if (mouseVelocityRef.current && (mouseVelocityRef.current.vx !== 0 || mouseVelocityRef.current.vy !== 0)) {
        // Only dampen if we're in restore mode, otherwise keep velocity active
        if (shouldRestore) {
          mouseVelocityRef.current.vx *= 0.95
          mouseVelocityRef.current.vy *= 0.95
        } else {
          // Very light damping during active cursor movement to maintain responsiveness
          mouseVelocityRef.current.vx *= 0.99
          mouseVelocityRef.current.vy *= 0.99
        }
        
        // Reset velocity only when it becomes extremely small
        if (Math.abs(mouseVelocityRef.current.vx) < 0.001 && Math.abs(mouseVelocityRef.current.vy) < 0.001) {
          mouseVelocityRef.current = { vx: 0, vy: 0 }
        }
      }

      // Continuous 3D rotation when no cursor action and after 2 second delay
      if (shouldRestore && (!mouseVelocityRef.current || (Math.abs(mouseVelocityRef.current.vx) < 0.01 && Math.abs(mouseVelocityRef.current.vy) < 0.01))) {
        rotationAngle += rotationSpeed
        if (rotationAngle > Math.PI * 2) {
          rotationAngle -= Math.PI * 2
        }
      }

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        
        // React to cursor movement direction - ALL particles follow cursor movement
        // Apply cursor effects immediately when cursor is moving (not in restore mode)
        if (!shouldRestore && mouseVelocityRef.current) {
          // Apply cursor velocity to ALL particles (they follow the cursor direction)
          // Reduced influence strength for slower movement
          const influenceStrength = 0.12 * finalConfig.speed
          
          // Apply velocity to ALL particles - always apply if velocity exists (even if small)
          // Remove the threshold check to ensure all movements are captured
          particle.vx += mouseVelocityRef.current.vx * influenceStrength
          particle.vy += mouseVelocityRef.current.vy * influenceStrength
          
          // Add spreading effect - particles spread out more when cursor moves
          const spreadForce = 0.15 * finalConfig.spread
          const dxFromCenter = particle.x - centerX
          const dyFromCenter = particle.y - centerY
          const distanceFromCenter = Math.sqrt(dxFromCenter * dxFromCenter + dyFromCenter * dyFromCenter)
          
          if (distanceFromCenter > 0) {
            // Push particles outward from center
            const spreadX = (dxFromCenter / distanceFromCenter) * spreadForce
            const spreadY = (dyFromCenter / distanceFromCenter) * spreadForce
            particle.vx += spreadX
            particle.vy += spreadY
          }
        } else if (shouldRestore) {
          // No cursor action: maintain DNA double helix structure with rotation
          // Calculate target position on DNA helix
          const t = particle.helixIndex / finalConfig.density
          const angle = t * turns * Math.PI * 2 + (particle.strand * strandOffset)
          const z = (t - 0.5) * heightScale
          
          // DNA helix coordinates for this strand
          const x3d = Math.cos(angle) * helixRadius
          const y3d = Math.sin(angle) * helixRadius
          const z3d = z
          
          // Apply 3D rotation around Y axis
          const cosRot = Math.cos(rotationAngle)
          const sinRot = Math.sin(rotationAngle)
          const xRot = x3d * cosRot - z3d * sinRot
          const zRot = x3d * sinRot + z3d * cosRot
          
          // Project to 2D with perspective
          const perspective = 1 + zRot * 0.0008
          const targetX = centerX + xRot * perspective
          const targetY = centerY + y3d * perspective
          
          // Stronger force to restore DNA helix structure after 2 second delay
          const dx = targetX - particle.x
          const dy = targetY - particle.y
          const force = 0.0005 * finalConfig.spread // Increased force for restoration
          particle.vx += dx * force
          particle.vy += dy * force
          
          // Additional damping to help particles settle into structure
          particle.vx *= 0.99
          particle.vy *= 0.99
        }

        // Reduced damping for more active movement
        particle.vx *= 0.997
        particle.vy *= 0.997

        // Keep particles within visible hero section boundaries
        const padding = 20 // Padding from edges
        if (particle.x < padding) {
          particle.x = padding
          particle.vx *= -0.5 // Bounce back
        } else if (particle.x > rect.width - padding) {
          particle.x = rect.width - padding
          particle.vx *= -0.5 // Bounce back
        }
        
        if (particle.y < padding) {
          particle.y = padding
          particle.vy *= -0.5 // Bounce back
        } else if (particle.y > rect.height - padding) {
          particle.y = rect.height - padding
          particle.vy *= -0.5 // Bounce back
        }

        // Draw particle with full opacity
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        drawParticle(particle, particle.x, particle.y)
      })

      ctx.globalAlpha = 1
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      const parentElement = canvas.parentElement
      if (parentElement) {
        parentElement.removeEventListener('mousemove', handleMouseMove)
        parentElement.removeEventListener('mouseleave', handleMouseLeave)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [finalConfig, shouldReduceMotion])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}

