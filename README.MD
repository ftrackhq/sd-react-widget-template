<!---
Change the name as appropriate...
-->
# Widget’s Name
<!---
Provide a short description of the widget and high level functionality.>
-->

> **Warning**
> Due to the required ftrack credentials this widget does not work as standalone, but only from within ftrack.

## Demo
A working demo is available at this [link](https://storage.googleapis.com/sd-public-widget-deployment/sd-react-widget-template/index.html)

## Example
<!---
Provide an image to sum up the tool.
-->

![Example result](images/thumbnail.png)


### Who is this for
<!---
Check [x] as needed
-->
- [x] Production Management / Project Management
- [ ] Artist / Designer
- [ ] Supervisor / Lead
- [ ] Developer / TD / Engineer
- [ ] Executive / Studio Head 

## Functionalities
<!---
* To describe
* The  basic
* Functionalities
* And what to expect
* From this code 
-->

* One feature
* Or More...


# ftrack scope

<!---
Check [x] one or Both options depending on the widgets type.
-->

- [ ] **Overview Widget** : *Widget should be installed as Overview widget.  Provides cross project data manipulation.*
- [x] **Dashboard Widget**: *Widget should be installed as Dashboard widget.  Provides single Entity type data manipulation.*


## 

# Code Language
* Javascript


# Requirements

Provide a small description of the requirements to use this solution.
Installation and setup
Some detailed description on how to make the recipe run and deploy it, this can be as long as it feels appropriate. 
Should allow anyone with none or limited experience to be able to run it locally and in production.


## Develop
The code can be modified in any text editor but requires [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for all the other steps.

## Build
In order to run the widget, this will require to fetch all the required dependencies.
This can be done with the following command:

>  npm install

This could take a while, depending on how many dependencies your widget requires in [package.json](./package.json)

## Test
Once the build process is done you can run the widget in development mode with: 

> npm run dev

This should result in npm reporting to which port the code is available:

```
 VITE v4.0.4  ready in 581 ms
 ➜  Local:   http://localhost:3000/
 ➜  Network: use --host to expose
 ➜  press h to show help
```

You can now use the address exposed to load the widget in ftrack .


## Deploy
Depending on your infrastructure, there might be various ways to deploy the code in production.
But first you'll need to build the code for release with:

> npm run build

which will result in **dist** folder, which can then be zipped for redistribution.


### Statically served files

Whether you are using [nginx](https://www.nginx.com/) or [apache](https://httpd.apache.org/) all you are usually required to do
is to copy the content of the build folder in the main location folder.

### Serving with node
If you want to use node to serve the code you'll have first to install [serve](https://www.npmjs.com/package/serve) with:

> npm install serve

Once serve is installed , you can run the code with :

> serve dist

Once started should be reporting :

```
   ┌──────────────────────────────────────────┐
   │                                          │
   │   Serving!                               │
   │                                          │
   │   - Local:    http://localhost:3000      │
   │   - Network:  http://192.168.1.2:3000    │
   │                                          │
   │   Copied local address to clipboard!     │
   │                                          │
   └──────────────────────────────────────────┘
```

> **Note**
> For performance and security reason is suggested to run the widget with ssl and behind a reverse proxy.


### Installing

Open [the above address](http://localhost:3000) into a ftrack project's dashboard view. Ensure to inject the credentials or it won't work.


### Dependencies
- [ftrack/api](https://github.com/ftrackhq/ftrack-javascript)
- [ftrack/web-widget](https://github.com/ftrackhq/ftrack-web-widget)
- [react-load-spinner](https://www.npmjs.com/package/react-loader-spinner)
- [Ad more...](https://example.com)
# Note
The template code has been bootstrapped from a [vite](https://vitejs.dev/guide/) application.

&copy; ftrack
