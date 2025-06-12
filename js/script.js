document.getElementById("send").addEventListener("click", function () {
  // Получаем значение из поля ввода
  const nameValue = document.getElementById("name").value;

  // Формируем URL с параметром
  const url = `https://script.google.com/macros/s/AKfycbwu58ZEhO-Q7u7UOXsBEEMCEJyjq8BLge6XQj28d9pc9eWcAnAowv1d44eGV1ng7XbM-w/exec?p1=${encodeURIComponent(
    nameValue
  )}`;

  // Отправляем POST запрос
  fetch(url, {
    method: "GET",
    mode: "no-cors", // Учитывая, что это Google Apps Script, вероятно нужен no-cors
  })
    .then(() => {
      alert("Данные успешно отправлены!");
    })
    .catch((error) => {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке данных");
    });
});
