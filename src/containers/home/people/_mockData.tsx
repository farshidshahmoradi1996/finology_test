import { IPeople } from "types";
import ImgOne from "assets/imgs/gaetan-houssin.jpg";
import ImgTwo from "assets/imgs/nicolas-lebarreau.jpg";
import ImgThree from "assets/imgs/jerome-mahuet.jpg";
import ImgFour from "assets/imgs/manuela-faveri.jpg";
import ImgFive from "assets/imgs/darlene-chabrat.jpg";
import ImgSix from "assets/imgs/romane-regad.jpg";
import ImgSeven from "assets/imgs/tania-ferreira.jpg";
const _list: IPeople[] = [
  {
    id: 1,
    name: "Frank Ltarnam",
    avatar: ImgOne,
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`,
    position: "CEO",
  },
  {
    id: 2,
    name: "Bob Shefley",
    avatar: ImgTwo,
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`,
    position: "FullStack Developer",
  },
  {
    id: 3,
    name: "Json Stewars",
    avatar: ImgThree,
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`,
    position: "Marketeeing",
  },
  {
    id: 4,
    name: "Sabrina Rachal",
    avatar: ImgFour,
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`,
    position: "Jr UI/UX Designer",
  },
  {
    id: 5,
    name: "Marissa Lawren",
    avatar: ImgFive,
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`,
    position: "Customer Support",
  },
  {
    id: 6,
    name: "Romane Regad",
    avatar: ImgSix,
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`,
    position: "Jr Ui/UX Designer",
  },
  {
    id: 7,
    name: "Tania Ferreira",
    avatar: ImgSeven,
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.`,
    position: "Buesiness Analyst",
  },
];

export default _list;
