const themes = [
  {
    name: "light",
    message: "Light theme enabled.",
  },
  {
    name: "dark",
    message: "Dark theme enabled.",
  },
];

const themeButtonElement = document.querySelector("#theme-switcher-button");
const themeDropdownElement = document.querySelector("#theme-dropdown");
const themeMenuItems = document.querySelectorAll(`[role="menuitem"]`);
const status = document.querySelector(`[aria-live="polite"]`);

themeButtonElement.textContent = "Switch Theme";

themeButtonElement.addEventListener("click", () => {
  themeDropdownElement.hidden = !themeDropdownElement.hidden;

  const isExpanded = !themeDropdownElement.hidden;
  themeButtonElement.setAttribute("aria-expanded", String(isExpanded));
});

themeMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedTheme = themes.find((theme) => {
      return theme.name === item.textContent.trim();
    });

    themes.forEach((theme) => {
      document.body.classList.remove(`theme-${theme.name}`);
    });

    document.body.classList.add(`theme-${selectedTheme.name}`);

    status.textContent = selectedTheme.message;
    themeDropdownElement.hidden = true;
    themeButtonElement.setAttribute("aria-expanded", "false");
  });
});
