async function addPost(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;
    var newPostContainerEL = document.querySelector("#new-post-container");
    var dashboardContainerEl = document.querySelector("#dashboard-container");
  
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
      newPostContainerEL.classList.add("hide");
      dashboardContainerEl.classList.remove("hide");
    } else {
      alert(response.statusText);
    }
  }
  document.querySelector("#new-post-form").addEventListener("submit", addPost);
  
  function newFormHandler(event) {
    console.log("hi");
    var newPostContainerEL = document.querySelector("#new-post-container");
    var dashboardContainerEl = document.querySelector("#dashboard-container");
  
    newPostContainerEL.classList.remove("hide");
    dashboardContainerEl.classList.add("hide");
  }
  
  document
    .querySelector("#add-post-btn")
    .addEventListener("click", newFormHandler);
  
  const editbtns = document.querySelectorAll("button.edit-review-btn");
  for (editbtn of editbtns) {
    editbtn.addEventListener("click", function (event) {
      event.preventDefault();
  
      const testUserId = $(this)[0].id.split(" ")[1];
    });
  }
  
  var reviewContent;
  var userId;
  var post_id;
  
  $("#staticBackdrop").on("show.bs.modal", function (event) {
    var myVal = $(event.relatedTarget)[0].id.split(" ")[0];
    var reviewContent = $(event.relatedTarget)[0].value;
    userId = $(event.relatedTarget)[0].id.split(" ")[0].replace("user-", "");
    post_id = $(event.relatedTarget)[0].id.split(" ")[1].replace("edit-", "");
    $("#edit-post-content").text(reviewContent);
  });
  
  async function editReviewHandler(event) {
    event.preventDefault();
  
    console.log(userId);
    console.log(post_id);
  
    const reviewContent = document.querySelector("#edit-post-content").value;
    console.log(reviewContent);
  
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
      newPostContainerEL.classList.add("hide");
      dashboardContainerEl.classList.remove("hide");
    } else {
      alert(response.statusText);
    }
  }
  
  document
    .querySelector('button[name="save-btn-modal"]')
    .addEventListener("click", editReviewHandler);
  
  function deletereviewtest(event) {
    event.preventDefault();
  
    console.log($(this)[0].id.split(" ")[1].replace("edit-", ""));
  }
  
  document
    .querySelector(".delete-review-btn")
    .addEventListener("click", deletereviewtest);
  