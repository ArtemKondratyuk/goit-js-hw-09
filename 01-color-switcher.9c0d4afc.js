const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let a=null;e.disabled=!0,t.addEventListener("click",(()=>{t.disabled=!0,a=setInterval((()=>{t.parentNode.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e.disabled=!1}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.9c0d4afc.js.map