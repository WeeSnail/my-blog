import React from 'react';
import styled from 'styled-components';
import {useEffect, useRef} from 'react';

const Canv = styled.canvas`
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  `;

const Canvas = () => {

  const canvasRef = useRef(null);

  useEffect(() => {

    var canvas = canvasRef.current;
    var ctx = canvas.getContext('2d');
    var _WIDTH = document.documentElement.clientWidth;
    var _HEIGHT = document.documentElement.clientHeight;
    var initRoundPopulation = 80;
    var round = [];
    canvas.width = _WIDTH;
    canvas.height = _HEIGHT;

    class Dot {
      constructor (index, x, y) {
        let alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
        this.index = index;
        this.x = x;
        this.y = y;
        this.r = Math.random() * 2 + 1;
        this.color = "rgba(0,0,0," + alpha + ")";
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.r * 2;
        ctx.beginPath();
        // ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.rect(this.x, this.y, this.r * 2, this.r * 2);
        ctx.closePath();
        ctx.fill();
      }
      move() {
        this.y -= 0.15;
        if (this.y <= -10) {
          this.y = _HEIGHT + 10;
        }
        this.draw();
      }
    };

    function animate() {
      ctx.clearRect(0, 0, _WIDTH, _HEIGHT);
      for (var i in round) {
        round[i].move();
      }
      requestAnimationFrame(animate);
    };

    function init() {
      for (var i = 0; i < initRoundPopulation; i++) {
        round[i] = new Dot(i, Math.random() * _WIDTH, Math.random() * _HEIGHT);
        round[i].draw();
      }
      animate();
    };

    init();

  }, []);

  return (
      <Canv id="canvas" ref={canvasRef}></Canv>
  )
};

export default Canvas;
