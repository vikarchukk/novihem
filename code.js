// nav
const menu = document.querySelector('.nav_links_wrap');
const menuBtn = document.querySelector('.nav_icon');
const body = document.body;
if (menu && menuBtn) {
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('nav_active');
		menuBtn.classList.toggle('nav_active');
		body.classList.toggle('body_lock');
	});
	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('nav_active');
			menuBtn.classList.remove('nav_active');
			body.classList.remove('body_lock');
		})
	});
};
// nav
// form
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
// form