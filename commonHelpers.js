import{f as c,i as a}from"./assets/vendor-77e16229.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();document.querySelector('input[type="text"]');const i=document.querySelector('button[type="button"]');document.querySelector("[data-days]");document.querySelector("[data-hours]");document.querySelector("[data-minutes]");document.querySelector("[data-seconds]");i.disabled=!0;const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){r[0]<new Date?(a.error({message:"Please choose a date in the future",position:"topRight"}),i.disabled=!0):(r[0],i.disabled=!1)}};new c("input",d);
//# sourceMappingURL=commonHelpers.js.map
