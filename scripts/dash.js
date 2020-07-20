$(document).ready(function () {
  var today = new Date();

  $("#From").datepicker({
    dateFormat: "dd-mm-yy",
    autoclose: true,
    minDate: today,
  });

  $("#To").datepicker({
    dateFormat: "dd-mm-yy",
    autoclose: true,
    minDate: today,
  });

  $("#From").on("change", function () {
    form = $(this).datepicker("getDate");
    $("#To").datepicker("option", "minDate", form);
  });

  $("#To").on("change", function () {
    To = $(this).datepicker("getDate");
    $("#From").datepicker("option", "maxDate", To);
  });

  $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
    var min = $("#From").val();
    var max = $("#To").val();
    var date = data[4];
    // console.log(data);
    if (date >= min && date <= max) {
      return true;
    } else {
      return false;
    }
  });

  let table = $("#transations_table").DataTable({
    ajax: "generated.json",
    columns: [
      {
        data: "id",
      },
      {
        data: "name",
      },
      {
        data: "toname",
      },
      {
        data: "balance",
        render: function (data, type, row) {
          return "₹" + data;
        },
      },
      {
        data: "date",
      },
    ],
  });

  $("#From, #To").change(function () {
    let from = $("#From").val();
    let to = $("#To").val();

    if (from != "" && to != "") {
      $(".Transaction_Holder").addClass("show_trans");
      setTimeout(() => $(".Transaction_Holder").addClass("show_opc"), 150);
    }
    table.draw();
  });
});
