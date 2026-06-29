const footballTeam = {
  team: "Blue Phoenix FC",
  year: 2026,
  headCoach: "Michael Carter",
  players: [
    {
      name: "Ethan Brooks",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Lucas Bennett",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Noah Turner",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Mason Reed",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Liam Cooper",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Logan Foster",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Owen Murphy",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

// Get DOM element from HTML for each data we will display
const headCoachElement = document.querySelector("#head-coach");
const teamElement = document.querySelector("#team");
const yearElement = document.querySelector("#year");
const playerCardsElement = document.querySelector("#player-cards");
const playerDropdownElement = document.querySelector("#players");

headCoachElement.textContent = footballTeam.headCoach;
teamElement.textContent = footballTeam.team;
yearElement.textContent = footballTeam.year;

playerDropdownElement.addEventListener("change", () => {
  const players =
    playerDropdownElement.value === "all"
      ? footballTeam.players
      : footballTeam.players.filter((player) => {
          return player.position === playerDropdownElement.value;
        });

  displayPlayers(players);
});

function displayPlayers(players) {
  playerCardsElement.innerHTML = players
    .map((player) => {
      return `<div class="player-card">
      <h2>
        ${player.isCaptain ? "(Captain) " : ""}${player.name}
      </h2>
      <p>Position: ${player.position}</p>
    </div>`;
    })
    .join("");
}
