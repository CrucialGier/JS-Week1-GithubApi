var getRepos = require('./../js/template.js').getRepos;

$(document).ready(function() {
  $("#query").click(function(event) {
    event.preventDefault();
    getRepos($("#requestedUser").val());
    $('#profileLink').show();
    $('#repositoryLink').show();
    });
  });
