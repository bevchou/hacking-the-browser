let msg;

document.getElementById("submit").addEventListener("click", function() {
  console.log("submit button clicked!");

  msg = document.getElementById('userText').value;
  console.log("new message: ");
  console.log(msg);
});
// document.getElementById("submit").addEventListener("click", function() {
//     console.log("hello world");
// });
