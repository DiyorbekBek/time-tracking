import getData from "./getData.js";
getData("http://localhost:3000/tracks")
  .then((data) => {
    console.log(data);
    updateUI(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

const updateUI = (data) => {
  const title = document.querySelector("h2");
  const title2 = document.querySelector("h4");
  console.log(data);

  data.map((item) => {
    title.innerHTML += item.title;
    title2.innerHTML += " " + item.timeframes.weekly.previous + "hrs";
    dailyBtn.addEventListener("click", () => {
      title2.textContent = "";
      title2.innerHTML += " " + item.timeframes.weekly.current + "hrs";
    });
  });
};

const dailyBtn = document.getElementById("daily");
