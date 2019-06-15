const size = {
  medium: '800px',
  large: '1280px',
}

const mediaQuery = {
  small: `@media (max-width: ${size.medium})`,
  medium: `@media (max-width: ${size.large}) and (min-width: ${size.medium})`,
  large: `@media (min-width: ${size.large})`,
}

export default mediaQuery
