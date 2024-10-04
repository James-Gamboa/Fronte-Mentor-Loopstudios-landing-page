const creations = [
  {
    name: "Deep",
    lower: "earth",
    mobile: "./images/mobile/image-deep-earth.jpg",
    desktop: "./images/desktop/image-deep-earth.jpg",
  },
  {
    name: "Night",
    lower: "arcade",
    mobile: "./images/mobile/image-night-arcade.jpg",
    desktop: "./images/desktop/image-night-arcade.jpg",
  },
  {
    name: "Soccer",
    lower: "team VR",
    mobile: "./images/mobile/image-soccer-team.jpg",
    desktop: "./images/desktop/image-soccer-team.jpg",
  },
  {
    name: "The",
    lower: "grid",
    mobile: "./images/mobile/image-grid.jpg",
    desktop: "./images/desktop/image-grid.jpg",
  },
  {
    name: "From up",
    lower: "above VR",
    mobile: "./images/mobile/image-from-above.jpg",
    desktop: "./images/desktop/image-from-above.jpg",
  },
  {
    name: "Pocket",
    lower: "borealis",
    mobile: "./images/mobile/image-pocket-borealis.jpg",
    desktop: "./images/desktop/image-pocket-borealis.jpg",
  },
  {
    name: "The",
    lower: "curiosity",
    mobile: "./images/mobile/image-curiosity.jpg",
    desktop: "./images/desktop/image-curiosity.jpg",
  },
  {
    name: "Make it",
    lower: "fisheye",
    mobile: "./images/mobile/image-fisheye.jpg",
    desktop: "./images/desktop/image-fisheye.jpg",
  },
];

const hero = {
  mobile: "./images/mobile/image-hero.jpg",
  desktop: "./images/desktop/image-hero.jpg",
};

const ad = {
  mobile: "./images/mobile/image-interactive.jpg",
  desktop: "./images/desktop/image-interactive.jpg",
};

const navLinks = [
  { name: "About", to: "about" },
  { name: "Careers", to: "footer" },
  { name: "Events", to: "creations" },
  { name: "Products", to: "creations" },
  { name: "Support", to: "footer" },
];

function splitString(input) {
  const characters = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(input)) !== null) {
    characters.push(match[0]);
  }

  return characters;
}
export { creations, hero, ad, navLinks, splitString };
