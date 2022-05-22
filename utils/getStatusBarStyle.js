export default function getStatusBarStyle(value) {
  const colors = {
    dark: 'light',
    light: 'dark',
  }

  return colors[value]
}