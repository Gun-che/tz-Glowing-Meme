export const cutContent = (string, length = 50) => {

  if (string.split(' ').length > length) {
    return string
      .split(' ', length)
      .join(' ')
      + ' ...'
  }

  return string
}