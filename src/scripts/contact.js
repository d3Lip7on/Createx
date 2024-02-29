// Додаємо обробник подій до всіх радіо кнопок
$(".radiobuttons_item").on("click", function (event) {
  // Знаходимо батьківський контейнер з радіо кнопками
  var $radiobuttons = $(this).parents(".radiobuttons");

  // Знаходимо всі радіо кнопки всередині цього контейнера
  var $radiobuttons_items = $radiobuttons.find(".radiobuttons_item");

  // Знімаємо клас 'active' з усіх радіо кнопок
  $radiobuttons_items.removeClass("active");

  // Знімаємо властивість 'checked' з усіх радіо кнопок
  $radiobuttons_items.find('input[type="radio"]').prop("checked", false);

  // Додаємо клас 'active' до поточної радіо кнопки
  $(this).addClass("active");

  // Встановлюємо властивість 'checked' поточної радіо кнопки
  $(this).find('input[type="radio"]').prop("checked", true);

  // Зупиняємо подальше поширення події кліку
  return false;
});
