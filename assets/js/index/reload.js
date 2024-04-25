"use strict";const reloadButton=document.getElementById("reload-button");async function reloadData(){sortSelect.disabled=!0,reloadButton.classList.add("is-loading"),reloadButton.disabled=!0,langSelect.disabled=!0,searchInput.disabled=!0,searchButton.disabled=!0,exitSearchButton.disabled=!0,categoriesTabsElement.innerHTML="";for(const a of appCardsColumnElements)a.innerHTML="";try{await StoreDbAPI.loadDb();for(const a in StoreDbAPI.db.categories){let e,t=window.localStorage.getItem("i18nextLng");e=StoreDbAPI.db.categories[a].locales&&"en"!==t?StoreDbAPI.db.categories[a].locales[0][t]:StoreDbAPI.db.categories[a].name;let o=`\n        <li class="category-tab" data-category-id="${a}">\n          <a class="category-tab" data-category-id="${a}">\n            <span class="icon is-small category-tab" data-category-id="${a}">\n              <i class="${StoreDbAPI.db.categories[a].icon} category-tab" data-category-id="${a}"></i>\n            </span>\n            <span class="category-tab i18n" data-category-id="${a}" ${"all"===a?"data-i18n='all-apps'":"data-i18n='"+a+"'"}>${e}</span>\n          </a>\n        </li>\n      `;categoriesTabsElement.innerHTML+=o}document.querySelector(`.category-tab[data-category-id*="${currentSelectedCategory}"]`).classList.add("is-active"),sortSelect.dispatchEvent(new Event("change"))}catch(a){console.error(a),bulmaToast.toast({message:a,type:"is-danger"})}}reloadButton.onclick=async()=>{await reloadData()};