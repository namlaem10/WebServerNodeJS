// Call the dataTables jQuery plugin
$(document).ready(function () {
  $("#dataTable").DataTable({
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Vietnamese.json",
    },
  });
});
