### 1) What is angular js
Angular 2 is an open source JavaScript framework to build web applications in HTML and JavaScript

### 2) What is difference between angularjs and Angular2
https://www.talkingdotnet.com/difference-between-angular-1-x-and-angular-2/

https://www.guru99.com/angularjs-1-vs-2-vs-4-vs-5-difference.html

### 3) How to install specific version of the angular
```
npm uninstall -g @angular/cli
npm cache clean
npm cache verify
npm -g install @angular/cli@1.6
after install check
npm list -g --depth 0
```

### 4) How to check angular cli version
```
ng -v 
```
### 5) How to change existing angular port
```
ng serve --port 4401 
```

### 6) What is difference between ng init or ng new 
```
* ng init:
    ** create a new application in the current directory
    Note : the ng init command is removed from the CLI 
    you can use the command 
    ng new current-directory --directory=./ --skip-install
    This uses three arguments as:
        1. current-directory whatever your project name will be or current location where terminal is open.
        2. --directory=./ this what does the magic, it instructs angular-cli to use existing folder as project root.
        3. --skip-install this one is totally optional, only prevents installation of all npm dependencies upfront.
    https://stackoverflow.com/questions/41190144/angular-cli-for-existing-github-project
* ng new:
    ** create a new directory and run ng init inside the new directory

* So ng new is similar to ng init, except that it also creates a directory for you.
```

### 7) Generation details like components CLI COMMANDs
https://angular.io/cli/generate


### 8) File Staracture of Angular
https://angular.io/guide/file-structure


### 9) Understanding the Angular Boot Process(Execution Flow)
https://medium.com/@coderonfleek/understanding-the-angular-boot-process-9a338b06248c


### 3) How to share data from one componet to another componet

https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/

### 10) what is JIT compiler

### 11) what is app-root
app-root is the application shell. This is the first component to load, and the parent of all other components. You can think of it as the base page.

### 12) Angular life-cycle hooks
https://angular.io/guide/lifecycle-hooks

### 13) MAC in angular world
https://scotch.io/tutorials/mvc-in-an-angular-world

### 14) Angular Architecture
https://v2.angular.io/docs/ts/latest/guide/architecture.html
https://appdividend.com/2018/12/21/angular-7-architecture-overview/

https://dev.to/charumalikcs/angular-architecture-overview-and-concept-n8f


### 15) how to router-outlet work 
https://www.c-sharpcorner.com/blogs/routeroutlet-in-angular

### 17) All angular command (angular-cli-cheat-shee)
https://malcoded.com/static/68c150aaaee9e8056f44fb81a08799ad/6bc95/angular-cli-cheat-sheet.webp

https://malcoded.com/posts/angular-fundamentals-cli/

#### 18) unit test 
https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712

#### 19) angular exprince interview question
https://hackr.io/blog/angular-interview-questions


#### 20 What is ViewEncapsulation?
https://www.greycampus.com/blog/programming/top-30-interview-questions-and-answers-on-angular-5

https://dzone.com/articles/what-is-viewencapsulation-in-angular

#### 21) What is difference between angular6 vs angular 7 vs angular 8
https://www.angularminds.com/blog/article/comparison-between-angular-6-vs-angular-7-vs-angular-8.html

### 22) how to use ngModelChange event 
https://stackblitz.com/edit/ngmodelchanges-example?file=app%2Fapp.component.html

### 23) what is difference between change event and ngModelChange event
https://www.c-sharpcorner.com/forums/difference-between-change-and-ngmodelchange-in-angular

### 24 how to create custome pipe in angular 
https://alligator.io/angular/custom-pipes-angular/
### 24 b) what is difference between pure pipe and in-pure pipe
https://stackoverflow.com/questions/39285550/what-is-impure-pipe-in-angular

https://angular.io/guide/pipes#pure-and-impure-pipes
### 25) how to create custom directive 
https://alligator.io/angular/building-custom-directives-angular/

### 26) lots of example of angular 
https://alligator.io/angular

### 27) Lots of angular interview questions
https://www.bestinterviewquestion.com/angular-6-interview-questions

#### 28 what is async pipe 
https://codecraft.tv/courses/angular/pipes/async-pipe/

1) To Know the Generated folder stracture of the Angular with purpose of all file 
https://v6.angular.io/guide/quickstart#the-src-folder

2) To know the boot-process of angular
https://medium.com/@coderonfleek/understanding-the-angular-boot-process-9a338b06248c

3) What is purpose of enableProdMode in main.ts 
https://angular.io/api/core/enableProdMode#description

4) What is difference between platformBrowserDynamic or BrowserModule
https://html.developreference.com/article/15145797/What's+the+difference+between+BrowserModule+and+platformBrowserDynamic%3F

### 29 ) How to make graphQL query call from angulr 
https://www.telerik.com/blogs/graphql-angular-how-to-make-a-graphql-query

### 30 ) cookies in angular 
https://itnext.io/angular-8-how-to-use-cookies-14ab3f2e93fc

### 31) How to prevent angular applicaion
https://www.dotnettricks.com/learn/angular/tips-to-secure-your-angular-applications

### 32) How to create own angular library 
https://www.youtube.com/watch?v=l3wjN4datGs
#### 32 a) best 
https://www.youtube.com/watch?v=eZDx2G0E-dQ

https://www.youtube.com/watch?v=lvjt9rBHWjo  (with search and add yellow)


` hwo to create libery https://angular.io/guide/creating-libraries`


`ng new magic-strings --create-application=false` 
##### by this command you will get only work space

`ng g library magic-string --prefix=nk`
`` That prefix add in seceletor``
`add component in librar using command : ng g c counter --project demo-lib  ( where demo-lib is library name`  

### 33) Progressive Web Application (PWA)
https://www.youtube.com/watch?v=l1VvA1sGNlk

https://www.youtube.com/watch?v=othhfZ0mGjU

#### 34) Promise vs observale
https://www.youtube.com/watch?v=g8lCPmq6wQg

#### 35) paramitrize route
https://www.youtube.com/watch?v=E6ZZUT-yf0U
### 36) resolver route gaurd 
means if the details not available the he will reducret on route
https://www.youtube.com/watch?v=9Yjbunxc2oA

session management
https://www.youtube.com/watch?v=XE4bZ5cZDO0

#### 37) Angular Material stater kit
https://v5.material.angular.io/guide/getting-started

#### 38) Types of loading in angular 
https://medium.com/@lifei.8886196/eager-loading-lazy-loading-and-pre-loading-in-angular-2-what-when-and-how-798bd107090c