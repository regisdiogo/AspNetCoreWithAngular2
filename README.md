# ASP.NET Core with Angular2

Over the last couple of days I have struggled to find a working example of ASP.NET Core with Angular2 (not beta or RC versions). Finally I was able to create my own example by putting together a few references I have found.

Some of those references were: 
* http://www.hanselman.com/blog/ControlHowYourBowerPackagesAreInstalledWithAGulpfileInASPNET5.aspx
* http://asp.net-hacker.rocks/2016/08/08/setup-angular2-typescript-aspnetcore-in-visualstudio.html
* https://angular.io/docs/ts/latest/quickstart.html

## Running

```bash
git clone https://github.com/regisdiogo/AspNetCoreWithAngular2.git

cd AspNetCoreWithAngular2\src\AspNetCoreWithAngular2.WebUI

dotnet restore

npm install

dotnet run
```

