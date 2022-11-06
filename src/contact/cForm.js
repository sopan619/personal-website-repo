// function smsSend() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "ourmarqtv@gmail.com",
//     Password: "go2sleep",
//     To: "007cruse@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "A new Contact Enquiry has been submitted.",
//     Body:
//       "Name: " +
//       document.getElementById("name").value +
//       "<br>" +
//       "Email: " +
//       document.getElementById("email").value +
//       "<br>" +
//       "Phone: " +
//       document.getElementById("phone").value +
//       "<br>" +
//       "Message: " +
//       document.getElementById("message").value,
//   }).then((message) => alert("Your Query was delivered Successfully!"));
// }

window.addEventListener("load", function () {
  const f = document.getElementById("my-form");
  f.addEventListener("click", function (e) {
    e.preventDefault();
    const data = new FormData(f);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Success!");
    });
  });
});
