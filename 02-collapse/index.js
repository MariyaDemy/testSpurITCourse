const button = document.querySelector(".collapsible__button");
const spanVisible = document.querySelector(".collapsible__action--visible");
const spanHidden = document.querySelector(".collapsible__action--hidden");
const content = document.querySelector(".collapsible__content");

content.style.opacity = 0;
spanVisible.style.opacity = 0;
spanHidden.style.opacity = 1;

const buttonClick = (e) => {
  button.classList.toggle("active");

  if (button.classList.contains("active")) {
    content.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 100,
        fill: "forwards",
        easing: "ease",
      }
    );

    spanVisible.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 100,
        fill: "forwards",
        easing: "ease",
      }
    );

    spanHidden.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 100,
        fill: "forwards",
        easing: "ease",
      }
    );
  } else {
    content.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 100,
        fill: "forwards",
        easing: "ease",
      }
    );

    spanVisible.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 100,
        fill: "forwards",
        easing: "ease",
      }
    );

    spanHidden.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 100,
        fill: "forwards",
        easing: "ease",
      }
    );
  }
};

button.addEventListener("click", buttonClick);
