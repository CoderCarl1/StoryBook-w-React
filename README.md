# React-story-book-play
This is a repo to learn and play with React Story Book

<em>Storybook is an open source tool for developing UI components in isolation</em>

[StoryBook Website](https://storybook.js.org/)  ||  [StoryBook Github](https://github.com/storybookjs/storybook)

### Contents
<ul>
<li><a href="#getting-started">Getting Started</a></li>
<li><a href="#use-Cases">Use Cases</a></li>
</ul>



<details><summary><h2 id="getting-started"> Getting-Started</h2>

Either:

<strong>1. Git clone this repo by running the below: </strong>

  <code>git clone git@github.com:CoderCarl1/react-story-book-play.git</code>

  > <em>This assumes you have added SSH to Github, otherwise use https://github.com/CoderCarl1/react-story-book-play.git</em>

  <code>yarn install</code>

  <code>npx sb init</code>

or

<code>npx create-react-app INSERTAPPNAMEHERE</code>
<code>npx sb init </code>

<em>Alternatively to everything else, or as more practice: Refer to the <a href="https://storybook.js.org/tutorials/intro-to-storybook">tutorial on the StoryBook Website</a></em>
</summary>

[Back to Contents](#Contents)
</details>


<details><summary><h2 id="use-Cases">Use-Cases </h2></summary>


---
<h3>Test the <strong>accessibility</strong> of your component  </h3>

- <em><a href="https://github.com/storybookjs/storybook/tree/next/addons/a11y" target="_blank">A11y Addon documentation</a></em>

<a href="https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/a11y/docs/screenshot.png"><img height=400 src="https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/a11y/docs/screenshot.png"></img></a>

---
<h3>Create a private <strong>Readme for each component</strong>  </h3>

- <em><a href="https://github.com/storybookjs/storybook/tree/next/addons/docs" target="_blank">StoryBook Docs documentation </a></h3>

<a href="https://raw.githubusercontent.com/storybookjs/storybook/master/addons/docs/docs/media/hero.png"><img height=400 src="https://raw.githubusercontent.com/storybookjs/storybook/master/addons/docs/docs/media/hero.png"></img></a>

---
<h3>Check the <strong>interactions between components</strong></h3>

- <em><a href="https://github.com/storybookjs/storybook/tree/next/addons/links">Linking between StoryBook Components</a></em>

```js
import { linkTo } from '@storybook/addon-links'

export default {
  title: 'Button',
};

export const first = () => (
  <button onClick={linkTo('Button', 'second')}>Go to "Second"</button>
);
export const second = () => (
  <button onClick={linkTo('Button', 'first')}>Go to "First"</button>
);
```
---
<h3><strong>Send Query Parameters</strong> to the component</h3>

<em>Our Component can render data to the screen depending on the Props we pass to it. These can come from the Params sent in the URL. </em>

### Examples

<em>A weather APP</em>
  - Render the weather for the city whose name is sent with a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">FETCH request</a> to the API

<em>A Job Search App wich displays 5 jobs at a time</em>
  - the <kbd>next</kbd> button will send a request in params to load the next 5  (0-5, 6-10, 11-15 and so on...)
  
---
<h3>Render the component <strong>in Different @Media Queries</strong></h3>

- <em><a href="https://github.com/storybookjs/storybook/tree/next/addons/viewport">StoryBook Viewports</a></em>

<a href="https://github.com/storybookjs/storybook/raw/master/addons/viewport/docs/viewport.png"><img height=400 src="https://github.com/storybookjs/storybook/raw/master/addons/viewport/docs/viewport.png"></img></a>

---
[Back to Contents](#Contents)
</details>