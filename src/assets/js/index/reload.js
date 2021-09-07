'use strict';

// Global elements.
const reloadButton = document.getElementById('reload-button');

// Reload data.
async function reloadData () {
  sortSelect.disabled = true;
  reloadButton.classList.add('is-loading');
  reloadButton.disabled = true;
  langSelect.disabled = true;
  searchInput.disabled = true;
  searchButton.disabled = true;
  exitSearchButton.disabled = true;

  categoriesTabsElement.innerHTML = ''

  for (const appCardColumnElement of appCardsColumnElements) {
    appCardColumnElement.innerHTML = ''
  }

  try {
    await StoreDbAPI.loadDb();

    for (const category in StoreDbAPI.db.categories) {
      // Initialize localized entries for categories from store-db.
      // This can solve the problem of categories not following changes when switching localization.
      let categoryName;
      let currentLng = window.localStorage.getItem("i18nextLng");
      if (!StoreDbAPI.db.categories[category].locales || currentLng === "en") {
        categoryName = StoreDbAPI.db.categories[category].name;
      } else {
        categoryName = StoreDbAPI.db.categories[category].locales[0][currentLng];
      };
      // End
      let categoryTabHTML = `
        <li class="category-tab" data-category-id="${category}">
          <a class="category-tab" data-category-id="${category}">
            <span class="icon is-small category-tab" data-category-id="${category}">
              <i class="${StoreDbAPI.db.categories[category].icon} category-tab" data-category-id="${category}"></i>
            </span>
            <span class="category-tab i18n" data-category-id="${category}" ${(category === "all") ? "data-i18n='all-apps'" : "data-i18n='" + category + "'"}>${categoryName}</span>
          </a>
        </li>
      `;

      categoriesTabsElement.innerHTML += categoryTabHTML;
    }
    document.querySelector(`.category-tab[data-category-id*="${currentSelectedCategory}"]`).classList.add('is-active');
    sortSelect.dispatchEvent(new Event('change'));
  } catch (err) {
    console.error(err);
    bulmaToast.toast({
      message: err,
      type: 'is-danger'
    });
  }
}

reloadButton.onclick = async () => {
  await reloadData();
}