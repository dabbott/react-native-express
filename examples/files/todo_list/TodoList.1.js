import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const extractKey = ({ label }) => label

const mapStateToProps = state => ({
  items: state.items,
})

class TodoList extends React.Component {
  renderItem = ({ item }) => {
    return <Text style={styles.row}>{item.label}</Text>
  }

  render() {
    const { items } = this.props

    return (
      <FlatList
        style={styles.container}
        data={items}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 1,
    backgroundColor: 'skyblue',
  },
})

export default connect(mapStateToProps)(TodoList)
