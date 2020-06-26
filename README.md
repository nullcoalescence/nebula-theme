# nebula
Hexo theme  (still in development)

## Build
```
$ git clone https://github.com/bendotbike/nebula-theme.git $working_directory$
$ cd %working_directory%
$ npm install
$ grunt build #http://localhost:4000
```

## Config
### _config.yml

### styles.scss

## Grunt
This theme makes use of a few grunt scripts to make site development easier
- Build (```grunt build```): generates site and serves it on a local server
- Production (```grunt production```): generates site, minifies html, css, and js. Drag ```public/``` to your production server and your site is ready

## New pages
- Post: ```hexo new PostTitle```
- Page: ```hexo new page PageTitle```
- Download page: ```hexo new page --path path/to/downloads/my-download "Title"```. Add ```layout: download``` to front-matter
- Project page: ```hexo new page --path path/to/projects/my-project "Title"```. Add ```layout: project``` to front-matter
- Project index page (Displays all 'project' pages): ```hexo new page --path path/to/projects/ "Title"```. Add ```layout: project_index``` to front-matter

## To-Do
- Finish README documentation
- README formatting
- Built-in landing-page on homepage
- Combine/refactor CSS for articles and project pages
- Page meta tags
- Tweak project pages
- Put page titles in navbar
- Post jump margin fix
- Post jump margin animation
