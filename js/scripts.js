var total = function(inventor, telephone, relativity, art, technology) {
  return inventor + telephone + relativity + art + technology;
};


$(document).ready(function() {
  $("button#btn").click(function() {

    var inventor = parseInt($("input:radio[name=inventor]:checked").val());
    var telephone = parseInt($("input:radio[name=telephone]:checked").val());
    var relativity = parseInt($("input:radio[name=relativity]:checked").val());
    var art = parseInt($("input:radio[name=art]:checked").val());
    var technology = parseInt($("input:radio[name=technology]:checked").val());
    var result = total(inventor, telephone, relativity, art, technology);
    $("#output").text(result);
    //event.preventDefault()
    //alert(result);
  });
});
