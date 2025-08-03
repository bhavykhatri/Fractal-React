import React, { useRef, useEffect } from 'react';
import { LSystemProps, Point } from '../types';
import { degreesToRadians } from '../utils';

interface TurtleState {
  position: Point;
  angle: number;
}

export const LSystem: React.FC<LSystemProps> = ({
  width,
  height,
  axiom,
  rules,
  iterations = 4,
  angle = 90,
  strokeColor = '#228B22',
  strokeWidth = 1,
  startX = 0.5,
  startY = 0.9,
  startAngle = 270,
  stepSize = 10,
  className,
  style
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;

    // Generate L-System string
    let currentString = axiom;
    for (let i = 0; i < iterations; i++) {
      currentString = applyRules(currentString, rules);
    }

    // Draw the L-System
    drawLSystem(ctx, currentString, {
      x: width * startX,
      y: height * startY
    }, startAngle, stepSize, angle);

  }, [width, height, axiom, rules, iterations, angle, strokeColor, strokeWidth, startX, startY, startAngle, stepSize]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={style}
    />
  );
};

function applyRules(input: string, rules: Record<string, string>): string {
  let result = '';
  for (const char of input) {
    result += rules[char] || char;
  }
  return result;
}

function drawLSystem(
  ctx: CanvasRenderingContext2D,
  commands: string,
  startPos: Point,
  startAngle: number,
  stepSize: number,
  turnAngle: number
) {
  const stack: TurtleState[] = [];
  let currentPos = { ...startPos };
  let currentAngle = startAngle;

  ctx.beginPath();
  ctx.moveTo(currentPos.x, currentPos.y);

  for (const command of commands) {
    switch (command) {
      case 'F':
      case 'G':
        // Move forward and draw
        const newX = currentPos.x + stepSize * Math.cos(degreesToRadians(currentAngle));
        const newY = currentPos.y + stepSize * Math.sin(degreesToRadians(currentAngle));
        ctx.lineTo(newX, newY);
        currentPos.x = newX;
        currentPos.y = newY;
        break;
      
      case 'f':
        // Move forward without drawing
        currentPos.x += stepSize * Math.cos(degreesToRadians(currentAngle));
        currentPos.y += stepSize * Math.sin(degreesToRadians(currentAngle));
        ctx.moveTo(currentPos.x, currentPos.y);
        break;
      
      case '+':
        // Turn left
        currentAngle += turnAngle;
        break;
      
      case '-':
        // Turn right
        currentAngle -= turnAngle;
        break;
      
      case '[':
        // Push state to stack
        stack.push({
          position: { ...currentPos },
          angle: currentAngle
        });
        break;
      
      case ']':
        // Pop state from stack
        const state = stack.pop();
        if (state) {
          currentPos = { ...state.position };
          currentAngle = state.angle;
          ctx.moveTo(currentPos.x, currentPos.y);
        }
        break;
    }
  }

  ctx.stroke();
}
