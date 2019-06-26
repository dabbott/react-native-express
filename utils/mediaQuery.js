const size = {
  medium: '800px',
  large: '1280px',
}

const mediaQuery = {
  small: `@media (max-width: ${size.medium})`,
  medium: `@media (max-width: ${size.large}) and (min-width: ${size.medium})`,
  large: `@media (min-width: ${size.large})`,
}

export const query = {
  small: { maxWidth: size.medium },
  medium: { maxWidth: size.large, minWidth: size.medium },
  large: { minWidth: size.large },
}

export default mediaQuery
