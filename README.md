# codemix-vanilla-react
Template for project creation of React inside CodeMix

## Contents

The template project is just an example Hello World that guide you through the use of React with the Expressjs framework to build a very simple web application that display the Hello World!!! Greeting

# React Project

## Prerequisites

- NodeJS ^8.9
- npm ^5.6

## Steps to Run inside CodeMix


1. From the `Quick Open`  Command Palette (ctrl/cmd + shift + p) search for:
     `Terminal: Create New Integrated Terminal`
2. From the `Quick Open` options select this project.
3. Once you are inside the Terminal, execute: `npm install`
4. Finally to run this example run `npm run start`
5. Open your browser on http://localhost:3000

----- eclipse react project scaffolding

https://www.genuitec.com/react-tutorial-getting-started/

export BROWSER=none

npm install --global react-scripts
npm install
react-scripts start

setup a breakpoint in index.js

Right-click on your React project and choose Debug As > Debug Configurations, and then right-click on CodeMix and select New.
In the New CodeMix Launch Configuration dialog, select your React project’s name and then click OK.

...edit .vscode/launch.json to be:
{
	"version": "0.2.0",
	"configurations": [
    	{
        	"name": "Chrome",
        	"type": "chrome",
        	"request": "launch",
        	"url": "http://localhost:3000",
        	"webRoot": "${workspaceRoot}"
    	}
	]
}

Debug it now and after the window loaded, refresh it again F5

