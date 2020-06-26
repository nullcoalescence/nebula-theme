# nebula
Hexo theme  (still in development)

## build
```
$ git clone https://github.com/bendotbike/nebula.git $working_directory$
$ cd %working_directory%
$ npm install
$ hexo generate
$ hexo serve #http://localhost:4000
```

## New pages
- Post: ```hexo new PostTitle```
- Page: ```hexo new page PageTitle```
- Download page: ```hexo new page --path path/to/downloads/my-download "Title"```. Add ```layout: download``` to front-matter
- Project page: ```hexo new page --path path/to/projects/my-project "Title"```. Add ```layout: project``` to front-matter
- Project index page (Displays all 'project' pages): ```hexo new page --path path/to/projects/ "Title"```. Add ```layout: project_index``` to front-matter
