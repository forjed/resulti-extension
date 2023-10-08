const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
  const query = searchInput.value;
  const url = `https://resulti.net/search?q=${encodeURIComponent(query)}`;
  chrome.tabs.create({ url });
});