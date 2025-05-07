function mettreAJour() {
  const nbAdultes = document.getElementById("adultes").value;
  const nbEnfants = document.getElementById("enfants").value;
  const nbChambres = document.getElementById("chambres").value;
  const travail = document.getElementById("travail").checked;

  document.getElementById("reservation-adultes").textContent = "Nombre d’adultes : " + nbAdultes;
  document.getElementById("reservation-enfants").textContent = "Nombre d’enfants : " + nbEnfants;
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
  document.getElementById("age1").value = "";
  document.getElementById("age2").value = "";

  document.getElementById("reservation-adultes").textContent = "";
  document.getElementById("reservation-enfants").textContent = "";
  document.getElementById("reservation-chambres").textContent = "";
  document.getElementById("reservation-travail").textContent = "";
}