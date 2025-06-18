function planRoute() {
  const start = document.getElementById("start").value.trim();
  const end = document.getElementById("end").value.trim();
  const area = document.getElementById("area").value.trim();
  const mode = document.getElementById("mode").value;

  if (!start || !end || !area) {
    alert("Please fill in all fields.");
    return;
  }

  const modes = {
    walk: { speed: 5, co2: 0 },
    bike: { speed: 15, co2: 0 },
    bus: { speed: 30, co2: 60 },
    ev: { speed: 40, co2: 20 }
  };

  const selected = modes[mode];
  const distanceKm = 10; // Simulated fixed distance
  const timeMin = Math.round((distanceKm / selected.speed) * 60);

  // Simulated traffic detection
  const trafficLevel = Math.random() > 0.5 ? "High" : "Low";

  // Show traffic result
  const trafficBox = document.getElementById("trafficResult");
  trafficBox.style.display = "block";

  if (trafficLevel === "High") {
    trafficBox.innerHTML = 🚦 Traffic in <strong>${area}</strong> is <span style="color:red;">High</span>. Consider an alternative route.;
  } else {
    trafficBox.innerHTML = ✅ Traffic in <strong>${area}</strong> is <span style="color:green;">Low</span>. You can proceed smoothly.;
  }

  // Route summary
  const co2Msg = selected.co2 === 0
    ? "0g CO₂ (Zero emission 🌿)"
    : ${selected.co2}g CO₂ saved vs petrol car;

  const resultBox = document.getElementById("routeResult");
  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <h3>Route Summary</h3>
    <p><strong>From:</strong> ${start}</p>
    <p><strong>To:</strong> ${end}</p>
    <p><strong>Mode:</strong> ${mode.toUpperCase()}</p>
    <p><strong>Distance:</strong> ${distanceKm} km</p>
    <p><strong>Estimated Time:</strong> ${timeMin} mins</p>
    <p><strong>CO₂ Impact:</strong> ${co2Msg}</p>
  `;
}