const tabs = document.querySelectorAll(`[role="tab"]`);
const panels = document.querySelectorAll(`[role="tabpanel"]`);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.setAttribute("aria-selected", "false");

    panels.forEach((panel) => {
      panel.setAttribute("hidden", true);
    }); 

    tab.setAttribute("aria-selected", "true");

    const associatedPanel = tab.getAttribute("aria-controls");
    const panel = document.getElementById(associatedPanel);
    panel.hidden = false;
  });
});
