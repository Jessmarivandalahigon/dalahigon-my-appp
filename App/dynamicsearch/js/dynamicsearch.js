document.getElementById('searchInput').addEventListener('input', function() {
    var searchQuery = this.value.trim().toLowerCase();
    var listItems = document.querySelectorAll('#resultsList li');
  
    listItems.forEach(function(item) {
      var text = item.textContent.toLowerCase();
      if (text.includes(searchQuery)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  document.querySelector('.search-icon').addEventListener('click', function() {
    document.getElementById('searchInput').focus();
  });
  