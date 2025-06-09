function mettreAJour() {
  const nbAdultes = document.getElementById("adultes").value;
  const nbEnfants = document.getElementById("enfants").value;
  const nbChambres = document.getElementById("chambres").value;
  const travail = document.getElementById("travail").checked;

  document.getElementById("reservation-adultes").textContent = "Nombre d'adultes : " + nbAdultes;
  document.getElementById("reservation-enfants").textContent = "Nombre d'enfants : " + nbEnfants + getAgesText();
  document.getElementById("reservation-chambres").textContent = "Nombre de chambres : " + nbChambres;
  document.getElementById("reservation-travail").textContent = "Voyage professionnel : " + (travail ? "Oui" : "Non");
}

function resetForm() {
  document.getElementById("lieu").value = "";
  document.getElementById("arrivee").value = "";
  document.getElementById("depart").value = "";
  document.getElementById("adultes").value = 0;
  document.getElementById("enfants").value = 0;
  document.getElementById("chambres").value = 0;
  document.getElementById("travail").checked = false;
  document.getElementById("ages-container").innerHTML = "";

  document.getElementById("reservation-adultes").textContent = "";
  document.getElementById("reservation-enfants").textContent = "";
  document.getElementById("reservation-chambres").textContent = "";
  document.getElementById("reservation-travail").textContent = "";
}

function genererChampsAge() {
  const nb = +document.getElementById("enfants").value || 0;
  const container = document.getElementById("ages-container");
  container.innerHTML = Array.from({ length: nb }, (_, i) => `
    <div class="mb-3">
      <label class="form-label">Âge enfant ${i + 1}</label>
      <input type="number" class="form-control age-input" min="0" max="17" value="0">
    </div>
  `).join('');
}

function getAgesText() {
  const ages = [...document.querySelectorAll(".age-input")]
    .map(input => input.value)
    .filter(age => age > 0);
  return ages.length ? ` (Âges: ${ages.join(", ")})` : "";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("enfants").addEventListener("input", genererChampsAge);
  genererChampsAge();
});
