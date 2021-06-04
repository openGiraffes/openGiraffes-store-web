"use strict";let currentSelectedCategory="all";const StoreDbAPI=new StoreDatabaseAPI;let isFirstInitCompleted=!1,currentWebStoreVersion="";function separateArrayCommas(t){let e="";const a=t.length;for(const n in t)e+=n+1<a?t[n]+", ":t[n]+" ";return e}function generateReadableCategories(t){const e=[];for(const a in t){const n=t[a],o=StoreDbAPI.db.categories[n].name;o?e.push(o):e.push(n)}return separateArrayCommas(e)}function listAppsByCategory(t,e){return StoreDbAPI.sortApps(StoreDbAPI.getAppsByCategory(t),e)}function reloadAppRatings(t){appDetailsModal.content.ratings.loggedIn.details.innerHTML="<strong>@Unknown</strong>",appDetailsModal.content.ratings.loggedIn.points.value=1,appDetailsModal.content.ratings.loggedIn.points.disabled=!0,appDetailsModal.content.ratings.loggedIn.ratingIncompleteBlurb.classList.add("is-hidden"),appDetailsModal.content.ratings.loggedIn.submitButton.classList.add("is-loading"),appDetailsModal.content.ratings.loggedIn.submitButton.disabled=!0,appDetailsModal.content.ratings.averageRating.innerText="Unknown ★",appDetailsModal.content.ratings.allRatings.innerHTML="Loading ratings...",StoreDbAPI.getAppRatings(t).then((function(e){appDetailsModal.content.ratings.allRatings.innerHTML="";let a=!1;e.response.data.average&&(appDetailsModal.content.ratings.averageRating.innerText=e.response.data.average.toFixed(1)+" ★");for(const t of e.response.data.ratings)if(t.username===userDetails.username)appDetailsModal.content.ratings.loggedIn.details.innerHTML=`<strong>@${t.username}</strong> (you) • <small>${dayjs.unix(t.creationtime).fromNow()}</small>`,appDetailsModal.content.ratings.loggedIn.points.disabled=!1,appDetailsModal.content.ratings.loggedIn.points.value=t.points,appDetailsModal.content.ratings.loggedIn.points.disabled=!0,a=!0;else{const e=document.createElement("div");e.classList.add("box"),appDetailsModal.content.ratings.allRatings.appendChild(e);const a=document.createElement("article");a.classList.add("media"),e.appendChild(a);const n=document.createElement("div");n.classList.add("media-content"),a.appendChild(n);const o=document.createElement("div");o.classList.add("content"),n.appendChild(o);const s=document.createElement("p");s.innerHTML=`<strong>@${t.username}</strong> • <small>${t.points} ★</small> • <small>${dayjs.unix(t.creationtime).fromNow()}</small>`,o.appendChild(s)}appDetailsModal.content.ratings.loggedIn.submitButton.setAttribute("data-app-appid",t),a?(appDetailsModal.content.ratings.loggedIn.points.disabled=!0,appDetailsModal.content.ratings.loggedIn.submitButton.disabled=!0):(appDetailsModal.content.ratings.loggedIn.details.innerHTML=`<strong>@${userDetails.username}</strong> (you)`,appDetailsModal.content.ratings.loggedIn.points.disabled=!1,appDetailsModal.content.ratings.loggedIn.submitButton.disabled=!1),appDetailsModal.content.ratings.loggedIn.submitButton.classList.remove("is-loading")})).catch((function(t){bulmaToast.toast({message:window.lang.translate("rating-load-error"),type:"is-danger"}),console.error(t)}))}const appDownloadsModal={controller:new BulmaModal("#app-download-modal"),content:{name:document.getElementById("app-download-modal-app-name"),icon:document.getElementById("app-download-modal-app-icon"),qrcode:document.getElementById("app-download-modal-app-download-qrcode")},buttons:{download:document.getElementById("app-download-modal-download-button")}};appDownloadsModal.buttons.download.onclick=function(t){t.target.classList.add("is-loading"),t.target.disabled=!0,StoreDbAPI.dlCountApp(t.target.getAttribute("data-app-appid")).then((function(){t.target.disabled=!1,t.target.classList.remove("is-loading")})).catch((function(){t.target.disabled=!1,t.target.classList.remove("is-loading"),bulmaToast.toast({message:window.lang.translate("download-record-error"),type:"is-danger"})})),window.open(t.target.getAttribute("data-app-download"),"_blank")};const appDetailsModal={controller:new BulmaModal("#app-details-modal"),content:{name:document.getElementById("app-details-modal-app-name"),icon:document.getElementById("app-details-modal-app-icon"),screenshots:{container:document.getElementById("app-details-modal-app-screenshots-container"),scroller:document.getElementById("app-details-modal-app-screenshots")},descriptionSeparator:document.getElementById("app-details-modal-description-separator"),description:document.getElementById("app-details-modal-app-description"),categories:document.getElementById("app-details-modal-app-categories"),authors:document.getElementById("app-details-modal-app-authors"),maintainers:document.getElementById("app-details-modal-app-maintainers"),version:document.getElementById("app-details-modal-app-version"),type:document.getElementById("app-details-modal-app-type"),locales:document.getElementById("app-details-modal-app-locales"),has_ads:document.getElementById("app-details-modal-app-has_ads"),has_tracking:document.getElementById("app-details-modal-app-has_tracking"),license:document.getElementById("app-details-modal-app-license"),downloadCount:document.getElementById("app-details-modal-app-downloadCount"),ratings:{notLoggedIn:document.getElementById("app-details-modal-app-ratings-not-logged-in"),loggedIn:{container:document.getElementById("app-details-modal-app-ratings-logged-in"),details:document.getElementById("app-details-modal-app-ratings-logged-in-details"),points:document.getElementById("app-details-modal-app-ratings-logged-in-points"),ratingIncompleteBlurb:document.getElementById("app-details-modal-rating-incomplete-blurb"),submitButton:document.getElementById("app-details-modal-app-ratings-logged-in-submit-button")},averageRating:document.getElementById("app-details-modal-app-ratings-average-rating"),allRatings:document.getElementById("app-details-modal-app-ratings-all-ratings")}},buttons:{download:document.getElementById("app-details-modal-download-button"),website:document.getElementById("app-details-modal-website-button"),repo:document.getElementById("app-details-modal-repo-button"),donation:document.getElementById("app-details-modal-donation-button")}};appDetailsModal.controller.addEventListener("modal:show",(function(){document.getElementsByTagName("html")[0].classList.add("is-clipped")})),appDetailsModal.controller.addEventListener("modal:close",(function(){document.getElementsByTagName("html")[0].classList.remove("is-clipped")})),appDetailsModal.buttons.download.onclick=function(){appDownloadsModal.controller.show()},appDetailsModal.buttons.website.onclick=function(t){window.open(t.target.getAttribute("data-app-website"),"_blank")},appDetailsModal.buttons.repo.onclick=function(t){window.open(t.target.getAttribute("data-app-repo"),"_blank")},appDetailsModal.buttons.donation.onclick=function(t){window.open(t.target.getAttribute("data-app-donate"),"_blank")},appDetailsModal.content.ratings.loggedIn.submitButton.onclick=function(){appDetailsModal.content.ratings.loggedIn.ratingIncompleteBlurb.classList.add("is-hidden"),appDetailsModal.content.ratings.loggedIn.description.value.length>2&&isUserLoggedIn?(appDetailsModal.content.ratings.loggedIn.submitButton.classList.add("is-loading"),appDetailsModal.content.ratings.loggedIn.submitButton.disabled=!0,appDetailsModal.content.ratings.loggedIn.points.disabled=!0,appDetailsModal.content.ratings.loggedIn.description.disabled=!0,StoreDbAPI.addNewRating(userDetails.username,userDetails.logintoken,appDetailsModal.content.ratings.loggedIn.submitButton.getAttribute("data-app-appid"),appDetailsModal.content.ratings.loggedIn.points.value).then((function(){setTimeout((function(){reloadAppRatings(appDetailsModal.content.ratings.loggedIn.submitButton.getAttribute("data-app-appid"))}),2e3)})).catch((function(){setTimeout((function(){reloadAppRatings(appDetailsModal.content.ratings.loggedIn.submitButton.getAttribute("data-app-appid"))}),2e3)}))):appDetailsModal.content.ratings.loggedIn.ratingIncompleteBlurb.classList.remove("is-hidden")};let appCardColumn=0;const appCardsColumnElements=[document.getElementById("app-cards-column-0"),document.getElementById("app-cards-column-1"),document.getElementById("app-cards-column-2")],appCardsContainerElement=document.getElementById("app-cards-container");function addAppCard(t){appCardsColumnElements[appCardColumn].appendChild(document.createElement("br"));const e=document.createElement("div");e.id=t.slug,e.classList.add("card"),appCardsColumnElements[appCardColumn].appendChild(e);const a=document.createElement("div");a.classList.add("card-content"),e.appendChild(a);const n=document.createElement("div");n.classList.add("media"),a.appendChild(n);const o=document.createElement("div");o.classList.add("media-left"),n.appendChild(o);const s=document.createElement("figure");s.classList.add("image","is-48x48","is-unselectable");const l=document.createElement("img");l.src=t.icon,s.appendChild(l),o.appendChild(s);const i=document.createElement("div");i.classList.add("media-content"),n.appendChild(i);const d=document.createElement("p");d.classList.add("title","is-4"),d.innerText=t.name,i.appendChild(d);const r=document.createElement("p");r.classList.add("subtitle","is-6"),r.innerText=generateReadableCategories(t.meta.categories),i.appendChild(r);const c=document.createElement("div");c.classList.add("content"),c.innerText=t.description,a.appendChild(c);const p=document.createElement("footer");p.classList.add("card-footer"),e.appendChild(p);const u=document.createElement("a");if(u.classList.add("card-footer-item","is-unselectable","app"),u.setAttribute("data-app-categories",t.meta.categories.toString()),u.setAttribute("data-app-name",t.name),u.setAttribute("data-app-slug",t.slug),u.setAttribute("lang","en"),u.innerText=window.lang.translate("app-details"),p.appendChild(u),navigator.share){const e=document.createElement("a");e.classList.add("card-footer-item","is-unselectable"),e.setAttribute("lang","en"),e.innerText=window.lang.translate("share-app"),e.onclick=function(){navigator.share({title:t.name,text:t.description,url:"https://store.openkaios.top/#"+t.slug}).then((function(){console.log(`[Index Controller] Shared app '${t.slug}' successfully.`)})).catch((function(e){console.error(`[Index Controller] Could not share app '${t.slug}': `+e)}))},p.appendChild(e)}else if(navigator.clipboard){const e=document.createElement("a");e.classList.add("card-footer-item","is-unselectable"),e.setAttribute("lang","en"),e.innerText=window.lang.translate("copy-app"),e.onclick=function(){navigator.clipboard.writeText("https://store.openkaios.top/#"+t.slug).then((function(){console.log(`[Index Controller] Copied app '${t.slug}' to clipboard successfully.`)})).catch((function(e){console.error(`[Index Controller] Could not copy app '${t.slug}' to clipboard: `+e)}))},p.appendChild(e)}switch(appCardColumn){case 0:appCardColumn=1;break;case 1:appCardColumn=2;break;case 2:appCardColumn=0}}appCardsContainerElement.onclick=function(t){if(t.target.classList.contains("app")){const e=t.target.getAttribute("data-app-categories").split(",")[0];if(e in StoreDbAPI.db.apps.categorical){const a=StoreDbAPI.db.apps.categorical[e][t.target.getAttribute("data-app-name")];if(a){if(a.name?(appDetailsModal.content.name.innerText=a.name,appDownloadsModal.content.name.innerText=a.name):(appDetailsModal.content.name.innerText="Unknown app name",appDownloadsModal.content.name.innerText="Unknown app name"),a.icon?(appDetailsModal.content.icon.src=a.icon,appDownloadsModal.content.icon.src=a.icon):(appDetailsModal.content.icon.src="icons/default-icon.png",appDownloadsModal.content.icon.src="icons/default-icon.png"),a.screenshots.length>0){appDetailsModal.content.screenshots.container.style.display="initial",appDetailsModal.content.screenshots.scroller.innerHTML="",appDetailsModal.content.descriptionSeparator.classList.remove("is-hidden");for(const t of a.screenshots){const e=document.createElement("img");e.style.padding="4px",e.src=t,appDetailsModal.content.screenshots.scroller.appendChild(e)}}else appDetailsModal.content.screenshots.container.style.display="none",appDetailsModal.content.descriptionSeparator.classList.add("is-hidden");a.description?appDetailsModal.content.description.innerText=a.description:appDetailsModal.content.description.innerText="No description.",a.meta.categories?appDetailsModal.content.categories.innerText=generateReadableCategories(a.meta.categories):appDetailsModal.content.categories.innerText="Unknown",a.author?"string"==typeof a.author?appDetailsModal.content.authors.innerText=a.author:Array.isArray(a.author)&&(appDetailsModal.content.authors.innerText=separateArrayCommas(a.author)):appDetailsModal.content.authors.innerText="Unknown",a.maintainer?"string"==typeof a.maintainer?appDetailsModal.content.maintainers.innerText=a.maintainer:Array.isArray(a.maintainer)&&(appDetailsModal.content.maintainers.innerText=separateArrayCommas(a.maintainer)):appDetailsModal.content.maintainers.innerText="Unknown",a.download.version?appDetailsModal.content.version.innerText=a.download.version:appDetailsModal.content.version.innerText="Unknown",a.type?appDetailsModal.content.type.innerText=a.type:appDetailsModal.content.type.innerText="Unknown",a.locales?"string"==typeof a.locales?appDetailsModal.content.locales.innerText=a.locales:Array.isArray(a.locales)&&(appDetailsModal.content.locales.innerText=separateArrayCommas(a.locales)):appDetailsModal.content.locales.innerText="Unknown",void 0!==a.has_ads?appDetailsModal.content.has_ads.innerText=window.lang.translate("ads")+": "+a.has_ads:appDetailsModal.content.has_ads.innerText=window.lang.translate("ads")+": Unknown",void 0!==a.has_tracking?appDetailsModal.content.has_tracking.innerText=window.lang.translate("tracking")+": "+a.has_tracking:appDetailsModal.content.has_tracking.innerText=window.lang.translate("tracking")+": Unknown",a.license?appDetailsModal.content.license.innerText=a.license:appDetailsModal.content.license.innerText="Unknown",StoreDbAPI.db.apps.downloadCounts[a.slug]?appDetailsModal.content.downloadCount.innerText=StoreDbAPI.db.apps.downloadCounts[a.slug]:appDetailsModal.content.downloadCount.innerText="Unknown",reloadAppRatings(a.slug),a.download.url?(appDetailsModal.buttons.download.classList.remove("is-hidden"),appDownloadsModal.buttons.download.classList.remove("is-hidden"),appDownloadsModal.buttons.download.setAttribute("data-app-download",a.download.url),appDownloadsModal.buttons.download.setAttribute("data-app-appid",a.slug),appDownloadsModal.content.qrcode.innerHTML="",new QRCode(appDownloadsModal.content.qrcode,"openkaios:"+a.slug)):(appDetailsModal.buttons.download.classList.add("is-hidden"),appDownloadsModal.buttons.download.classList.add("is-hidden")),a.website?(appDetailsModal.buttons.website.classList.remove("is-hidden"),appDetailsModal.buttons.website.setAttribute("data-app-website",a.website)):appDetailsModal.buttons.website.classList.add("is-hidden"),a.git_repo?(appDetailsModal.buttons.repo.classList.remove("is-hidden"),appDetailsModal.buttons.repo.setAttribute("data-app-repo",a.git_repo)):appDetailsModal.buttons.repo.classList.add("is-hidden"),a.donation?(appDetailsModal.buttons.donation.style.display="initial",appDetailsModal.buttons.donation.setAttribute("data-app-donate",a.donation)):appDetailsModal.buttons.donation.style.display="none",isUserLoggedIn?(appDetailsModal.content.ratings.notLoggedIn.classList.add("is-hidden"),appDetailsModal.content.ratings.loggedIn.container.classList.remove("is-hidden")):(appDetailsModal.content.ratings.loggedIn.container.classList.add("is-hidden"),appDetailsModal.content.ratings.notLoggedIn.classList.remove("is-hidden")),appDetailsModal.controller.show()}else bulmaToast.toast({message:window.lang.translate("app-exist-error")+' "'+e+'"!',type:"is-danger"})}else bulmaToast.toast({message:window.lang.translate("category-exist-error-1")+' "'+e+'" '+window.lang.translate("category-exist-error-2"),type:"is-danger"})}},document.getElementById("scrolltop-fab").onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};const reloadButton=document.getElementById("reload-button"),sortSelect=document.getElementById("sort-select");sortSelect.onchange=function(t){reloadButton.classList.add("is-loading");const e=document.getElementById("sort-icon");switch(e.classList.remove("fa-sort-alpha-down","fa-fire-alt","fa-tags"),t.target.value){case"alphabetical":e.classList.add("fa-sort-alpha-down");break;case"popularity":e.classList.add("fa-fire-alt");break;case"categorical":e.classList.add("fa-tags")}sortSelect.disabled=!0,reloadButton.disabled=!0;for(const t of appCardsColumnElements)t.innerHTML="";appCardColumn=0,listAppsByCategory(currentSelectedCategory,t.target.value).then((function(t){for(const e in t)addAppCard(t[e]);reloadButton.classList.remove("is-loading"),sortSelect.disabled=!1,reloadButton.disabled=!1;try{const t=window.location.hash.split("#")[1];void 0!==t?(document.querySelector(`[data-app-slug="${t}"]`).click(),window.location.hash=t):window.location.hash=""}catch(t){window.location.hash="",console.log(t)}bulmaToast.toast({message:window.lang.translate("app-sort-success"),type:"is-success"})})).catch((function(t){reloadButton.classList.remove("is-loading"),sortSelect.disabled=!1,reloadButton.disabled=!1,bulmaToast.toast({message:window.lang.translate("app-sort-success"),type:"is-danger"}),console.log(t)}))};const categoriesTabsElement=document.getElementById("categories-tabs");categoriesTabsElement.onclick=function(t){const e=t.target.classList;if((e.contains("category-link")||e.contains("category-tab"))&&(currentSelectedCategory=t.target.getAttribute("data-category-id"),currentSelectedCategory in StoreDbAPI.db.categories)){for(const t of document.querySelectorAll(".category-tab"))t.getAttribute("data-category-id")===currentSelectedCategory?t.classList.add("is-active"):t.classList.remove("is-active");sortSelect.dispatchEvent(new Event("change"))}};const userDetails={username:null,logintoken:null},userModal={controller:new BulmaModal("#user-modal"),content:{usernameInput:document.getElementById("user-modal-username-input"),logintokenInput:document.getElementById("user-modal-logintoken-input"),loginFailedBlurb:document.getElementById("user-modal-login-failed-blurb"),saveLoginCheckbox:document.getElementById("user-modal-save-login-checkbox")},buttons:{login:document.getElementById("user-modal-login-button")}};userModal.controller.addEventListener("modal:show",(function(){let t=!1;const e=localStorage.getItem("webstore-ratings-username");null!==e?(userModal.content.usernameInput.value=e,t=!0):userModal.content.usernameInput.value="";const a=localStorage.getItem("webstore-ratings-logintoken");null!==a?(userModal.content.logintokenInput.value=a,t=!0):userModal.content.logintokenInput.value="",t&&(userModal.content.saveLoginCheckbox.checked=!0)})),userModal.controller.addEventListener("modal:close",(function(){userModal.content.loginFailedBlurb.classList.add("is-hidden")}));let isUserLoggedIn=!1;const userButton={button:document.getElementById("user-button"),icon:document.getElementById("user-icon")};function loginSuccessCb(){userModal.content.usernameInput.disabled=!1,userModal.content.logintokenInput.disabled=!1,userModal.buttons.login.disabled=!1,userModal.buttons.login.classList.remove("is-loading"),userButton.button.classList.remove("is-link"),userButton.button.classList.add("is-danger"),userButton.icon.classList.add("fa-sign-out-alt"),userButton.icon.classList.remove("fa-user"),userModal.controller.close(),isUserLoggedIn=!0}userButton.button.onclick=function(){isUserLoggedIn?(userDetails.username=null,userDetails.logintoken=null,userButton.button.classList.remove("is-danger"),userButton.button.classList.add("is-link"),userButton.icon.classList.add("fa-user"),userButton.icon.classList.remove("fa-sign-out-alt"),isUserLoggedIn=!1):userModal.controller.show()},userModal.buttons.login.onclick=function(){userModal.buttons.login.classList.add("is-loading"),userModal.buttons.login.disabled=!0,userModal.content.loginFailedBlurb.classList.add("is-hidden"),userDetails.username=userModal.content.usernameInput.value,userDetails.logintoken=userModal.content.logintokenInput.value,userModal.content.usernameInput.disabled=!0,userModal.content.logintokenInput.disabled=!0,StoreDbAPI.loginToRatingsAccount(userDetails.username,userDetails.logintoken).then((function(t){loginSuccessCb()})).catch((function(t){StoreDbAPI.createRatingsAccount(userDetails.username,userDetails.logintoken).then((function(t){loginSuccessCb()})).catch((function(e){userModal.content.usernameInput.disabled=!1,userModal.content.logintokenInput.disabled=!1,userModal.buttons.login.disabled=!1,userModal.buttons.login.classList.remove("is-loading"),userModal.content.loginFailedBlurb.classList.remove("is-hidden"),console.error(t)}))}))},userModal.content.saveLoginCheckbox.onchange=function(t){t.target.checked?(localStorage.setItem("webstore-ratings-username",userModal.content.usernameInput.value),localStorage.setItem("webstore-ratings-logintoken",userModal.content.logintokenInput.value)):(localStorage.removeItem("webstore-ratings-username"),localStorage.removeItem("webstore-ratings-logintoken"))};const updateModal={controller:new BulmaModal("#webstore-update-modal"),buttons:{update:document.getElementById("webstore-update-modal-update-button")}};function reloadData(){sortSelect.disabled=!0,reloadButton.classList.add("is-loading"),reloadButton.disabled=!0;const t=document.getElementById("webstore-github-commit-label");t.classList.remove("is-danger"),categoriesTabsElement.innerHTML="";for(const t of appCardsColumnElements)t.innerHTML="";StoreDbAPI.loadData().then((function(e){for(const t in e.categories){const a={tab:document.createElement("li"),link:{container:document.createElement("a"),content:{icon:{container:document.createElement("span"),icon:document.createElement("i")},text:document.createElement("span")}}};a.tab.setAttribute("data-category-id",t),a.tab.classList.add("category-tab"),categoriesTabsElement.appendChild(a.tab),a.link.container.setAttribute("data-category-id",t),a.link.container.classList.add("category-link"),a.tab.appendChild(a.link.container),a.link.content.icon.container.setAttribute("data-category-id",t),a.link.content.icon.container.classList.add("icon","is-small","category-link"),a.link.container.appendChild(a.link.content.icon.container);for(const n of e.categories[t].icon.split(" "))a.link.content.icon.icon.classList.add(n);a.link.content.icon.icon.classList.add("category-link"),a.link.content.icon.icon.setAttribute("data-category-id",t),a.link.content.icon.container.appendChild(a.link.content.icon.icon),a.link.content.text.innerText=e.categories[t].name,a.link.content.text.setAttribute("data-category-id",t),a.link.content.text.classList.add("category-link"),a.link.container.appendChild(a.link.content.text)}document.querySelector(`.category-tab[data-category-id*="${currentSelectedCategory}"]`).classList.add("is-active"),sortSelect.dispatchEvent(new Event("change"));const a=document.getElementById("data-generated-time-label");e.generatedAt&&(a.innerText=dayjs(e.generatedAt).fromNow(),a.classList.remove("is-danger"),a.classList.add("is-success"));const n=document.getElementById("data-total-apps-label");n.innerText=e.apps.raw.length,n.classList.remove("is-danger"),n.classList.add("is-success");const o=new Worker("assets/js/index/workers/githubcommit-worker.js");o.onmessage=function(e){o.terminate(),null!==e.data&&(t.innerText=e.data.substring(0,7),t.setAttribute("href","https://github.com/openkaios/openkaios-store-web/blob/"+e.data+"/src/"),t.classList.remove("is-danger"),t.classList.add("is-success"),isFirstInitCompleted||(currentWebStoreVersion=e.data,isFirstInitCompleted=!0),e.data!==currentWebStoreVersion&&updateModal.controller.show())},o.postMessage(null),bulmaToast.toast({message:window.lang.translate("data-load-success"),type:"is-success"})})).catch((function(t){bulmaToast.toast({message:window.lang.translate("data-load-error"),type:"is-danger"}),console.error(t)}))}updateModal.buttons.update.onclick=function(){location.reload()},reloadButton.onclick=function(){reloadData()},reloadData();