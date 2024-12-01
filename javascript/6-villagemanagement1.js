document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const villageManagementBtn = document.getElementById("village-management-btn");
    const villageManagementSection = document.getElementById("village-management-section");
  
    // Hide all content sections by default
    const allContentSections = document.querySelectorAll(".content");
    allContentSections.forEach(section => section.style.display = "none");
  
    // Add click event to "Village Management" button
    villageManagementBtn.addEventListener("click", function () {
      // Hide all content sections
      allContentSections.forEach(section => (section.style.display = "none"));
  
      // Show the Village Management section
      villageManagementSection.style.display = "block";
    });
  });
  