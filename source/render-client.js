// global templater
// global template main
// global DATA

function render(template, container) {
  const html = templater(template)(DATA);
  document.getElementById(container).innerHTML = html;
}

render(templateMain, "app");
