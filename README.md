### Ionic

Ionic CLI ha még nincs:
- npm install -g ionic
https://ionicframework.com/docs/angular/your-first-app
- Create an App
ionic start be-fit tabs --type=angular --capacitor
- Run the App
ionic serve

## version
ionic -v
6.13.1


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

### ion-list
https://ionicframework.com/docs/api/list
# text-list
<ion-list>
  <ion-item>
    <ion-label>Pokémon Yellow</ion-label>
  </ion-item>
</ion-list>


### back-button
https://ionicframework.com/docs/api/back-button
<!-- Default back button -->
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>


### routerLink binding
<ion-list>
  <ion-item *ngFor = "let item of items">
    <a [routerLink] = item.link > {{item.text}} </a>
  </ion-item>
</ion-list>


### slots
https://www.joshmorony.com/understanding-how-slots-are-used-in-ionic-4/
