import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

class Star {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rChange = 0.015;
    this.color = color;
  }

  render = (ctx) => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
    ctx.shadowBlur = 8; 
    ctx.shadowColor = "white";
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  update = () => {
    if (this.r > 2 || this.r < .8){
      this.rChange = - this.rChange;
    }
    this.r += this.rChange;
  }
}

class BackgroundStars {
  constructor(density = 2000) {
    if(typeof window !== 'object') return;
    this.canvas = document.getElementById("canvas");
    if (this.canvas) {
      this.context = this.canvas.getContext("2d");

      this.width = this.canvas.width = document.body.offsetWidth;
      this.height = this.canvas.height = document.body.offsetHeight;

      const starCount = Math.floor((this.width * this.height) / density)
      this.arrStars = [];
      for(let i = 0; i < starCount; i++){
        const randX = Math.floor((Math.random()*this.width)+1);
        const randY = Math.floor((Math.random()*this.height)+1);
        const randR = Math.random() * 1.7 + .5;
        
        const star = new Star(randX, randY, randR, BackgroundStars.randomColor());
        this.arrStars.push(star);
      }
    }
  }

  static randomColor = () => {
    const arrColors = ["ffffff", "ffecd3" , "bfcfff"];
    return "#"+arrColors[Math.floor((Math.random()*3))];
  }

  update = () => {
    for(let i = 0; i < this.arrStars.length; i ++){
      this.arrStars[i].update();
    }
  }

  animate = () => {
    if (typeof window === 'object' && this.context && this.width && this.height) {
        this.update();
        this.context.clearRect(0,0,this.width,this.height);
        for(let i = 0; i < this.arrStars.length; i++){
        this.arrStars[i].render(this.context);
        }
        requestAnimationFrame(this.animate);
    }
  }
}

export default function NotFound() {
  const [width, setWidth] = useState(null);

  const handleResize = () => {
    const starts = new BackgroundStars();
    starts.animate();
    setWidth(window.innerWidth);
  }

  useEffect(()=> {
    if (width === null) {
      handleResize();
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width])

  return (
    <Layout title='404' description="WELLDONE Studio Docs">
      <main>
        <canvas id="canvas" style={{ height: "calc(100vh - 68px)", width: "100%" }}/>
        <div
          style={{
            position: 'absolute',
            top: '0px',
            height: '100%',
            width: '100%',
            background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%, rgba(0,0,0,0) 100%)",
        }} />
        <div
          style={{
            position: 'absolute',
            top: '0px',
            height: '100%',
            width: '100%',
            backgroundImage: `url('img/404.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
        }}>
          <div
            style={{
              height: '100%',
              display: "flex",
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: 'row',
                }}
              >
                <div style={{ padding: "8px" }}>
                  <h3 style={{ margin: "auto", fontSize: "32px" }}>404</h3>
                </div>
                <div style={{ margin: "auto", border: 'none', borderLeft: "1px solid #8F98AE", height: "36px" }}/>
                <div style={{ padding: "8px", verticalAlign: "middle" }}>
                  <h3 style={{ margin: "auto", fontSize: "32px" }}>Page not found</h3>
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: "14px" }}>
                Sorry, we couldn’t find the page you’re looking for.
              </div>
              <div style={{ fontSize: "14px" }}>
                Be sure to check your URL please or let us help you.
              </div>
            </div>
            <div style={{ marginTop: "12px" }}>
              <Link className="button button--primary" to="/" style={{ color: "#ffffff" }}>
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
