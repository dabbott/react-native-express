const colors = {
  text: 'rgb(38, 48, 83)',
  divider: 'rgba(220, 220, 220, 0.5)',
  primary: 'rgb(59, 108, 212)',
  neutralBackground: '#dedfe8',
  codeBackground: 'rgb(250, 250, 250)',
  banner: {
    top: 'rgba(244, 247, 252, 1)',
    bottom: 'rgba(252, 252, 254, 1)',
  },
  button: {
    primaryText: 'white',
    secondaryText: 'white',
    get primaryBackground() {
      return colors.primary
    },
    secondaryBackground: 'rgb(160,160,160)',
  },
}

export default colors
