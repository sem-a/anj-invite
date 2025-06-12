document.getElementById("send").addEventListener("click", function () {
  const button = this; // Сохраняем ссылку на кнопку
  const originalText = button.textContent; // Сохраняем исходный текст кнопки
  const nameValue = document.getElementById("name").value;

  // Проверяем, что поле не пустое
  if (!nameValue.trim()) {
    alert("Пожалуйста, введите имя");
    return;
  }

  // Добавляем индикатор загрузки
  button.innerHTML = `
    <div class="loader"></div>
    <span>Отправка...</span>
  `;
  button.disabled = true;

  const url = `https://script.google.com/macros/s/AKfycbwu58ZEhO-Q7u7UOXsBEEMCEJyjq8BLge6XQj28d9pc9eWcAnAowv1d44eGV1ng7XbM-w/exec?p1=${encodeURIComponent(
    nameValue
  )}`;

  fetch(url, {
    method: "GET",
    mode: "no-cors",
  })
    .then(() => {
      alert("Данные успешно отправлены!");
    })
    .catch((error) => {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке данных");
    })
    .finally(() => {
      // Восстанавливаем кнопку в исходное состояние
      button.textContent = originalText;
      button.disabled = false;
    });
});
