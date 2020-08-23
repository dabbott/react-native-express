const defaultAppTemplate = require('./files/exercises/defaultApp').default

export default {
  prelude: `ReactNative.Dimensions._update();
  
if (!window._originalRequire) {
  window._originalRequire = window._require;
}

window._require = function __req(name, ...args) {
  if (name.indexOf('..') === 0) {
    return window._originalRequire(name.slice(1), ...args);
  }

  return window._originalRequire(name, ...args);
};`,
  workspaces: [
    {
      title: '1. Create a new project',
      description: `First, create a new React Native project: \`expo init PhotoGallery --template blank\`<br />

When this is finished, open up \`App.js\`. If it's different from the code on the right, paste the code on the right in. Then, click the "Next" button below to continue.`,
      workspace: {
        title: 'App.js',
        initialTab: 'App.js',
        entry: 'App.js',
        files: {
          'App.js': defaultAppTemplate,
        },
      },
    },
    {
      title: '2. Copy picsum API file',
      description: `Create the directory \`api\` and the file \`picsum.js\` within it. Copy the code on the right into \`picsum.js\`.
  
There are 2 exported functions: <br />

• \`getList\` - Fetch a paginated list of photos
• \`formatPhotoUri\` - Create a uri from an image id and size 
`,
      workspace: {
        initialTab: 'api/picsum.js',
        entry: 'App.js',
        files: {
          'App.js': defaultAppTemplate,
          'api/picsum.js': require('./files/exercises/picsum').default,
        },
      },
    },
    {
      title: '3. Create photos reducer file',
      description: `Create the directory \`reducers\` and the file \`photos.js\` within it.`,
      workspace: {
        initialTab: 'reducers/photos.js',
        entry: 'App.js',
        files: {
          'App.js': defaultAppTemplate,
          'api/picsum.js': require('./files/exercises/picsum').default,
          'reducers/photos.js': '',
        },
      },
    },
    {
      title: '4. Create types and actionCreators',
      description: `Our reducer will support 3 actions, LOADING, SUCCESS, and ERROR, which correspond to UI states.`,
      workspace: {
        initialTab: 'reducers/photos.js',
        entry: 'App.js',
        files: {
          'App.js': defaultAppTemplate,
          'api/picsum.js': require('./files/exercises/picsum').default,
          'reducers/photos.js': require('./files/exercises/photos')
            .default.split('\n')
            .slice(0, 15)
            .join('\n'),
        },
      },
    },
    {
      title: '5. Add initialState object',
      description: `We'll concatenate the infinite list of photos into a \`photos\` array, keeping track of the next page to fetch with \`nextPage\`.`,
      workspace: {
        initialTab: 'reducers/photos.js',
        entry: 'App.js',
        files: {
          'App.js': defaultAppTemplate,
          'api/picsum.js': require('./files/exercises/picsum').default,
          'reducers/photos.js': require('./files/exercises/photos')
            .default.split('\n')
            .slice(0, 22)
            .join('\n'),
        },
      },
    },
    {
      title: '6. Add reducer function',
      description: `Write a reducer function to handle each of our actions.<br />

When handling a SUCCESS action, we concatenate the existing photos array with the new page of photos and increment the \`nextPage\` counter.`,
      workspace: {
        initialTab: 'reducers/photos.js',
        entry: 'App.js',
        files: {
          'App.js': defaultAppTemplate,
          'api/picsum.js': require('./files/exercises/picsum').default,
          'reducers/photos.js': require('./files/exercises/photos').default,
        },
      },
    },
    {
      title: '7. Create a PhotoGrid component',
      description: `Create the directory \`components\` and the file \`PhotoGrid.js\` within it.<br />
This component will have 3 props: \`photos\`, containing our list of photos, \`numColumns\` specifying how many columns our \`FlatList\` should render, and an \`onEndReached\` callback to let us know when to load more photos.<br />
We'll start by using the \`Dimensions\` API to determine the width of the screen, and divide the result by \`numColumns\` to know what size of image to display.`,
      workspace: {
        initialTab: 'components/PhotoGrid.js',
        entry: 'App.js',
        files: {
          'App.js': defaultAppTemplate,
          'api/picsum.js': require('./files/exercises/picsum').default,
          'reducers/photos.js': require('./files/exercises/photos').default,
          'components/PhotoGrid.js': require('./files/exercises/PhotoGrid1')
            .default,
        },
      },
    },
    {
      title: '8. Return a FlatList',
      description: `Next, we'll return a \`FlatList\`.<br />
      
In our \`renderItem\`, we return an \`Image\` component. We specify the intrinsic/natural size of the image in the source prop, so that it's displayed with the correct dimensions.<br />

We also make sure to propagate the \`onEndReached\` function into the \`FlatList\`. We'll add an \`onEndReachedThreshold\` to specify how close we need to scroll to the end of the list to trigger the callback (in this case, half the list height)`,
      workspace: {
        initialTab: 'components/PhotoGrid.js',
        entry: 'App.js',
        files: {
          'App.js': defaultAppTemplate,
          'api/picsum.js': require('./files/exercises/picsum').default,
          'reducers/photos.js': require('./files/exercises/photos').default,
          'components/PhotoGrid.js': require('./files/exercises/PhotoGrid')
            .default,
        },
      },
    },
    {
      title: '9. Putting it all together',
      description: `Now we can return to \`App.js\` and put the pieces together.<br />

Start by updating the imports to include our other files.`,
      workspace: {
        initialTab: 'App.js',
        entry: 'App.js',
        files: {
          'App.js': require('./files/exercises/PhotoGallery1').default,
          'api/picsum.js': require('./files/exercises/picsum').default,
          'reducers/photos.js': require('./files/exercises/photos').default,
          'components/PhotoGrid.js': require('./files/exercises/PhotoGrid')
            .default,
        },
      },
    },
    {
      title: '10. Rendering',
      description: `Next, we'll call \`useReducer\` with our initial state and reducer function.<br />

Then, based on the state, we can render a loading or error screen, or our \`PhotoGrid\` if the data was fetched successfully.`,
      workspace: {
        initialTab: 'App.js',
        entry: 'App.js',
        files: {
          'App.js': require('./files/exercises/PhotoGallery2').default,
          'api/picsum.js': require('./files/exercises/picsum').default,
          'reducers/photos.js': require('./files/exercises/photos').default,
          'components/PhotoGrid.js': require('./files/exercises/PhotoGrid')
            .default,
        },
      },
    },
    {
      title: '11. Connecting our data',
      description: `Lastly, we'll write a \`fetchPhotos\` function that fetches the next page of photos. We call this in 2 places:<br />

• once within \`useEffect\` after the initial render
• any time \`onEndReached\` is called<br />

We use \`useCallback\` because our \`fetchPhotos\` function is async, and we need to make sure we're working with up-to-date values.`,
      workspace: {
        initialTab: 'App.js',
        entry: 'App.js',
        files: {
          'App.js': require('./files/exercises/PhotoGallery').default,
          'api/picsum.js': require('./files/exercises/picsum').default,
          'reducers/photos.js': require('./files/exercises/photos').default,
          'components/PhotoGrid.js': require('./files/exercises/PhotoGrid')
            .default,
        },
      },
    },
  ],
}

// files={[
//   ['App.js', require('../../examples/files/exercises/PhotoGallery').default],
//   [
// 'components/PhotoGrid.js',
// require('../../examples/files/exercises/PhotoGrid').default,
//   ],
//   [
//     'reducers/photos.js',
//     require('../../examples/files/exercises/photos').default,
//   ],
//   ['api/picsum.js', require('../../examples/files/exercises/picsum').default],
// ]}
