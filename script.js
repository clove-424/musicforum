function hamburgerMenu() {
  var x = document.getElementById("myNavigation");
  if (x.className == "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#comment-form");
    const list = document.querySelector("#content");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const description = document.querySelector("#myComment").value;
      const thread = document.createElement("div");
      thread.className = "threads";
      const d = new Date();
      var day = d.getDate() + " " + d.toLocaleString('default', { month: 'long' }) + " " + d.getFullYear();
      thread.innerHTML = `\t
      <small>${day}</small>
      <p>\t${description}</p>
      <a href="#">\tReply</a>
      `;
      list.appendChild(thread);
      form.reset();
    });
  });

