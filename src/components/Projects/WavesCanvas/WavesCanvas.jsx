import React, { useCallback, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import * as dat from "dat.gui";
import SimplexNoise from "simplex-noise";

import "./WavesCanvas.scss";

const INITIAL_FRENQUENCY = 20;

const WavesCanvas = () => {
  const canvasRef = useRef(null);
  const [init, setInit] = useState({});
  const [ctx, setCtx] = useState();

  const simplex = new SimplexNoise();

  const initialize = (frequency) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cx = w / 2;
    const cy = h / 2;
    const y = h * 0.65;
    const length = w + 0;
    canvasRef.current.height = h;
    canvasRef.current.width = w;

    const data = {
      w,
      h,
      cx,
      cy,
      count: Math.floor(w / frequency),
      xoff: 0,
      xinc: 0.05,
      yoff: 0,
      yinc: 0.005, // Speed
      goff: 0,
      ginc: 0,
      y,
      length,
      amp: 20, // Wave amplitude
    };

    setInit(data);
  };

  const wave = useCallback(
    (color, amp, height, comp) => {
      ctx.beginPath();

      const sway = simplex.noise2D(init.goff, 0) * amp;

      for (let i = 0; i <= init.count; i++) {
        init.xoff += init.xinc;

        const x = init.cx - init.length / 2 + (init.length / init.count) * i,
          y = height + simplex.noise2D(init.xoff, init.yoff) * amp + sway;

        ctx[i === 0 ? "moveTo" : "lineTo"](x, y);
      }

      ctx.lineTo(init.w, init.h);
      ctx.lineTo(0, init.h);
      ctx.closePath();
      ctx.fillStyle = color;

      if (comp) {
        ctx.globalCompositeOperation = comp;
      }

      ctx.fill();
    },
    [
      init.w,
      init.h,
      init.xoff,
      ctx,
      init.goff,
      init.yoff,
      init.length,
      init.count,
      init.cx,
      init.xinc,
      simplex,
    ]
  );

  const loop = useCallback(() => {
    requestAnimationFrame(loop);

    ctx.clearRect(0, 0, init.w, init.h);
    init.xoff = 0;

    const my_gradient = ctx.createLinearGradient(0, init.h, init.w, 0);
    my_gradient.addColorStop(0, "#e8ecff");
    my_gradient.addColorStop(1, "#d7e0ff");

    wave("#ed77b2", 20, init.h * 0.5, "screen"); // red
    wave("#bcccff", 25, init.h * 0.5, "screen"); // blue
    wave("#cd9fff", 25, init.h * 0.5, "screen"); // purple

    init.yoff += init.yinc;
    init.goff += init.ginc;
  }, [
    init.w,
    init.h,
    init.xoff,
    ctx,
    init.yinc,
    init.ginc,
    wave,
    init.goff,
    init.yoff,
  ]);

  useEffect(() => {
    const gui = new dat.GUI(),
      guiSet = {
        frequency: INITIAL_FRENQUENCY,
        reset: () => {
          initialize(guiSet.frequency);
        },
      };

    gui.add(guiSet, "frequency").min(5).max(100);
    gui.add(guiSet, "reset");
    //dat.GUI.toggleHide();

    window.addEventListener("resize", initialize);
    return () => {
      window.removeEventListener("resize", initialize);
      gui.destroy();
    };
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const c = canvasRef.current;
      const context = c.getContext("2d");
      setCtx(context);
      initialize(INITIAL_FRENQUENCY);
    }
  }, [canvasRef]);

  useEffect(() => {
    if (ctx) {
      loop();
    }
  }, [ctx, loop]);

  return (
    <div id="Waves-Canvas">
      <div className="waves-explanations">
        Change the frequency and hit the reset button.
      </div>
      <Link to="/projects" className="button-goback">
        GO BACK
      </Link>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default WavesCanvas;
