// ================================
// HERO QUICK CALORIE CHECK
// Uses: #weight, #activity, #result
// ================================
function calcCalories() {
  const weight = Number(document.getElementById("weight").value);
  const activity = Number(document.getElementById("activity").value);
  const resultBox = document.getElementById("result");

  if (isNaN(weight) || weight <= 0) {
    resultBox.innerHTML = "⚠️ Please enter a valid weight (kg).";
    return;
  }

  const maintenance = Math.round(weight * 24 * activity);
  const fatLoss = Math.round(maintenance - 400);

  resultBox.innerHTML =
    `✅ Estimated maintenance: <strong>${maintenance} kcal/day</strong><br>` +
    `🔥 Suggested fat loss: <strong>${fatLoss} kcal/day</strong>`;
}

// ================================
// TOOLS SECTION CALORIE CALCULATOR
// Uses: #calWeight, #calActivity, #calResult
// ================================
function calcCaloriesTool() {
  const weight = Number(document.getElementById("calWeight").value);
  const activity = Number(document.getElementById("calActivity").value);
  const resultBox = document.getElementById("calResult");

  if (isNaN(weight) || weight <= 0) {
    resultBox.innerHTML = "⚠️ Please enter a valid weight (kg).";
    return;
  }

  const maintenance = Math.round(weight * 24 * activity);
  const fatLoss = Math.round(maintenance - 400);

  resultBox.innerHTML =
    `✅ Estimated maintenance: <strong>${maintenance} kcal/day</strong><br>` +
    `🔥 Suggested fat loss: <strong>${fatLoss} kcal/day</strong>`;
}

// ================================
// BMI CALCULATOR
// Uses: #bmiWeight, #bmiHeight, #bmiResult
// ================================
function calcBMI() {
  const w = Number(document.getElementById("bmiWeight").value);
  const h = Number(document.getElementById("bmiHeight").value);
  const bmiBox = document.getElementById("bmiResult");

  if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
    bmiBox.innerHTML = "⚠️ Enter valid weight and height.";
    return;
  }

  const heightM = h / 100;
  const bmi = (w / (heightM * heightM)).toFixed(1);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  bmiBox.innerHTML = `✅ Your BMI: <strong>${bmi}</strong> (${category})`;
}

// ================================
// PROTEIN CALCULATOR
// Uses: #proWeight, #proGoal, #proteinResult
// ================================
function calcProtein() {
  const w = Number(document.getElementById("proWeight").value);
  const goal = document.getElementById("proGoal").value;
  const proBox = document.getElementById("proteinResult");

  if (isNaN(w) || w <= 0) {
    proBox.innerHTML = "⚠️ Please enter a valid weight (kg).";
    return;
  }

  let multiplier = 1.6;
  if (goal === "fatloss") multiplier = 1.8;
  if (goal === "maintain") multiplier = 1.6;
  if (goal === "muscle") multiplier = 2.0;

  const protein = Math.round(w * multiplier);

  proBox.innerHTML = `✅ Recommended protein: <strong>${protein} g/day</strong>`;
}
