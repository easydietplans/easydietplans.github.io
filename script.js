function calcCalories() {
  const w = parseFloat(document.getElementById("weight").value);
  const a = parseFloat(document.getElementById("activity").value);

  if (!w || w <= 0) {
    document.getElementById("result").innerText = "Please enter a valid weight ✅";
    return;
  }

  // Simple estimate for beginners:
  // Maintenance calories ~ weight * 24 * activity factor
  const maintenance = Math.round(w * 24 * a);
  const fatLoss = Math.round(maintenance - 400);

  document.getElementById("result").innerText =
    `Estimated Maintenance: ${maintenance} kcal/day ✅
Fat loss target: ~${fatLoss} kcal/day`;
}
