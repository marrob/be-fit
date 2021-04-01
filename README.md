### Ionic
https://ionicframework.com/docs/angular/your-first-app
- Create an App
ionic start be-fit tabs --type=angular --capacitor
- Run the App
ionic serve


### Deploy menete
https://firebase.google.com/docs/hosting
1. npm run build --prod
-ebbbol lesz egy www mappa
2. firebase init
-Hosting: Configure..
-Create a new project
-Please specify a unique project id (warning: cannot be modified afterward) [6-30 characters]: be-fit-123456
-What would you like to call your project? (defaults to your project ID) () be-fit
3. What do you want to use as your public directory? (public) ->ezt itt lehet a www-re kellett volna tenni
-Configure as a single-page app (rewrite all urls to /index.html)? (y/N)y
-Set up automatic builds and deploys with GitHub? (y/N)N
4.Ebben a fájlban módosítani kell a "public" elérési útját: firebase.json:
{
  "hosting": {
    "public": "../www",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

5.firebase deploy 
Deploy complete!
Project Console: https://console.firebase.google.com/project/be-fit-123456/overview
Hosting URL: https://be-fit-123456.web.app
PS D:\angular\be-fit\www> 

