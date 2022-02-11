/**
 * MobilePanel.js
 * Version  : 2.0.0
 * License  : MIT
 * Copyright: 2020 Andrey Myagkov andreymyagkov@gmail.com
 * https://github.com/AndreyMyagkov/mobilePanel
 */
class MobilePanel { options = {}; buttonsCounter = 0; $navbar = null; $overlay = null; $mainButton = null; mpTemplate = '<div class="mp__panel"><div class="mp__wr"><button class="mp__button mp__button-main"><span class="mp__line"></span></button></div></div><div class="mp__overlay"></div>'; constructor(t = {}) { this.options = Object.assign({}, t); try { if (this.options.navbar || new Error("Navbar selector not defined"), this.$navbar = document.querySelector(this.options.navbar), null == this.$navbar) throw new Error("Navbar not found"); document.body.classList.add("mp--init"), document.body.insertAdjacentHTML("beforeend", this.mpTemplate), this.$overlay = document.querySelector(".mp__overlay"), this.$mainButton = document.querySelector(".mp__button-main"), this.$navbar.classList.add("mp__nav-panel"), this.$navbar.classList.add("mp__nav-panel_main"), this.$mainButton.addEventListener("click", (t => { t.target.classList.toggle("mp--on"), this.$navbar.classList.toggle("mp--on"), this.$overlay.classList.toggle("mp--on") }), !0), this.$overlay.addEventListener("click", (t => { t.target.classList.remove("mp--on"), document.querySelector(".mp__button").classList.remove("mp--on"), this.$navbar.classList.remove("mp--on") }), !0) } catch (t) { "Error" === t.name && console.info(t) } } show() { document.querySelector(".mp__panel").style.display = "block", document.body.classList.add("mp--init") } hide() { document.querySelector(".mp__panel").style.display = "none", document.body.classList.remove("mp--init") } button(t) { if (!this.$navbar) return null; this.buttonsCounter++; const n = `<button id="mp_button_${this.buttonsCounter}" class="mp__button mp__button-text mp__button-${this.buttonsCounter} \n            ${t.center ? " mp__button-text--center" : ""}">${t.text}</button>`; if (document.querySelector(".mp__wr").insertAdjacentHTML("afterbegin", n), t.navbar && document.querySelector(t.navbar)) { const n = document.querySelector(t.navbar); n.classList.add("mp__nav-panel"), n.classList.add("mp__nav-panel_second"), n.classList.add("mp__nav-panel_second-" + this.buttonsCounter), document.querySelector(".mp__button-" + this.buttonsCounter).addEventListener("click", (t => { t.target.classList.toggle("mp--on"), n.classList.toggle("mp--on"), this.$overlay.classList.toggle("mp--on") }), !0), this.$overlay.addEventListener("click", (() => { n.classList.remove("mp--on") }), !0) } return document.getElementById("mp_button_" + this.buttonsCounter) } notification(t) { if (!this.$navbar) return null; const n = t.button.querySelector(".mp__notification"); null !== n ? n.innerHTML = t.value : t.button.insertAdjacentHTML("afterbegin", '<div class="mp__notification">' + t.value + "</div>") } }