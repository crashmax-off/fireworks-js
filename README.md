<br/>
<p align="center">
    <img src="test/images/fireworks_emoji.png" />
</p>

<p align="center"><b>Fireworks.js</b></p>

<p align="center">
    A simple fireworks library!
</p>
<br/>

<p align="center">
    <a href="https://travis-ci.com/github/crashmax-dev/fireworks-js" target="_blank"><img alt="Travis (.org)" src="https://travis-ci.com/crashmax-dev/fireworks-js.svg?branch=master"></a>
    <a href="https://www.npmjs.com/package/fireworks-js" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/fireworks-js"></a>
    <a href="https://bundlephobia.com/package/fireworks-js@latest"><img alt="npm bundle size" src="https://badgen.net/bundlephobia/min/fireworks-js"></a>
</p>

## Demo

> https://crashmax-dev.github.io/fireworks-js/

## Installation

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./examples/readme/installation.sh) -->
<!-- The below code snippet is automatically added from ./examples/readme/installation.sh -->
```sh
# with npm:
npm install fireworks-js

# or yarn:
yarn add fireworks-js
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## Usage

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./examples/readme/usage.js) -->
<!-- The below code snippet is automatically added from ./examples/readme/usage.js -->
```js
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
```
<!-- MARKDOWN-AUTO-DOCS:END -->

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./examples/readme/usage.html) -->
<!-- The below code snippet is automatically added from ./examples/readme/usage.html -->
```html
<!-- including in your html page -->
<script src="https://unpkg.com/fireworks-js@latest/dist/fireworks.js"></script>
```
<!-- MARKDOWN-AUTO-DOCS:END -->

For React.js (see detailed usage [here](test/react.tsx))

<!-- MARKDOWN-AUTO-DOCS:START (CODE:src=./examples/readme/usage-react.js) -->
<!-- The below code snippet is automatically added from ./examples/readme/usage-react.js -->
```js
import { Fireworks } from 'fireworks-js/dist/react'

export const App = () => {
  const options = {
    speed: 3
  }

  const style = {
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
    background: '#000'
  }

  return <Fireworks options={options} style={style} />
}
```
<!-- MARKDOWN-AUTO-DOCS:END -->

## Options

<!-- MARKDOWN-AUTO-DOCS:START (JSON_TO_HTML_TABLE:src=./examples/readme/options.json) -->
<table class="JSON-TO-HTML-TABLE"><thead><tr><th class="key-th">key</th><th class="default-values-th">default values</th></tr></thead><tbody ><tr ><td class="key-td td_text"><code>speed</code></td><td class="default-values-td td_text"><code>2</code></td></tr>
<tr ><td class="key-td td_text"><code>acceleration</code></td><td class="default-values-td td_text"><code>1.05</code></td></tr>
<tr ><td class="key-td td_text"><code>friction</code></td><td class="default-values-td td_text"><code>0.95</code></td></tr>
<tr ><td class="key-td td_text"><code>gravity</code></td><td class="default-values-td td_text"><code>1.5</code></td></tr>
<tr ><td class="key-td td_text"><code>particles</code></td><td class="default-values-td td_text"><code>50</code></td></tr>
<tr ><td class="key-td td_text"><code>trace</code></td><td class="default-values-td td_text"><code>3</code></td></tr>
<tr ><td class="key-td td_text"><code>explosion</code></td><td class="default-values-td td_text"><code>5</code></td></tr>
<tr ><td class="key-td td_text"><code>autoresize</code></td><td class="default-values-td td_text"><code>true</code></td></tr>
<tr ><td class="key-td td_text"><code>hue</code></td><td class="default-values-td td_text"><code>{ min: 0, max: 360 }</code></td></tr>
<tr ><td class="key-td td_text"><code>delay</code></td><td class="default-values-td td_text"><code>{ min: 15, max: 30 }</code></td></tr>
<tr ><td class="key-td td_text"><code>boundaries</code></td><td class="default-values-td td_text"><code>{ top: 50, bottom: container.clientHeight, left: 50, right: container.clientWidth }</code></td></tr>
<tr ><td class="key-td td_text"><code>sound</code></td><td class="default-values-td td_text"><code>{ enable: false }</code></td></tr>
<tr ><td class="key-td td_text"><code>sound.files</code></td><td class="default-values-td td_text"><code>[ '*.mp3', '*.ogg', '*.wav' ]</code></td></tr>
<tr ><td class="key-td td_text"><code>sound.volume</code></td><td class="default-values-td td_text"><code>{ min: 1, max: 2 }</code></td></tr>
<tr ><td class="key-td td_text"><code>mouse</code></td><td class="default-values-td td_text"><code>{ click: false, move: false, max: 3 }</code></td></tr>
<tr ><td class="key-td td_text"><code>brightness</code></td><td class="default-values-td td_text"><code> { min: 50, max: 80 }</code></td></tr>
<tr ><td class="key-td td_text"><code>brightness.decay</code></td><td class="default-values-td td_text"><code>{ min: 0.015, max: 0.03 }</code></td></tr></tbody></table>
<!-- MARKDOWN-AUTO-DOCS:END -->