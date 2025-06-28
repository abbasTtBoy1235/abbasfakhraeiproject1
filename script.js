function append(val) {
  const display = document.getElementById("display");
  display.value += val;
  display.focus(); // نگه‌داشتن فوکوس برای تایپ
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const input = document.getElementById("display").value;
  try {
    const result = eval(input);
    document.getElementById("display").value = result;
    addToHistory(input + " = " + result);
  } catch {
    document.getElementById("display").value = "خطا";
  }
}

function addToHistory(entry) {
  const ul = document.getElementById("history-list");
  const li = document.createElement("li");
  li.textContent = entry;
  ul.prepend(li);
}

document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark") ? "☀️ حالت روز" : "🌙 حالت شب";
});

document.getElementById("copy").addEventListener("click", function () {
  const value = document.getElementById("display").value;
  if (value !== "") {
    navigator.clipboard.writeText(value);
    this.textContent = "✅";
    setTimeout(() => {
      this.textContent = "📋";
    }, 1000);
  }
});

document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("history-list").innerHTML = "";
});

document.getElementById("backspace").addEventListener("click", function () {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
});

window.onload = function () {
  document.getElementById("display").focus(); // باز کردن کیبورد در شروع
};
