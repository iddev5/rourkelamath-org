export function accordianCallback(child) {
	for (let i = 0; i < child.length; i++) {
	  let ac = child[i];      
	  ac.onclick = function () {
	    this.classList.toggle("active");

	    let panel = this.nextElementSibling;
	    if (panel.style.maxHeight) {
	      panel.style.maxHeight = null;
			this.children[0].classList.replace("fa-angle-down", "fa-angle-up")
	    } else {
			this.children[0].classList.replace("fa-angle-up", "fa-angle-down")
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    }
	  }
	}
}
