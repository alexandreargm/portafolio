# Personal website alexandreargibay.me

> A static website build with Nuxt.js (Vue.js based framework) and hosted on Github Pages


This is my personal website, made to better showcase my skills, experience, and future projects.


![demo](https://alexandreargibay.me/page_preview.png)

## Lighthouse audit score

![demo](https://alexandreargibay.me/lighthouse_score.PNG)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See Deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project requires [Node.js](https://nodejs.org/) and NPM. NPM is included in the newer versions of Node.js.

### Installation

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:80
$ npm run dev

# generate static project
$ npm run generate

# build for production and launch server (unused)
$ npm run build
$ npm run start
```


## Deployment

### Deploying to GitHub Pages

To use this deploy method you will require to have Git installed and a working terminal that has a logged GitHub account.

Deployment to Github Pages is rather easy using the [push-dir](https://github.com/L33T-KR3W/push-dir) package. It allows to easily push the master branch into the gh-pages branch of your project.

In order to deploy we just need to have a generated static page and then run the following command.

``` bash
# deploy static project to github pages
$ npm run deploy

# shorthand to generate and deploy at once
$ npm run generate && npm run deploy

```

This is already set up, but if you are using this method on your own project you will need to add the following script to your "package.json" file. I strongly recommend you to read on how to publish content on GitHub Pages if this is your first time doing it.

```
...
"scripts": {
    ...
    "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
  },
...
```

### Custom Domain

If you are not going to use a custom domain delete the "static/CNAME" file in this project. Otherwise edit the file and change my current domain "alexandreargibay.me" to your domain name.

[More information.](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site).


## Built With

* [Nuxt.js](https://nuxtjs.org/guide) - The framework used.
* [BEM](https://en.bem.info/methodology/) - The naming convention used.
* [PostCss](https://github.com/postcss/postcss) - Used to generate CSS vendor prexifes and other css related tweaks.
    * [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables) - Used to allow CSS Custom Properties(CSS native variables) to be rendered correctly on older browsers.
    * [cssnano](https://cssnano.co/) - Used to minify and reduce the CSS footprint.
* [v-scroll-lock](https://github.com/phegman/v-scroll-lock) - Small plugin used to create a robust multi-platform supported mobile menu.
* [sass-loader](https://github.com/webpack-contrib/sass-loader) - Used to enable the use of Sass/SCSS variables on media query breakpoints and other instances for easier code maintenance.

## Acknowledgments

* [Sebastiano Guerriero - Why we prefer CSS Custom Properties to SASS variables](https://codyhouse.co/blog/post/css-custom-properties-vs-sass-variables) - Benefits of using CSS Custom Properties.
* [@julienetienne - Pixels Are Dead: Why You Should Stop Using Pixels In CSS](https://medium.com/@julienetienne/pixels-are-dead-faa87cd8c8b9) - Benefits of using rem and em instead of px.
