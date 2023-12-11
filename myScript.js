  function showTab(tabId) {
    // Hide all tabs
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active-tab');
    }

    // Show the selected tab
    document.getElementById(tabId).classList.add('active-tab');
  }
