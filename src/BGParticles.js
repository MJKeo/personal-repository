import React, { Component } from 'react';
import Particles from 'react-particles-js';

const particleConfig = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#3484C2'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#F23D24'
      }
    //   },
    //   polygon: {
    //     nb_sides: 5
    //   },
    //   image: {
    //     src: '',
    //     width: 100,
    //     height: 100
    //   }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 100,
      color: '#fff',
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: true,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000
      }
    },
    array: []
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab:{
        distance: 100,
        line_linked:{
          opacity: 1
        }
      },
      bubble:{
        distance: 200,
        size: 2,
        duration: 0.4
      },
      repulse:{
        distance: 200,
        duration: 0.4
      },
      push:{
        particles_nb: 4
      },
      remove:{
        particles_nb: 2
      }
    },
    mouse:{}
  },
  "retina_detect": true
}

class BGParticles extends Component {
  render() {
    return (
        <Particles className="particle-bg" params={particleConfig} height="100vh"/>
    );
  }
}

export default BGParticles;