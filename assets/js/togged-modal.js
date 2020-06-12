$("#confirm-block").on("show.bs.modal", function (e) {
  $(this).find(".btn-ok").attr("href", $(e.relatedTarget).data("href"));
});
$("#confirm-unblock").on("show.bs.modal", function (e) {
  $(this).find(".btn-ok").attr("href", $(e.relatedTarget).data("href"));
});

$("#confirm-modal").on("show.bs.modal", function (e) {
  $(this).find(".btn-ok").attr("href", $(e.relatedTarget).data("href"));
});

$("#exampleRepeatPassword").blur(function () {
  let repeatPass = $("#exampleRepeatPassword").val();
  let password = $("#exampleInputPassword").val();
  if (password !== repeatPass) {
    $("#errorMessage").attr("style", "color:red;");
    $("#errorMessage").html("Nhập lại mật khẩu không khớp");
  } else {
    $("#errorMessage").attr("style", "color:green;");
    $("#errorMessage").html("");
  }
});
