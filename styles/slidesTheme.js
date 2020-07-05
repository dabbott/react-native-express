import colors from './colors'

const fonts = {
  normal: "'Helvetica Neue', Helvetica, sans-serif",
  monospace: "Menlo, Monaco, Consolas, 'Courier New', monospace",
}

const textStyles = {
  heading1: {
    fontFamily: fonts.normal,
    fontSize: '72px',
    fontWeight: '300',
    color: colors.text,
    lineHeight: '1.5',
  },
  heading2: {
    fontFamily: fonts.normal,
    fontSize: '48px',
    fontWeight: '500',
    color: colors.text,
    lineHeight: '1.5',
  },
  heading3: {
    fontFamily: fonts.normal,
    fontSize: '36px',
    fontWeight: 'bold',
    color: colors.text,
    lineHeight: '1.5',
  },
  body: {
    fontFamily: fonts.normal,
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '2',
    color: colors.text,
  },
  code: {
    fontFamily: fonts.monospace,
    fontSize: '90%',
    lineHeight: '1.5',
    color: colors.textMuted,
  },
}

export default { colors, textStyles }
