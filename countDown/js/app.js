const endDate = "05 Feb 2024 10:43 AM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const now = new Date();
  console.log({ now });
  const end = new Date(endDate);
  console.log({ end });
  const diff = Math.floor((end - now) / 1000);
  console.log({ diff });
  const days = Math.floor(diff / 86400);
  console.log({ days });
  const hours = Math.floor((diff % 86400) / 3600);
  console.log("diff % 86400", diff % 86400);
  console.log({ hours });
  const minutes = Math.floor((diff % 3600) / 60);
  console.log({ minutes });
  const seconds = diff % 60;

  inputs[0].value = days;
  inputs[1].value = hours;
  inputs[2].value = minutes;
  inputs[3].value = seconds;
};

setInterval(() => {
  clock();
}, 1000);
