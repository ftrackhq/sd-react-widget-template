# Widget’s Name
<!---
Provide a short description of the widget and high level functionality.>
-->

> **Disclaimer**
> Due to the required ftrack credentials this widget does not work as standalone, but only from within ftrack.

## Demo
<!---
Provide an online [link](http://www.example.com) if available.
-->

## Example
<!---
Provide an image to sum up the tool.
-->

![Example result](images/thumbnail.png)


### Who is this for
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


# ftrack scope

<!---
Check one or Both options depending on the widgets type.
-->

- [ ] **Overview Widget** : *Widget should be installed as Overview widget.  Provides cross project data manipulation.*
- [ ] **Dashboard Widget**: *Widget should be installed as Dashboard widget.  Provides single Entity type data manipulation.*


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
 ➜  Local:   http://localhost:5173/
 ➜  Network: use --host to expose
 ➜  press h to show help
```

## Deploy
Depending on your infrastructure, there might be various ways to deploy the code in production.
But first you'll need to build the code for release with:

> npm run build

which will result in **dist** folder, which can then be zipped for redistribution.


### Statically served files

Whether you are using [nginx](https://www.nginx.com/) or [apache](https://httpd.apache.org/) all you are usually required to do
is to copy the content of the build folder in the main location folder.

### Serving with node


### Dependencies
* A list of [clickable](www.example.com) Dependencies

# Note
The template code has been bootstrapped from a [vite](https://vitejs.dev/guide/) application.