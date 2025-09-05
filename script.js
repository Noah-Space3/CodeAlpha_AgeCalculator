document.getElementById("calcBtn").addEventListener("click", calculateAge);

function calculateAge() {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dob) {
    result.innerText = "Please select your Date of Birth!";
    return;
  }

  const dobDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - dobDate.getFullYear();
  let months = today.getMonth() - dobDate.getMonth();
  let days = today.getDate() - dobDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}
