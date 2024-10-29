const handlePassword = () => {
  const pass = $(".password-first input").val();
  const confirmPass = $(".confirm-password input").val();

  if (confirmPass.length > 2) {
    if (pass !== confirmPass) {
      $(".confirm-password input").parent().find("span").remove();
      $(".confirm-password input")
        .parent()
        .append("<span>Password must be same</span>");
    } else {
      $(".confirm-password input").parent().find("span").remove();
    }
  }
  console.log("dsada");
};

$(".password-first input").on("input", handlePassword);
$(".confirm-password input").on("input", handlePassword);
