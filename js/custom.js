/*************************************************************************
 * Your custom JS file
 *************************************************************************/

(function () {
  "use strict";

  function init() {
      $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
    // Create the widget object
    var widgets = new edaplotjs.Widgets();

    // Set custom dropdown
    widgets.setCustomDropdown($("#custom-dropdown"), {
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
      //init_index: 0, // You can use this parameter to set the initial item for displaying
      init_text: "Dropdown Menu (With JavaScript)",
      on_item_click_callback: function ($ui) {
        console.log($ui.text());
      }
    });
    widgets.setCustomDropdown($("#custom-dropdown-large"), {
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
      //init_index: 0, // You can use this parameter to set the initial item for displaying
      init_text: "Large Dropdown Menu (With JavaScript)",
      on_item_click_callback: function ($ui) {
        console.log($ui.text());
      }
    });

    // Set custom radio
    $("input:radio[name='playback-speed']").on("change", function () {
      console.log($(this).val());
    });

    // Set custom dialogs
    var $dialog_pdf = widgets.createPdfDialog({
      selector: "#dialog-pdf",
      full_width_button: true
    });
    $("#dialog-btn-1").on("click", function () {
      $dialog_pdf.dialog("open");
    });
      
    var $dialog_pdf2 = widgets.createPdfDialog({
      selector: "#dialog-pdf2",
      full_width_button: true
    });
    $("#dialog-btn-2").on("click", function () {
      $dialog_pdf.dialog("open");
    });
      
    var $dialog_pdf3 = widgets.createPdfDialog({
      selector: "#dialog-pdf3",
      full_width_button: true
    });
    $("#dialog-btn-3").on("click", function () {
      $dialog_pdf.dialog("open");
    });
      
    var $dialog_pdf4 = widgets.createPdfDialog({
      selector: "#dialog-pdf4",
      full_width_button: true
    });
    $("#dialog-btn-4").on("click", function () {
      $dialog_pdf.dialog("open");
    });
      
    var $dialog_1 = widgets.createCustomDialog({
      selector: "#dialog-1",
      full_width_button: true
    });
    $("#dialog-btn-1").on("click", function () {
      $dialog_1.dialog("open");
    });
    var $dialog_2 = widgets.createCustomDialog({
      selector: "#dialog-2",
      action_text: "Action",
      action_callback: function () {
        console.log("action");
      },
      cancel_text: "Back",
      cancel_callback: function () {
        console.log("cancel");
      }
    });
    $("#dialog-btn-2").on("click", function () {
      $dialog_2.dialog("open");
    });
    var $dialog_3 = widgets.createCustomDialog({
      selector: "#dialog-3",
      full_width_button: true,
      parent: $(".content"),
      cancel_callback: function () {
        console.log("cancel");
      },
    });
    $("#dialog-btn-3").on("click", function () {
      $dialog_3.dialog("open");
    });

    // Create the gallery
    var $gallery = $(".gallery");
    // In practice, these images urls may come from your server via http ajax requests.

  }

  $(init);
})();