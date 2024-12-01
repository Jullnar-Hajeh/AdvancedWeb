document.addEventListener("DOMContentLoaded", function () {
    const tabs = {
      overview: document.getElementById("overview-section"),
      villageManagement: document.getElementById("village-management-section"),
      gallery: document.getElementById("gallery-section"),
    };
  
    // Tab buttons
    document.getElementById("overview-tab").addEventListener("click", () => {
      showTab(tabs.overview);
    });
  
    document.getElementById("village-management-tab").addEventListener("click", () => {
      showTab(tabs.villageManagement);
    });
  
    document.getElementById("gallery-tab").addEventListener("click", () => {
      showTab(tabs.gallery);
    });
  
    function showTab(tab) {
      Object.values(tabs).forEach((t) => t.classList.add("hidden"));
      tab.classList.remove("hidden");
    }
  });
  