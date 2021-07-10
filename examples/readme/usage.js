// ES6
import { Fireworks } from 'fireworks-js'

// commonjs
const { Fireworks } = require('fireworks-js')

// use querySelector or getElementById
const container = document.querySelector('.fireworks-container')

// default config
const fireworks = new Fireworks(container, {
    // options
})

fireworks.start()

fireworks.pause()

fireworks.clear()

// stop and clear fireworks
fireworks.stop()
