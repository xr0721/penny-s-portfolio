// All paths are relative so the site works on GitHub Pages and a custom domain.
const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
for (const button of filters) {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    for (const item of filters) item.setAttribute('aria-pressed', String(item === button));
    let count = 0;
    for (const card of cards) {
      card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter);
      if (!card.hidden) count++;
    }
    document.getElementById('filter-status').textContent = `${count} cards shown`;
  });
}
const dialog = document.querySelector('#photo-dialog');
if (dialog) {
  for (const button of document.querySelectorAll('[data-photo]')) {
    button.addEventListener('click', () => {
      const image = dialog.querySelector('img');
      image.src = button.dataset.photo;
      image.alt = button.querySelector('img').alt;
      dialog.showModal();
    });
  }
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}
