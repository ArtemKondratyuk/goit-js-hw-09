!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=null;e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,a=setInterval((function(){t.parentNode.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),e.disabled=!1}),1e3)})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.95f8661c.js.map