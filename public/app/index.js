System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/home/home.component.js",["@angular/core","../user.model","../user.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../user.model"),h=a("../user.service"),i=function(){function a(a){this.userService=a,this.me=new g.User("","","")}return a.prototype.ngOnInit=function(){var a=this;this.userService.getMe().then(function(b){console.log(b),a.me=b})["catch"](function(a){console.log(a)})},a=d([f.Component({moduleId:c.id,selector:"app-home",templateUrl:"home.component.html",styleUrls:["home.component.css"]}),e("design:paramtypes",[h.UserService])],a)}();return b.HomeComponent=i,c.exports}),System.registerDynamic("app/login-form/login-form.component.js",["@angular/core","./../user.model","./../user.service","@angular/router"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("./../user.model"),h=a("./../user.service"),i=a("@angular/router"),j=function(){function a(a,b){this.userService=a,this.router=b,this.user=new g.User("","",""),this.wrongPwdEmail=!1}return a.prototype.ngOnInit=function(){},a.prototype.onSubmit=function(){var a=this;this.userService.signIn(this.user).then(function(b){console.log("Here"),a.router.navigate(["/home"])})["catch"](function(b){a.wrongPwdEmail=401==b.status})},a=d([f.Component({moduleId:c.id,selector:"app-login-form",templateUrl:"login-form.component.html",styleUrls:["login-form.component.css"]}),e("design:paramtypes",[h.UserService,i.Router])],a)}();return b.LoginFormComponent=j,c.exports}),System.registerDynamic("app/user.model.js",[],!0,function(a,b,c){"use strict";var d=function(){function a(a,b,c){this.name=a,this.email=b,this.password=c}return a}();return b.User=d,c.exports}),System.registerDynamic("app/signup-form/signup-form.component.js",["@angular/core","./../user.model","./../user.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("./../user.model"),h=a("./../user.service"),i=function(){function a(a){this.userService=a,this.user=new g.User("","",""),this.success=!1,this.duplicateEmail=!1}return a.prototype.ngOnInit=function(){},a.prototype.onSubmit=function(){var a=this;this.userService.signUp(this.user).then(function(b){a.success=201==b})["catch"](function(b){a.success=!1,a.duplicateEmail=409==b.status})},a=d([f.Component({moduleId:c.id,selector:"app-signup-form",templateUrl:"signup-form.component.html",styleUrls:["signup-form.component.css"]}),e("design:paramtypes",[h.UserService])],a)}();return b.SignupFormComponent=i,c.exports}),System.registerDynamic("app/user.service.js",["@angular/core","@angular/http"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/http"),h=a("@angular/http"),i=function(){function a(a){this.http=a,this.token=localStorage.getItem("token")}return a.prototype.signUp=function(a){var b=JSON.stringify(a),c=new h.Headers({"Content-Type":"application/json"}),d=new h.RequestOptions({headers:c});return this.http.post("/api/auth/signup",b,d).toPromise().then(function(a){return a.status})},a.prototype.signIn=function(a){var b=this,c=JSON.stringify(a),d=new h.Headers({"Content-Type":"application/json"}),e=new h.RequestOptions({headers:d});return this.http.post("/api/auth/signin",c,e).toPromise().then(function(a){return b.token=a.json().token,localStorage.setItem("token",b.token),a.status})},a.prototype.logout=function(){return this.token=void 0,localStorage.removeItem("token"),Promise.resolve(!0)},a.prototype.getMe=function(){var a=new h.Headers({"Content-Type":"application/json"});a.append("Authorization","Bearer "+this.token);var b=new h.RequestOptions({headers:a});return this.http.get("/api/users/me",b).toPromise().then(function(a){return a.json().me})},a=d([f.Injectable(),e("design:paramtypes",[g.Http])],a)}();return b.UserService=i,c.exports}),System.registerDynamic("app/client.component.js",["@angular/core","@angular/router","./home/home.component","./login-form/login-form.component","./signup-form/signup-form.component","./user.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("./home/home.component"),i=a("./login-form/login-form.component"),j=a("./signup-form/signup-form.component"),k=a("./user.service"),l=function(){function a(){this.title="client works!"}return a=d([g.Routes([{path:"/login",component:i.LoginFormComponent},{path:"/signup",component:j.SignupFormComponent},{path:"/home",component:h.HomeComponent}]),f.Component({moduleId:c.id,selector:"client-app",templateUrl:"client.component.html",styleUrls:["client.component.css"],directives:[g.ROUTER_DIRECTIVES],providers:[k.UserService]}),e("design:paramtypes",[])],a)}();return b.ClientAppComponent=l,c.exports}),System.registerDynamic("app/index.js",["./environment","./client.component"],!0,function(a,b,c){"use strict";var d=a("./environment");b.environment=d.environment;var e=a("./client.component");return b.ClientAppComponent=e.ClientAppComponent,c.exports});