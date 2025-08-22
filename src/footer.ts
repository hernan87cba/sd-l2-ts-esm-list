export function footerComponent() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = "<h1>Footer del listado de precios</h1>";
  footer.style.border = "solid 3px purple";
  footer.style.padding = "12px";
  return footer;
}
