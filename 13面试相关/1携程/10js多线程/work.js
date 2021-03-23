this.addEventListener("message", function(e) {
    this.postMessage("You said: " + e.data);
}, false);