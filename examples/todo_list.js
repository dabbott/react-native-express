const vendorComponents = [
  [
    'redux',
    'Redux',
    'https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js',
  ],
  [
    'react-redux',
    'ReactRedux',
    'https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js',
  ],
]

export default {
  vendorComponents,
  statusBarHeight: 20,
  workspaces: [
    {
      title: '1. Create a new project',
      description: `First, create a new React Native project:

\`\`\`
expo init TodoList
cd TodoList
npm start
\`\`\`

When this is finished, open up \`App.js\`. It should look like the code on the right. Then, click the "Next" button below to continue.`,
      workspace: {
        title: 'App.js',
        initialTab: 'App.js',
        entry: 'App.js',
        files: {
          'App.js': require('../examples/files/todo_list/App.1').default,
        },
      },
    },
    {
      title: '2. Install redux',
      description: `Next, install \`redux\` and \`react-redux\` using \`npm\`:

\`\`\`
npm i --save redux react-redux
\`\`\`

We'll be using \`redux\` to manage the state of our app.`,
      workspace: {
        title: 'App.js',
        initialTab: 'App.js',
        entry: 'App.js',
        files: {
          'App.js': require('../examples/files/todo_list/App.1').default,
        },
      },
    },
    {
      title: '3. Set up the store',
      description: `Create a new file, \`store.js\`. Here we'll initialize our \`redux\` store.

On the right, you can see we create a placeholder reducer with some hardcoded data so that we have something to render in our app.`,
      workspace: {
        initialTab: 'store.js',
        entry: 'App.js',
        files: {
          'App.js': require('../examples/files/todo_list/App.1').default,
          'store.js': require('../examples/files/todo_list/store.1').default,
        },
      },
    },
    {
      title: '4. Set up the Provider',
      description: `Heading back to App.js now, we want to render a Redux Provider as the top-level component of our app.

This allows the rest of our app to access the store.`,
      workspace: {
        initialTab: 'App.js',
        entry: 'App.js',
        files: {
          'App.js': require('../examples/files/todo_list/App.2').default,
          'store.js': require('../examples/files/todo_list/store.1').default,
        },
      },
    },
    {
      title: '5. Create TodoList.js',
      description: `Create a new file, \`TodoList.js\`.

We'll need to do a couple things here:

- Create a component class and use \`connect\` to connect it to our Redux store
- Use \`mapStateToProps\` to choose the data we want to pass from our Redux store to our component
- Render a FlatList containing the \`items\` from our store`,
      workspace: {
        initialTab: 'TodoList.js',
        entry: 'App.js',
        files: {
          'App.js': require('../examples/files/todo_list/App.2').default,
          'store.js': require('../examples/files/todo_list/store.1').default,
          'TodoList.js': require('../examples/files/todo_list/TodoList.1')
            .default,
        },
      },
    },
    {
      title: '6. Render the TodoList from App',
      description: ``,
      workspace: {
        initialTab: 'App.js',
        entry: 'App.js',
        files: {
          'App.js': require('../examples/files/todo_list/App.3').default,
          'store.js': require('../examples/files/todo_list/store.1').default,
          'TodoList.js': require('../examples/files/todo_list/TodoList.1')
            .default,
        },
      },
    },
  ],
}
