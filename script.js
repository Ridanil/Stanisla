// Мобильное меню
var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav');
burger.addEventListener('click', function () {
  var open = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Форма: ничего не отправляем, показываем демо-сообщение
var form = document.querySelector('.form');
var msg = form.querySelector('.form__msg');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var ok = true;
  form.querySelectorAll('[required]').forEach(function (el) {
    var bad = el.type === 'checkbox' ? !el.checked : !el.value.trim();
    el.classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  if (!ok) { msg.textContent = 'Заполните имя, контакт и подтвердите согласие.'; msg.hidden = false; return; }
  msg.textContent = 'Это демо, здесь будет подключена форма Tilda с уведомлением в Telegram/почту.';
  msg.hidden = false;
});
