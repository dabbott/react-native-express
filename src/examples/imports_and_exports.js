const importTitle = 'Importing'
const importCode = `// import the default export
import React from 'react-native'

// import other named exports
import {View, Text, Image} from 'react-native'

// import default and others simultaneously
// import React, {View, Text, Image} from 'react-native'`
const importing = { code: importCode, title: importTitle }

const exportTitle = 'Exporting'
const exportCode = `export default React
export {View, Text, Image}`

const exporting = { code: exportCode, title: exportTitle }

export { importing, exporting }
