function hamburgerMenu() {
  var x = document.getElementById("myNavigation");
  if (x.className == "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

// Add event listener to the thread form submission
// This will handle the thread submission and save it to localStorage
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#comment-form");
  const list = document.querySelector("#content");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = "@" + document.querySelector("#myName").value;
    const description = document.querySelector("#myComment").value;
    const thread = document.createElement("div");
    thread.className = "thread";

    const d = new Date();
    let day = d.toLocaleString('default', { month: 'long' }) + " " + d.getDate() + ", " + d.getFullYear();
    const threadId = Date.now();
    thread.dataset.threadId = threadId;

    const initialComment = {
      user,
      description,
      date: day,
      threadId
    };

    let threads = JSON.parse(localStorage.getItem("threads")) || [];
    threads.push(initialComment);
    localStorage.setItem("threads", JSON.stringify(threads)); 
    
    thread.innerHTML = `
    <a href="#">${user}</a><small>${day}</small>
    <p>${description}</p>
			<a href="#" class="reply-link" onclick='alert("Reply feature is not available. Create a thread instead.")'>Reply</a>
    	<form class="reply-form" style="display: none;">
				<input type="text" name="myUsername" id="myUsername" required>
				<textarea name="myReply" id="myReply" cols="40" rows="4" required></textarea>
				<button type="submit" id="newReplyButton">Post</button> 
		  </form>
		<div class="reply" data-thread-id="${threadId}"></div>
    `;

    list.appendChild(thread);
    form.reset();
  });
});

// loads threads from localStorage on Page Load:
document.addEventListener("DOMContentLoaded", () => {
  let savedThreads = JSON.parse(localStorage.getItem("threads")) || [];

  savedThreads.forEach(thread => {
    const threadDiv = document.createElement("div");
    threadDiv.className = "thread";
    threadDiv.dataset.threadId = thread.threadId;

    threadDiv.innerHTML = `
      <a href="#">${thread.user}</a>
      <small>${thread.date}</small>
      <p>${thread.description}</p>
			<a href="#" class="reply-link" onclick='alert("Reply feature is not available. Create a thread instead.")'>Reply</a>
      <form class="reply-form" style="display: none;">
        <input type="text" name="myUsername" class="myUsername" required>
        <textarea name="myReply" class="myReply" cols="40" rows="4" required></textarea>
        <button type="submit" class="newReplyButton">Post</button> 
      </form>
      <div class="reply-container"></div>
    `;

    document.querySelector("#content").appendChild(threadDiv); // ✅ Ensure threads load in correct container
  });
});


