var allAppsRaw=[],allAppsSorted={};const appsListElement=document.getElementById("apps-list");var appDownloadsModal={controller:new BulmaModal("#app-download-modal"),content:{name:document.getElementById("app-download-modal-app-name"),icon:document.getElementById("app-download-modal-app-icon"),qrcode:document.getElementById("app-download-modal-app-download-qrcode")},buttons:{download:document.getElementById("app-download-modal-download-button")}};appDownloadsModal.buttons.download.onclick=function(e){window.open(e.target.getAttribute("data-app-download"),"_blank")};var appDetailsModal={controller:new BulmaModal("#app-details-modal"),content:{name:document.getElementById("app-details-modal-app-name"),icon:document.getElementById("app-details-modal-app-icon"),screenshots:{container:document.getElementById("app-details-modal-app-screenshots-container"),columns:document.getElementById("app-details-modal-app-screenshots")},description:document.getElementById("app-details-modal-app-description"),categories:document.getElementById("app-details-modal-app-categories"),maintainer:document.getElementById("app-details-modal-app-maintainer"),version:document.getElementById("app-details-modal-app-version"),type:document.getElementById("app-details-modal-app-type"),has_ads:document.getElementById("app-details-modal-app-has_ads"),has_tracking:document.getElementById("app-details-modal-app-has_tracking"),license:document.getElementById("app-details-modal-app-license")},buttons:{download:document.getElementById("app-details-modal-download-button"),donation:document.getElementById("app-details-modal-donation-button")}};function addAppCard(e){appsListElement.appendChild(document.createElement("br"));var t=document.createElement("div");t.classList.add("card"),t.id=e.slug,appsListElement.appendChild(t);var a=document.createElement("div");a.classList.add("card-content"),t.appendChild(a);var n=document.createElement("div");n.classList.add("media"),a.appendChild(n);var o=document.createElement("div");o.classList.add("media-left"),n.appendChild(o);var d=document.createElement("figure");d.classList.add("image","is-48x48","is-unselectable");var s=document.createElement("img");s.src=e.icon,d.appendChild(s),o.appendChild(d);var l=document.createElement("div");l.classList.add("media-content"),n.appendChild(l);var i=document.createElement("p");i.classList.add("title","is-4"),i.innerText=e.name,l.appendChild(i);var p=document.createElement("p");p.classList.add("subtitle","is-6");var c="";const r=e.categories.length;for(const t in e.categories){const a=e.categories[t],n=allCategories[a].name;c+=t+1<r?n?n+", ":a+", ":n?n+" ":a}p.innerText=c,l.appendChild(p);var m=document.createElement("div");m.classList.add("content"),m.innerText=e.description,a.appendChild(m);var u=document.createElement("footer");u.classList.add("card-footer"),t.appendChild(u);var g=document.createElement("a");g.classList.add("card-footer-item","is-unselectable","app"),g.setAttribute("data-app-categories",e.categories.toString()),g.setAttribute("data-app-name",e.name),g.innerText="View app details",u.appendChild(g);var b=document.createElement("a");b.classList.add("card-footer-item","is-unselectable","share"),b.href="#"+e.slug,b.innerText="Copy link to app",u.appendChild(b)}function loadAppsFromCategories(){var e=[];function t(t,a){const n=allAppsSorted[t][a];addAppCard({icon:n.icon,name:n.name,description:n.description,categories:n.meta.categories,slug:n.slug}),e.push(n.name)}if(document.getElementById("loading-progress").removeAttribute("value"),appsListElement.innerHTML="","all"===selectedCategory)for(const a in allCategories)for(const n in allAppsSorted[a])e.includes(n)||t(a,n);else if(selectedCategory in allAppsSorted)for(const a in allAppsSorted[selectedCategory])e.includes(a)||t(selectedCategory,a);document.getElementById("loading-progress").setAttribute("value",0),window.location.hash=window.location.hash}function loadAppList(e){e}appDetailsModal.controller.addEventListener("modal:show",(function(){document.getElementsByTagName("html")[0].classList.add("is-clipped")})),appDetailsModal.controller.addEventListener("modal:close",(function(){document.getElementsByTagName("html")[0].classList.remove("is-clipped")})),appDetailsModal.buttons.download.onclick=function(e){appDownloadsModal.controller.show()},appDetailsModal.buttons.donation.onclick=function(e){window.open(e.target.getAttribute("data-app-donate"),"_blank")},appsListElement.onclick=function(e){var t=e.target.classList;if(t.contains("app")){const t=e.target.getAttribute("data-app-categories").split(",")[0];if(t in allAppsSorted){const s=allAppsSorted[t][e.target.getAttribute("data-app-name")];if(s){if(s.name?(appDetailsModal.content.name.innerText=s.name,appDownloadsModal.content.name.innerText=s.name):(appDetailsModal.content.name.innerText="Unknown app name",appDownloadsModal.content.name.innerText="Unknown app name"),s.icon?(appDetailsModal.content.icon.src=s.icon,appDownloadsModal.content.icon.src=s.icon):(appDetailsModal.content.icon.src="icons/default-icon.png",appDownloadsModal.content.icon.src="icons/default-icon.png"),s.screenshots)for(var a of(appDetailsModal.content.screenshots.container.style.display="initial",appDetailsModal.content.screenshots.columns.innerHTML="",s.screenshots)){var n=document.createElement("div");n.classList.add("column","is-half"),appDetailsModal.content.screenshots.columns.appendChild(n);var o=document.createElement("img");o.src=a,n.appendChild(o)}else appDetailsModal.content.screenshots.container.style.display="none";if(s.description?appDetailsModal.content.description.innerText=s.description:appDetailsModal.content.description.innerText="No description.",s.meta.categories){var d="";for(const e of s.meta.categories){const t=allCategories[e].name;d+=t?t+" ":e}appDetailsModal.content.categories.innerHTML="Categories: <b>"+d+"</b>"}else appDetailsModal.content.categories.innerHTML="Categories: <b>unknown</b>";s.author?appDetailsModal.content.maintainer.innerHTML="Author(s): <b>"+s.author+"</b>":s.maintainer?appDetailsModal.content.maintainer.innerHTML="Maintainer(s): <b>"+s.maintainer+"</b>":appDetailsModal.content.maintainer.innerHTML="Authors/maintainers: <b>unknown</b>",s.download.version?appDetailsModal.content.version.innerHTML="Version: <b>"+s.download.version+"</b>":appDetailsModal.content.version.innerHTML="Version: <b>unknown</b>",s.type?appDetailsModal.content.type.innerHTML="Type: <b>"+s.type+"</b>":appDetailsModal.content.type.innerHTML="Type: <b>unknown</b>",void 0!==s.has_ads?appDetailsModal.content.has_ads.innerHTML="Ads: <b>"+s.has_ads+"</b>":appDetailsModal.content.has_ads.innerHTML="Ads: <b>unknown</b>",void 0!==s.has_tracking?appDetailsModal.content.has_tracking.innerHTML="Tracking: <b>"+s.has_tracking+"</b>":appDetailsModal.content.has_tracking.innerHTML="Tracking: <b>unknown</b>",s.license?appDetailsModal.content.license.innerHTML="License: <b>"+s.license+"</b>":appDetailsModal.content.license.innerHTML="License: <b>unknown</b>",s.download.url?(appDetailsModal.buttons.download.style.display="initial",appDetailsModal.buttons.download.setAttribute("data-app-download",s.download.url),appDownloadsModal.buttons.download.style.display="initial",appDownloadsModal.buttons.download.setAttribute("data-app-download",s.download.url),appDownloadsModal.content.qrcode.innerHTML="",new QRCode(appDownloadsModal.content.qrcode,"bhackers:"+s.slug)):(appDetailsModal.buttons.download.style.display="none",appDownloadsModal.buttons.download.style.display="none"),s.donation?(appDetailsModal.buttons.donation.style.display="initial",appDetailsModal.buttons.donation.setAttribute("data-app-donate",s.donation)):appDetailsModal.buttons.donation.style.display="none",appDetailsModal.controller.show()}else bulmaToast.toast({message:'App does not exist in category "'+t+'"!',type:"is-danger",position:"top-center",closeOnClick:!0,pauseOnHover:!0,animate:toastAnimateOptions})}else bulmaToast.toast({message:'Given category "'+t+'" does not exist!',type:"is-danger",position:"top-center",closeOnClick:!0,pauseOnHover:!0,animate:toastAnimateOptions})}else if(t.contains("share")){var s=document.getElementById("link-ghost");s.innerText=window.location,s.select(),document.execCommand("copy"),bulmaToast.toast({message:"Copied sharable link to clipboard!",type:"is-success",position:"top-center",closeOnClick:!0,closeOnHover:!0,animate:toastAnimateOptions})}};