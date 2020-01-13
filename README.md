# Personal website alexandreargibay.me

> A static website build with Nuxt.js (Vue.js based framework) and hosted on Github Pages


This is my personal website, made to better showcase my skills, experience, and future projects.


![demo](https://alexandreargibay.me/page_preview.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See Deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project requires [Node.js](https://nodejs.org/) and NPM. NPM is included in the newer versions of Node.js.

### Installation

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:80
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```


## Deployment

Deployment to Github Pages is really fast and easy using the [push-dir](https://github.com/L33T-KR3W/push-dir) package. 

In order to deploy we just need to have a generated static page and then run the following command.

``` bash
# deploy static project to github pages
$ npm run deploy

# shorthand to generate and deploy at once
$ npm run generate && npm run deploy

```

## Built With

* [Nuxt.js](https://nuxtjs.org/guide) - The framework used.
* [BEM](https://en.bem.info/methodology/) - The naming convention used.
* [PostCss](https://github.com/postcss/postcss) - Used to generate CSS vendor prexifes and other css related tweaks.
    * [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables) - Used to allow CSS Custom Properties(CSS native variables) to be rendered correctly on older browsers.
    * [cssnano](https://cssnano.co/) - Used to minify and reduce the CSS footprint.
* [v-scroll-lock](https://github.com/phegman/v-scroll-lock) - Small plugin used to create a robust multi-platform supported mobile menu.
* [sass-loader](https://github.com/webpack-contrib/sass-loader) - Used to enable the use of Sass/SCSS variables on media query breakpoints and other instances for easier code maintenance.

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

## Acknowledgments

* [Anna Kozyreva - Nuxt.js — gh-pages deployment](https://medium.com/@kozyreva.hanna/nuxt-js-gh-pages-deployment-73b88aa3aa65) - How to easily deploy static Nuxt.js sites on Github Pages.
* [Sebastiano Guerriero - Why we prefer CSS Custom Properties to SASS variables](https://codyhouse.co/blog/post/css-custom-properties-vs-sass-variables) - Benefits of using CSS Custom Properties.
* [@julienetienne - Pixels Are Dead: Why You Should Stop Using Pixels In CSS](https://medium.com/@julienetienne/pixels-are-dead-faa87cd8c8b9) - Benefits of using rem and em instead of px.