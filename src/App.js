import './assets/css/style.css';

import Particles from 'react-particles-js';
import Navigation from './components/Header';

function App() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: '#950740'
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#ff0000'
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: '',
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 2,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 0.01,
                size_min: 0,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: '#C3073F',
              opacity: 1,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
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
                mode: 'grab'
              },
              onclick: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 100,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 200,
                size: 80,
                duration: 0.4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            },
            mouse: {}
          },
          retina_detect: false,
          fn: {
            interact: {},
            modes: {},
            vendors: {}
          },
          tmp: {}
        }}
      />
      <span className="hamburger">&#9776; Menu</span>
      <Navigation />
    </div>
  );
}

export default App;
