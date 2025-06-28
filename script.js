function append(val) {
  document.getElementById('display').value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const result = eval(display.value);
    addToHistory(display.value + ' = ' + result);
    display.value = result;
  } catch {
    display.value = 'خطا';
  }
}

function addToHistory(entry) {
  const list = document.getElementById('history-list');
  const li = document.createElement('li');
  li.textContent = entry;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '✖';
  removeBtn.style.marginRight = '10px';
  removeBtn.onclick = () => li.remove();

  li.prepend(removeBtn);
  list.appendChild(li);
}

document.getElementById('toggle-theme').onclick = function () {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  this.textContent = isDark ? '☀️ حالت روز' : '🌙 حالت شب';
};

document.getElementById('clear-history').onclick = function () {
  document.getElementById('history-list').innerHTML = '';
};

document.getElementById('copy').onclick = function () {
  const value = document.getElementById('display').value;
  navigator.clipboard.writeText(value);
};

document.getElementById('backspace').onclick = function () {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
};

document.getElementById('keyboard-btn').onclick = function () {
  document.getElementById('display').focus();
};
