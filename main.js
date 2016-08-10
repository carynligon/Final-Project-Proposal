$.ajax({
  url: 'https://api.traitify.com/v1/assessments',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic nmn8hkna1nbui4fm9vv73kctl1:x'
    },
  type: 'POST',
  data: JSON.stringify({"deck_id": "career-deck"}),
  success: function(data) {
    console.log(data);
  }
});
