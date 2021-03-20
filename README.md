# React-story-book-play

This is a repo to learn and play with React Story Book

<em>Storybook is an open source tool for developing UI components in isolation</em>

[StoryBook Website](https://storybook.js.org/) || [StoryBook Github](https://github.com/storybookjs/storybook)

### Contents

<ul>
<li><a href="#getting-started">Getting Started</a></li>
<li><a href="#how-to">Rules I follow when Creating Components</a></li>
<li><a href="#component-1">Component 1</a></li>
<li><a href="#component-2">Component 2</a></li>
<li><a href="#use-Cases">Use Cases</a></li>
<li><a href="#issues">How to raise an issue</a></li>
</ul>

<details><summary><h2 id="getting-started"> Getting-Started</h2></summary>
</br>

Either:

</br>

<strong>1. Follow Along with the walkthrough</strong> & <strong>Git clone this repo</strong> by running the below:

<code>git clone git@github.com:CoderCarl1/react-story-book-play.git</code>

> <em>This assumes you have added SSH to Github, otherwise use https://github.com/CoderCarl1/react-story-book-play.git</em>

<code>yarn install</code>

<code>npx sb init</code>

<code>yarn storybook</code>

<em>As you can see inside the package.json, the script "storybook" opens up storybook on port 6006, you can access this by navigating to
<a href="http://localhost:6006/" target="_blank">localhost:6006</a></em>

</br>

or

</br>

<strong>2. StoryBook has their own walk through</strong>

<em>Refer to the <a href="https://storybook.js.org/tutorials/intro-to-storybook" target="_blank">tutorial on the StoryBook Website</a></em>

</br>

</br>

[Back to Contents](#Contents)

</details>

---

---

<details><summary><h2 id="how-to">A Couple of Rules I follow when Creating Components </h2>
</summary>
<h3>Rule1. Logic and Components are 2 separate things</h3>
  <ol>
    <li>A component should be dumb. It should accept parameters (or arguments if you prefer), and render information.</li>
    <li>All logic should be done in a separate Business Logic file.</li>
  </ol>

If we follow this rule for the most part, <em>most, if not <strong>all</strong> of the components we create will be re-usable</em>

<h3>Rule2. Do things in a React way</h3>
This simply means:
<ol>
<li>Use State to hold variables that are referenced by more than one component</li>
<li>Be aware of what your component needs when rendering
  <ul>
    <li>If you are using <em>styled components</em> and/or <em>defaultProps</em> include it in the file but not inside the component that will be rendered. </li>
    <li>We don't need to execute functions or read variables every time state changes and that component is rendered.</li>
  </ul>
</li>
</ol>

[Back to Contents](#Contents)

</details>

---

---

<details><summary><h2 id="component-1">Component 1 </h2></summary>

We have a Form wich accepts 3 inputs

-   height
-   width
-   radius

The state of the inputs is kept in `App.js` so that we can pass it to other Components as needed.

<em>(If you are unsure about how this works, read more on [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html))</em>

[Back to Contents](#Contents)

</details>

---

---

<details><summary><h2 id="component-2">Component 2 </h2></summary>

A Div that accepts the state from App.js to decide its height, width, and border-radius.

[Back to Contents](#Contents)

</details>

---

---

<details><summary><h2 id="use-Cases">Common Use-Cases </h2></summary>

---

<h3>Test the <strong>accessibility</strong> of your component  </h3>

-   <em><a href="https://github.com/storybookjs/storybook/tree/next/addons/a11y" target="_blank">A11y Addon documentation</a></em>

<a href="https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/a11y/docs/screenshot.png" target="_blank"><img height=400 src="https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/a11y/docs/screenshot.png"></img></a>

`yarn add -D @storybook/addon-a11y`

Add this line to your main.js file (create this file inside your storybook config directory if needed).

```js module.exports = {
  addons: ['@storybook/addon-a11y'],
};
```

---

<h3>Create a private <strong>Readme for each component</strong>  </h3>

-   <em><a href="https://github.com/storybookjs/storybook/tree/next/addons/docs" target="_blank">StoryBook Docs documentation </a></em>

<a href="https://raw.githubusercontent.com/storybookjs/storybook/master/addons/docs/docs/media/hero.png" target="_blank"><img height=400 src="https://raw.githubusercontent.com/storybookjs/storybook/master/addons/docs/docs/media/hero.png"></img></a>

Each of your components' stories will get their own docsPage

> StoryDocs are part of the essential addons and so is installed in all new Storybooks by default

<em>Further information on customizing these pages can be found [here](https://github.com/storybookjs/storybook/tree/next/addons/docs#mdx)</em>

---

<h3>Check the <strong>interactions between components</strong></h3>

-   <em><a href="https://github.com/storybookjs/storybook/tree/next/addons/links">Linking between StoryBook Components</a></em>

```js
import { linkTo } from '@storybook/addon-links';

export default {
    title: 'Button'
};

export const first = () => <button onClick={linkTo('Button', 'second')}>Go to "Second"</button>;
export const second = () => <button onClick={linkTo('Button', 'first')}>Go to "First"</button>;
```

`yarn add -D @storybook/addon-links`

To use `linkTo` as shown above, make sure you add this to your `.storybook/main.js`

```js
module.exports = {
    addons: ['@storybook/addon-links']
};
```

---

<h3><strong>Send Query Parameters</strong> to the component</h3>

<em>Our Component can render data to the screen depending on the Props we pass to it. These can come from the Params sent in the URL. </em>

### Examples

<em>A weather APP</em>

-   Render the weather for the city whose name is sent with a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel=”noreferrer”>FETCH request</a> to the
    API

<em>A Job Search App wich displays 5 jobs at a time</em>

-   the <kbd>next</kbd> button will send a request in params to load the next 5 (0-5, 6-10, 11-15 and so on...)

`yarn add -D @storybook/addon-queryparams`

Add the below to your `storybook/main.js`

<em>There are a couple of ways to mock these, refer [here for examples](https://github.com/storybookjs/storybook/tree/next/addons/queryparams)</em>

```js
module.exports = {
    addons: ['@storybook/addon-queryparams']
};
```

---

<h3>Render the component <strong>in Different @Media Queries</strong></h3>

-   <em><a href="https://github.com/storybookjs/storybook/tree/next/addons/viewport" target="_blank">StoryBook Viewports</a></em>

<a href="https://github.com/storybookjs/storybook/raw/master/addons/viewport/docs/viewport.png" target="_blank"><img height=400 src="https://github.com/storybookjs/storybook/raw/master/addons/viewport/docs/viewport.png"></img></a>

> The Viewport addon is part of the essential addons and so is installed in all new Storybooks by default

---

[Back to Contents](#Contents)

</details>

---

---

<strong><h3>Credits</h3></strong>

If you have any questions, feel free to reach out to me through: [https://twitter.com/coder_carl](https://twitter.com/coder_carl)

<span id="issues">Any Issues</span>: Please raise the issue on Github, through the issues tab.

[Back to Contents](#Contents)
