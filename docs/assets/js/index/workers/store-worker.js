"use strict";const WORKER_NAME="Store";importScripts("common.js");const stores=["https://openkaios.top/openkaios-store-db/data.json"],downloadCounters=["https://bhackers.uber.space/srs/v1/download_counter/"];onmessage=function(){wLog("log","Store worker started.");var o={categories:{all:{name:"All apps",icon:"fas fa-store"}},apps:{raw:[],categorical:{},downloadCounts:{}},generatedAt:null};function e(){o.categories={},o.apps.raw=[],o.apps.categorical={},o.apps.downloadCounts={}}for(const r of stores){wLog("log","Making request to store: "+r);const s=syncJSONRequest({type:"GET",url:r,timeout:1e4,headers:fixedHeaders});if(s.success){wLog("log",'Received successful response from "'+r+'".');try{var a=s.data;if(a.generated_at&&(wLog("log",'Found data "generated_at".'),o.generatedAt=a.generated_at),a.categories){wLog("log",'Found data "categories".');for(const e in a.categories)o.categories[e]=a.categories[e]}if(a.apps){wLog("log",'Found data "apps".'),o.apps.raw=a.apps;for(const e of o.apps.raw)for(const a of e.meta.categories)o.apps.categorical[a]||(o.apps.categorical[a]={}),o.apps.categorical[a][e.name]||(o.apps.categorical[a][e.name]=e);o.apps.categorical.all||(o.apps.categorical.all={});for(const e in o.categories)for(const a in o.apps.categorical[e])o.apps.categorical.all[a]||(o.apps.categorical.all[a]=o.apps.categorical[e][a])}break}catch(o){wLog("error","Error parsing response from store: "+o),e()}}else wLog("error","Error making request to store: "+s.error),e()}if(o.apps.raw!==[])for(const e of downloadCounters){wLog("log","Making request to download counter: "+e);const a=syncJSONRequest({type:"GET",url:e,timeout:1e4,headers:fixedHeaders});if(a.success)try{wLog("log","Received successful response from: "+e),o.apps.downloadCounts=a.data}catch(o){wLog("error","Error parsing response from download counter: "+o)}else wLog("error","Error making request to download counter: "+a.error)}wLog("log","Store worker completed!"),postMessage(o)};