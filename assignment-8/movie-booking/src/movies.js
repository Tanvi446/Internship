import interstellar from "./assets/interstellar.jpg";
import inception from "./assets/inception.jpg";
import avatar from "./assets/avatar.jpg";
import joker from "./assets/joker.jpg";
import batman from "./assets/batman.jpg";
import titanic from "./assets/titanic.jpg";
import oppenheimer from "./assets/oppenheimer.jpg";
import dune from "./assets/dune.jpg";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    image: interstellar,
    genre: "Sci-Fi",
    duration: "169 min",
    description:
    "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival as Earth faces environmental collapse."
  },
  {
    id: 2,
    title: "Inception",
    image: inception,
    genre: "Sci-Fi",
    duration: "148 min",
    description:
  "A highly skilled thief enters the dreams of others to steal valuable secrets. His most dangerous mission challenges him to plant an idea deep within a target's subconscious."
  },
  {
    id: 3,
    title: "Avatar",
    image: avatar,
    genre: "Adventure",
    duration: "162 min",
    description:
  "On the lush alien world of Pandora, a former marine becomes caught between military orders and protecting the indigenous Na'vi people whose way of life is under threat."
  },
  {
    id: 4,
    title: "Joker",
    image: joker,
    genre: "Drama",
    duration: "122 min",
    description:
  "A struggling comedian and isolated loner slowly descends into madness, transforming into the infamous criminal mastermind known as the Joker."
  },
  {
    id: 5,
    title: "Batman",
    image: batman,
    genre: "Action",
    duration: "150 min",
    description:
  "A masked vigilante patrols Gotham City, battling powerful criminals while uncovering corruption and confronting the darkness that threatens his city."
  },
  {
    id: 6,
    title: "Titanic",
    image: titanic,
    genre: "Romance",
    duration: "194 min",
    description:
  "A young artist and an aristocratic woman from different social classes fall in love aboard the ill-fated RMS Titanic during its maiden voyage."
  },
  {
    id: 7,
    title: "Oppenheimer",
    image: oppenheimer,
    genre: "Biography",
    duration: "180 min",
    description:
  "The story of physicist J. Robert Oppenheimer and his role in leading the Manhattan Project, a scientific effort that changed the course of world history."
  },
  {
    id: 8,
    title: "Dune",
    image: dune,
    genre: "Sci-Fi",
    duration: "155 min",
    description:
  "A gifted young nobleman must embrace his destiny on the desert planet Arrakis, where power, prophecy, and survival revolve around the universe's most valuable resource."
  }
];

export default movies;