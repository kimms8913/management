function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');

  elements.forEach(element => {
    const url = element.getAttribute('data-include');

    fetch(url)
      .then(response => response.text())
      .then(data => {
        element.insertAdjacentHTML('afterbegin', data);
        element.removeAttribute('data-include');
      });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  includeHTML();
});
