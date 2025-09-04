document.getElementById("dietForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const goal = document.getElementById("goal").value;

  let plan = [];

  if (goal === "lose") {
    plan = [
      "🥣 Breakfast: Oats with fruits",
      "🥗 Lunch: Grilled chicken + salad",
      "🍵 Snack: Green tea + nuts",
      "🍲 Dinner: Vegetable soup + brown rice"
    ];
  } else if (goal === "maintain") {
    plan = [
      "🥣 Breakfast: Eggs + whole grain bread",
      "🥗 Lunch: Fish curry + rice + vegetables",
      "🍎 Snack: Fruit smoothie",
      "🍲 Dinner: Chicken + quinoa + veggies"
    ];
  } else if (goal === "gain") {
    plan = [
      "🥣 Breakfast: Peanut butter sandwich + milk",
      "🥗 Lunch: Paneer curry + rice + dal",
      "🍌 Snack: Banana + protein shake",
      "🍲 Dinner: Chicken biryani + salad"
    ];
  }

  const planList = document.getElementById("planList");
  planList.innerHTML = "";
  plan.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    planList.appendChild(li);
  });

  document.getElementById("result").classList.remove("hidden");
});
