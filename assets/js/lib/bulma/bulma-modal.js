class BulmaModal{constructor(e){this.elem=document.querySelector(e),this.elem.children[0].style.animationDuration="200ms",this.elem.children[1].style.animationDuration="200ms",this.close_data()}animateCSS(e,t,a){var i=this.elem.children[0],n=this.elem.children[1];i.classList.add("animate__"+e),n.classList.add("animate__"+t),i.addEventListener("animationend",(function t(){i.classList.remove("animate__"+e),i.removeEventListener("animationend",t)})),n.addEventListener("animationend",(function e(){n.classList.remove("animate__"+t),n.removeEventListener("animationend",e),"function"==typeof a&&a()}))}show(){this.elem.children[1].scrollTop=0,this.animateCSS("fadeIn","zoomIn"),this.elem.classList.add("is-active"),this.on_show()}close(){var e=this;this.animateCSS("fadeOut","zoomOut",()=>{e.elem.classList.remove("is-active"),e.on_close()})}close_data(){var e=this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background"),t=this;e.forEach((function(e){e.addEventListener("click",(function(){t.animateCSS("fadeOut","zoomOut",(function(){t.elem.classList.remove("is-active")})),t.on_close()}))}))}on_show(){var e=new Event("modal:show");this.elem.dispatchEvent(e)}on_close(){var e=new Event("modal:close");this.elem.dispatchEvent(e)}addEventListener(e,t){this.elem.addEventListener(e,t)}}