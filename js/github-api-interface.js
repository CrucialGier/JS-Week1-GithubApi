var getRepos = require('./../js/github-api.js').getRepos;

$(document).ready(function() {
  $("#query").click(function(event) {
    event.preventDefault();
    getRepos($("#requestedUser").val());
    $('#profileLink').show();
    $('#repositoryLink').show();
    });
  });
