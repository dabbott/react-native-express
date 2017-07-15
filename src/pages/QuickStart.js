import React, { Component } from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { PageHeader } from '../components'


const content = markdown(markdownOptions)`
Creating a new React Native project is easy.

You'll need Node.js installed, so if you don't have it already, download the installer at [nodejs.org](https://nodejs.org/en/download/). Choose the appropriate package for your platform and follow the instructions to install.

## Installation

First, let's install \`create-react-native-app\` (CRNA). [CRNA](https://github.com/react-community/create-react-native-app) is a command-line tool for easily starting a new React Native project.

${<pre><code>{
`npm install -g create-react-native-app`
}</code></pre>}

Now use CRNA to create a new app:

${<pre><code>{
`create-react-native-app my-app
cd my-app/
npm start`
}</code></pre>}

CRNA might take a few minutes to download dependencies. You should see a QR code like this after it's done:

${<img src="createnativeapp.png" style={{width: 550}} />}

You just created your first React Native app! Now you can install the Expo Client on [iOS](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) and scan the QR code to view it.

If you see this, success! You're ready to start working on your new React Native App.

${<img src="expo.png" style={{width: 250}} />}

## Making Changes

Try changing the text in \`App.js\`, saving the file, and watching it update on your device.

## Up Next

Now that you have a project set up, let's jump into some of the important JavaScript language features you'll be using. If you're already familiar with each, skip to [Components](components) to learn more about React Components and the Component Lifecycle. If you're already familiar with React, skip to [Core Components](core_components) to learn about the components that ship with React Native.

`

export default props =>
	<Page {...props}>
		<PageHeader
		  title={props.title}
	      author={"@jimmyliu"}
	      authorURL={'https://twitter.com/jimmyliu'}
	     />
		{content}
	</Page>
