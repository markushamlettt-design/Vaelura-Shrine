(function trackVaeluraVisit() {
  const key = 'vaelura_first_visit';
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, Date.now());
    console.log("🌱 First-time pilgrim detected.");
  } else {
    console.log("🌿 Returning pilgrim detected.");
  }
})();
