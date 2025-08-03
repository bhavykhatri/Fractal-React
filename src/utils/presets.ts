export const lSystemPresets = {
  tree: {
    axiom: "F",
    rules: { F: "F[+F]F[-F]F" },
    angle: 25,
    iterations: 4,
    name: "Simple Tree"
  },
  
  kochCurve: {
    axiom: "F",
    rules: { F: "F+F-F-F+F" },
    angle: 90,
    iterations: 4,
    name: "Koch Curve"
  },
  
  sierpinskiTriangle: {
    axiom: "F-G-G",
    rules: { 
      F: "F-G+F+G-F",
      G: "GG"
    },
    angle: 120,
    iterations: 4,
    name: "Sierpinski Triangle"
  },
  
  dragonCurve: {
    axiom: "FX",
    rules: {
      X: "X+YF+",
      Y: "-FX-Y"
    },
    angle: 90,
    iterations: 10,
    name: "Dragon Curve"
  },
  
  plant: {
    axiom: "X",
    rules: {
      X: "F+[[X]-X]-F[-FX]+X",
      F: "FF"
    },
    angle: 25,
    iterations: 5,
    name: "Plant"
  },
  
  fractalTree: {
    axiom: "F",
    rules: { F: "FF+[+F-F-F]-[-F+F+F]" },
    angle: 22.5,
    iterations: 4,
    name: "Fractal Tree"
  }
};

export const juliaSetPresets = {
  classic: { real: -0.7, imaginary: 0.27015, name: "Classic" },
  spiral: { real: -0.8, imaginary: 0.156, name: "Spiral" },
  lightning: { real: -0.4, imaginary: 0.6, name: "Lightning" },
  douady: { real: -0.123, imaginary: 0.745, name: "Douady Rabbit" },
  airplane: { real: -0.7269, imaginary: 0.1889, name: "Airplane" },
  feather: { real: 0.285, imaginary: 0.01, name: "Feather" },
  flower: { real: -0.75, imaginary: 0.11, name: "Flower" },
  dendrite: { real: 0.3, imaginary: 0.5, name: "Dendrite" }
};
