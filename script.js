function append(val) {
  const display = document.getElementById("display");
  display.value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const input = document.getElementById("display").value;
  try {
    const result = eval(input);
    document.getElementById("display").value = result;
    addToHistory(`${input} = ${result}`);
  } catch {
    document.getElementById("display").value = "خطا";
  }
}

function addToHistory(entry) {
  const ul = document.getElementById("history-list");
  const li = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = entry;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "delete-entry";
  delBtn.onclick = () => li.remove();

  li.appendChild(textSpan);
  li.appendChild(delBtn);
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
    this.innerHTML = "✅";
    setTimeout(() => {
      this.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="#2e7d32" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1Zm3 4H8c-1.1 0-2 .9-2 2v16h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm0 18H8V7h11v16Z"/>
        </svg>`;
    }, 1000);
  }
});

document.getElementById("backspace").addEventListener("click", function () {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
});

document.getElementById("keyboard-btn-fixed").addEventListener("click", function () {
  const input = document.getElementById("display");
  input.removeAttribute("readonly");
  input.focus();
  setTimeout(() => input.setAttribute("readonly", true), 10000);
});

document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("history-list").innerHTML = "";
});
