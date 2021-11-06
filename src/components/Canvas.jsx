import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.div`
border: 5px solid red;
position: fixed;
top: 0;
z-index: -1;
width: 100%;
height: 100%;
`;


const Canvas = () => {

  // class Dot {
  //   constructor (index, x, y) {
  //     let alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
  //     this.index = index;
  //     this.x = x;
  //     this.y = y;
  //     this.r = Math.random() * 2 + 1;
  //     this.color = "rgba(173, 22, 22, " + alpha + ")";
  //   }
  //   draw(ctx) {
  //     ctx.fillStyle = this.color;
  //     ctx.shadowBlur = this.r * 2;
  //     ctx.beginPath();
  //     ctx.arc(this.x, this.y, this.r, 0, 2 * Math.Pi, false);
  //     ctx.closePath();
  //     ctx.fill()
  //   }
  //   // move(ctx, height) {
  //   //   this.y -= 0.15;
  //   //   if (this.y <= -10) {
  //   //     this.y = height + 10;
  //   //   }
  //   //   this.draw(ctx);
  //   // }
  // };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    // const WIDTH = document.documentElement.clientWidth;
    // const HEIGHT = document.documentElement.clientHeight;
    // const dotsNumb = 80;
    // let round = [];

    /* testing */
    context.fillStyle = '#000000';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)




    // ctx.fillStyle = '#FF0000';
    // ctx.beginPath();
    // ctx.arc(100, 100, 50, 0, 10, false);
    // ctx.closePath();
    // ctx.fill();
    // console.log(ctx, ctx.fillStyle)

    // canvas.current.width = WIDTH;
    // canvas.current.height = HEIGHT;

    // const animate = () => {
    //   ctx.clearRect(0, 0, WIDTH, HEIGHT);
    //   for (let i in round) {
    //     round[i].move(ctx, HEIGHT);
    //   }
    //   requestAnimationFrame(animate);
    // }

    // const init = () => {
    //   console.log('Running init')
    //   for (let i = 0; i < 5; i++) {
    //     round[i] = new Dot(i, Math.random() * WIDTH, Math.random() * HEIGHT);
    //     round[i].draw(ctx);
    //   }
    //   // animate();
    // }

    // init();
  }, []);

  return (
    <CanvasWrapper className="bg_main">
      <canvas id="canvas" ref={canvasRef}></canvas>
    </CanvasWrapper>
  )
}

export default Canvas;
