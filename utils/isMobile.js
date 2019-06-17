// Primitive mobile detection
const detectMobile = () =>
  false &&
  typeof navigator !== 'undefined' &&
  navigator.userAgent &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

export default detectMobile()
