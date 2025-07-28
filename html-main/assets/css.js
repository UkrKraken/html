const inputElement = document.getElementById("name");
const textElement = document.getElementById("text");

(() => {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

  const appendAlert = (message, type) => {
    const existingAlerts = alertPlaceholder.querySelectorAll(".alert");
    for (let alert of existingAlerts) {
      if (alert.textContent.includes(message)) {
        return;
      }
    }

    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible fade show custom-fade-in" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
    alertPlaceholder.append(wrapper);

    const alertElement = wrapper.firstChild;
    setTimeout(() => {
      alertElement.classList.remove("show");
      setTimeout(() => {
        alertElement.remove();
      }, 150);
    }, 5000);
  };

  const alertTrigger = document.getElementById("liveAlertBtn");

  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      if (
        inputElement.value.trim().length === 0 ||
        textElement.value.trim().length === 0
      ) {
        return appendAlert("Нужно заполнить все поля!", "danger");
      }

      inputElement.value = "";
      textElement.value = "";

      appendAlert("Спасибо за ваш отзыв, я ценю ваше внимание!", "success");
    });
  }
})();
