listunner-landing
=================

The website is powered by the static site generator [Jekyll](http://jekyllrb.com/) ([Docs](http://jekyllrb.com/docs/home), [GitHub Pages Docs](http://jekyllrb.com/docs/github-pages/)), is hosted on [GitHub Pages](http://pages.github.com/) ([Docs](https://help.github.com/categories/20/articles)) and uses [Grunt](http://gruntjs.com/) ([Docs](http://gruntjs.com/getting-started)) to make it awesome.

---

## Settings

The settings for this project are specified in **```package.json```**.

*Make sure to update these settings before releasing the website.* 

Whenever you update these settings make sure they are converted to ```_config.yml```, otherwise Jekyll will complain. If ```grunt``` is already running don't worry about it, otherwise run ```grunt config``` before pushing to the repo. 

**version**

The current release version of the website.

It is used on the filenames of generated minified files to break the cache (eg ```listunner-landing-***0.1.0***.js```) so make sure to update the version number when releasing a new version of the website.

```
version: "0.1.0"
```

**name**

The name of the project (string, no whitespace).

It is used on the filenames of generated minified files to break the cache (eg ```**listunner-landing**-0.1.0.js```).

It can also be used in HTML templates for class names etc (eg. ```<body class="{{ site.name }}--{{ page.name }}">```) .

```
name: "listrunner-landing"
```

**title**

The title of the project (string).

It is used in HTML templates (eg. ```_includes/head.html```) to specify the ```<title>``` and other meta properties.

```
title: "ListRunner"
```

**tagline**

A short description for the project (string).

It is used in HTML templates (eg. ```_includes/head.html```) to specify meta properties.

```
tagline: "Faster rounds. Seamless handovers."
```

**description**

A longer description for the project (string).

It is used in HTML templates (eg. ```_includes/head.html```) to specify meta properties.

```
description: "Your patients and your team are everywhere. With Listrunner, put everything that is happening on the ward in one place."
```

**keywords**

Keywords describing the project (string).

It is used in HTML templates (eg. ```_includes/head.html```) to specify meta properties.

```
keywords: "Faster rounds. Seamless handovers."
```

**baseurl**

The root directory of the website (string, no trailing slash). On production this should be your domain name (eg. **listrunnerapp.com**)

```
baseurl: "/listrunner-landing"
```

**image**

The filename of the image poster for the website (string).

It is used in HTML templates (eg. ```_includes/head.html```) to specify the ```og:image``` meta property.

```
image: "logo.png"
```

**email_contact**

The default contact e-mail address used in HTML templates (eg. ```<a href="mailto:{{ site.email_contact }}">Contact us</a>```).

```
email_contact: "contact@listrunnerapp.com"
```

**GAU**

Your Google Analytics account number (string). Used in ```_includes/analytics.html```.

```
GAU: ""
```

---

## How to

**Use a Custom Domain**

* Specify the ```baseurl``` property to be the domain name of your choice.
* Specify the domain in the ```CNAME``` file.

Update your DNS records following the instructions [provided by Github](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).


**Install Jekyll**

You need to do this in order to run this project locally.

```
gem install jekyll
```

**Install Grunt**

You need to do this in order to run this project locally.

```
npm install -g grunt-cli
```

**Install project dependencies** (from ```package.json```)

You need to do this in order to run this project locally.

```
cd listunner-landing
npm install
```

---

## Workflow

Once you have everything installed all you need to do is run the default grunt task from the command line.

```
cd listunner-landing/
grunt
```

The **default task** will:

* concatenate and minify CSS and JavaScript files
* optimize images
* create a _config.yml (using settings from package.json)
* build the site with Jekyll
* watch for changes and rebuild/restart as necessary
* serve the site (from http://127.0.0.1:4000)

**Other tasks**

```grunt static``` - concatenates and minifies CSS and JavaScript files, and optimizes images.

```grunt config``` - generates a ```_config.yml``` file using settings from ```package.json```.
