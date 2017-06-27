import React, { Component } from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import { PageHeader } from '../components'


const content = markdown(markdownOptions)`
Creating a new React Native app is easy.

If you don't have Node installed, download the installer here: [nodejs.org](https://nodejs.org/en/download/). Run the package and follow the instructions to install.

Open terminal and install \`create-react-native-app\`. [CRNA](https://github.com/react-community/create-react-native-app) is a tool that makes it significantly easier to get started with a React Native project.

${<pre><code>{
`$ npm install -g create-react-native-app`
}</code></pre>}

Now use CRNA to create a new app:

${<pre><code>{
`$ create-react-native-app my-app
$ cd my-app/
$ npm start`
}</code></pre>}

This might take a while. You should see a QR code like this after it's done:

<img src="createnativeapp.jpg" width="400px"/>

You just created your first React Native app! Now install the Expo Client on [iOS](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) and scan the QR code to view it.

If you see this, success! You are ready to start working on your new React Native App.

<img src="expo.png" width="200px"/>

Try changing the text and see it update on your device.
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
