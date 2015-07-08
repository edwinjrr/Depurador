$(document).ready(function(){

// Función para los botones anterior y siguiente de los tabs.

  $('.prevtab').click(function() {
    $('#mainTab li.active').prev('li').find('a').tab('show');
  });

  $('.nexttab').click(function() {
    $('#mainTab li.active').next('li').find('a').tab('show');
  });

  $('.dinero').mask('000,000,000,000,000', {reverse: true});

  //$("[type='checkbox']").bootstrapSwitch();
  
});