function mettreAJour() {
  const nbAdultes = document.getElementById("adultes").value;
  const nbEnfants = document.getElementById("enfants").value;
  const nbChambres = document.getElementById("chambres").value;
  const travail = document.getElementById("travail").checked;

  document.getElementById("res-adultes").textContent = "Nombre d’adultes : " + nbAdultes;
  document.getElementById("res-enfants").textContent = "Nombre d’enfants : " + nbEnfants;
  document.getElementById("res-chambres").textContent = "Nombre de chambres : " + nbChambres;
  document.getElementById("res-travail").textContent = "Voyage professionnel : " + (travail ? "Oui" : "Non");
}

function resetForm() {
  document.getElementById("lieu").value = "Paris";
  document.getElementById("arrivee").value = "2025-05-08";
  document.getElementById("depart").value = "2025-05-11";
  document.getElementById("adultes").value = 0;
  document.getElementById("enfants").value = 0;
  document.getElementById("chambres").value = 0;
  document.getElementById("travail").checked = false;
  document.getElementById("age1").value = "";
  document.getElementById("age2").value = "";

  document.getElementById("res-adultes").textContent = "";
  document.getElementById("res-enfants").textContent = "";
  document.getElementById("res-chambres").textContent = "";
  document.getElementById("res-travail").textContent = "";
}
