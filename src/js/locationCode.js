function populateFloors() {
  const floorSelect = document.getElementById("floor-select");
  for (let i = 1; i <= 3; i++) {
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = `طابق ${i}`;
    floorSelect.appendChild(option);
  }
}

function populateSections() {
  const sectionSelect = document.getElementById("section-select");
  const sections = ["a", "b", "c", "d", "e"];
  sections.forEach((letter) => {
    const option = document.createElement("option");
    option.value = letter;
    option.textContent = `قسم ${letter.toUpperCase()}`;
    sectionSelect.appendChild(option);
  });
}

function populateShelves() {
  const shelfSelect = document.getElementById("shelf-select");
  for (let i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = `رف ${i}`;
    shelfSelect.appendChild(option);
  }
}

// Calling functions when the padge loads
window.addEventListener("DOMContentLoaded", () => {
  populateFloors();
  populateSections();
  populateShelves();
});
// ---------------------------------------
function locationCode() {
  const floor = document.getElementById("floor-select").value;
  const section = document.getElementById("section-select").value;
  const shelf = document.getElementById("shelf-select").value;

  // Verify that all values are present
  // ---------------------------------------
  if (!floor || !section || !shelf) {
    alert("يرجى اختيار جميع القيم قبل الضغط على موافق.");
    return null;
  }

  const locationCode = `${floor}${section}${shelf}`;
  return locationCode;
}
