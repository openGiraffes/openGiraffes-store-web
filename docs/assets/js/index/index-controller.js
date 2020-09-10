"use strict";const toastAnimateOptions={in:"bounceInDown",out:"bounceOutUp"};document.getElementById("scrolltop-fab").onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})};var storeWorker=new Worker("assets/js/index/workers/store-worker.js");storeWorker.onmessage=function(e){storeWorker.terminate();var t=document.getElementById("data-generated-time-label");e.data.generated_at&&(t.innerText=new Date(e.data.generated_at),t.classList.remove("is-danger"),t.classList.add("is-success"));for(const t in e.data.categories)allCategories[t]=e.data.categories[t];for(var s of(console.log(allCategories),allAppsRaw=e.data.apps,allAppsRaw))for(var a of s.meta.categories)allAppsSorted[a]||(allAppsSorted[a]={}),allAppsSorted[a][s.name]||(allAppsSorted[a][s.name]=s);loadCategoriesTabs(),console.log(allAppsSorted);var o=document.getElementById("page-loaded-time-label");o.innerText=(new Date).toString(),o.classList.remove("is-danger"),o.classList.add("is-success"),bulmaToast.toast({message:"Data loaded successfully!",type:"is-success",position:"top-center",closeOnClick:!0,pauseOnHover:!0,animate:toastAnimateOptions})},storeWorker.postMessage(null);var githubCommitWorker=new Worker("assets/js/index/workers/githubcommit-worker.js");githubCommitWorker.onmessage=function(e){if(githubCommitWorker.terminate(),null!==e.data){var t=document.getElementById("webstore-github-commit-label");t.innerText=e.data.substring(0,7),t.setAttribute("href","https://github.com/jkelol111/webstore/blob/"+e.data+"/src/"),t.classList.remove("is-danger"),t.classList.add("is-success")}},githubCommitWorker.postMessage(null);