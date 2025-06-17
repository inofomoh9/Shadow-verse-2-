
const planets = [
  // Season 1
  { name: "Vorta", description: "A desert planet with red skies and buried secrets.", image: "#", voice: "#" },
  { name: "Elvaron", description: "Home to the Elvarians, masters of quantum light.", image: "#", voice: "#" },
  { name: "Gravix", description: "A gas giant with magnetic storms that warp time.", image: "#", voice: "#" },
  { name: "Nimbora", description: "A sky realm where cities float on clouds.", image: "#", voice: "#" },
  { name: "Zyron", description: "A mechanized planet with rogue AI lifeforms.", image: "#", voice: "#" },
  // Season 2
  { name: "Voltrana", description: "A volcanic realm rich in plasma energy.", image: "#", voice: "#" },
  { name: "Cryonix", description: "Frozen but full of glowing crystal caverns.", image: "#", voice: "#" },
  { name: "Aerion", description: "Home of the windwalkers and eternal hurricanes.", image: "#", voice: "#" },
  { name: "Drakthar", description: "A dragon-inhabited, mystic fire planet.", image: "#", voice: "#" },
  { name: "Miragea", description: "Illusions become reality on this strange world.", image: "#", voice: "#" },
  // Season 3
  { name: "Kryllon", description: "A frozen wasteland hiding rebels beneath its icy crust.", image: "#", voice: "#" },
  { name: "Nocthera", description: "A nocturnal world ruled by creatures who thrive in pure darkness.", image: "#", voice: "#" },
  { name: "Zenthara", description: "A floating prison planet built by an extinct civilization.", image: "#", voice: "#" },
  { name: "Taurion", description: "A militarized planet with vast war deserts and shifting battlefields.", image: "#", voice: "#" },
  { name: "Elyssor", description: "A psychic hub where thought can alter the planet’s terrain.", image: "#", voice: "#" }
];

let current = 0;

function nextPlanet() {
  const p = planets[current];
  document.getElementById("planetName").innerText = p.name;
  document.getElementById("planetDesc").innerText = p.description;
  document.getElementById("planetImage").src = p.image;
  document.getElementById("planetAudio").src = p.voice;

  if (current === 5) {
    document.getElementById("seasonLabel").innerText = "🚀 Season 2 Begins!";
  } else if (current === 10) {
    document.getElementById("seasonLabel").innerText = "🛸 Season 3: The Galactic Rebellion";
  } else {
    document.getElementById("seasonLabel").innerText = "";
  }

  current = (current + 1) % planets.length;
}
