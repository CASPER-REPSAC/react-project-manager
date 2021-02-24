const body = document.body;
const lightTheme = "light";
const darkTheme = "dark";
let theme;

if (localStorage) {
  theme = localStorage.getItem("theme")
}
if (theme === lightTheme || theme === darkTheme) {
  body.classList.add(theme)
} else {
  body.classList.add(lightTheme)
}

const switchTheme = () => {
  if (theme === darkTheme) {
    body.classList.replace(darkTheme, lightTheme)
    localStorage.setItem("theme", "light")
    theme = lightTheme
  } else {
    body.classList.replace(lightTheme, darkTheme)
    localStorage.setItem("theme", "dark")
    theme = darkTheme
  }
}

export {switchTheme, theme};