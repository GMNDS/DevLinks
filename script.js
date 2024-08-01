function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de um personagem de cabelos e olhos avermelhados usando uma touca de um carangueijo com fones de ouvidos vermelhos e um casaco avermelhado"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de um personagem de cabelos e olhos azuis usando uma touca de um carangueijo azul com fones de ouvidos vermelhos e um casaco azul"
    )
  }
}
