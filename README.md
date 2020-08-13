# nebula

Hexo theme made for my site, https://ben.bike.

Features:
- Customizable SCSS
- Grunt scripts for building & minifying
- Comments (https://utteranc.es/)
- Google Analytics integration
- Custom download & project layouts
- Icon font (https://icofont.com/)
- Sidebar with quick navigations for those long blog posts
- Mobile compatible

## Table of Contents
- [nebula](#nebula)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Configure](#configure)
  - [Different Pages](#different-pages)
  - [Grunt scripts](#grunt-scripts)

## Install
```
$ git clone https://github.com/bendotbike/nebula.git my_site
$ cd my_site
$ npm install grunt-cli -g
$ npm install hexo-cli -g
$ npm install
$ hexo new My-First-Post #Create a post before we build site, otherwise index will not be generated
$ grunt build #Runs 'hexo generate' & 'hexo serve'
# Site should now be served at http://localhost:4000
```

## Configure
After installing theme and dependencies, open the 'my_site' folder you installed to, and navigate to `/themes/nebula/'... Everything you want to configure is in here.

1. ```css/styles.scss```: The main stylesheet for your site is generated from here. At the top, there are a bunch of documented variables for you to configure, incuding colors and font-stacks.
2. ```_config.yml```: The config file for this Hexo theme is located here. Here you are going to want to configure the following
    - Highlight.js theme:
        - ```hljs_theme_local```: You can add your own theme to ```nebula/theme/source/css```, and set this value to ```css/theme.css```
        - ```hljs_theme_url```: Hosted CSS file for highlight.js theme
    - ```meta_theme_color```: Theme color used in ```<meta name='theme-color' value='...'>```
    - ```favicon_path```: Path to favicon. Relative to site root
    - ```google_analytics_tracking_id```: Tracking ID for Google Analytics
    - ```navbar_links```: Links and their titles to integrate into navbar.
        ```
        navbar_links:
            Title: /path
        ```
    - ```comments_enabled```: If you'd like to use comments (https://utteranc.es/), set this to true
    - ```comments_repo```: URL to Github repo for comments
    - ```comments_issue_term```: pathname, url, title, og:title (see https://utteranc.es/ & layout/_partials/comments.ejs for documentation)
    - ```comments_label```: Comment descriptors (see https://utteranc.es/ & layout/_partials/comments.ejs for documentation)
    - ```comments_theme```: Theme (see https://utteranc.es/ & layout/_partials/comments.ejs for documentation)

## Different Pages
After customizing your site, you will want to create some posts and pages.

Multiple page types are included:

1. post ```hexo new title-of-post```
2. page ```hexo new page title-of-page```
3. download: Showcases a downloadable file
 ```hexo new page --path downloads/my-file/index "Download My File"```
	After creating, open 'index.md' and add the following to the front-matter:
	- ```layout: download``` (required)
	- ```filepath: /path/to/file.exe``` (can also be a URL to an external site)
	- ```filename: file.exe``` (name of file to be downloaded)
4. project: Showcases a personal project with links to source code, etc
	```hexo new page --path projects/my-project/index "Hello World Project"```
	After creating, open 'index.md' and add the following to the front-matter:
	- ```layout: project``` (required)
	- ```title: Hello World``` (title of project)
	- ```source_url: https://github.com/bendotbike/hello-world``` (link to source code)

## Grunt scripts
After writing some content for your site, you'll want to generate the HTML. I've included some Grunt scripts to make this easier:

- ```grunt build```: Runs 'hexo generate' and 'hexo serve'. Generates site for preview at http://localhost:4000
- ```grunt production```: Generates site for production. Minifies HTML/CSS/JS. Resulting generated site is located in ```/public```
- ```grunt clean```: Runs 'hexo clean'
