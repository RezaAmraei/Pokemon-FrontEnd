import PokeBall from "../Images/Poke-Ball.png";
import GreatBall from "../Images/Dream_Great_Ball_Sprite.png";
import UltraBall from "../Images/Dream_Ultra_Ball_Sprite.webp";
import MasterBall from "../Images/Dream_Master_Ball_Sprite.webp";
import QuickBall from "../Images/Dream_Quick_Ball_Sprite.webp";
import TimerBall from "../Images/Dream_Timer_Ball_Sprite.webp";
import DiveBall from "../Images/Dream_Dive_Ball_Sprite.webp";
import PremierBall from "../Images/Dream_Premier_Ball_Sprite.webp";

const PokeBalls = () => {
  return {
    left: {
      first: {
        url: PokeBall,
        alt: "Poke Ball",
      },
      second: {
        url: GreatBall,
        alt: "Great Ball",
      },
      third: {
        url: UltraBall,
        alt: "Ultra Ball",
      },
      fourth: {
        url: MasterBall,
        alt: "Master Ball",
      },
    },

    right: {
      first: {
        url: QuickBall,
        alt: "Quick Ball",
      },
      second: {
        url: TimerBall,
        alt: "Timer Ball",
      },
      third: {
        url: DiveBall,
        alt: "Dive Ball",
      },
      fourth: {
        url: PremierBall,
        alt: "Premier Ball",
      },
    },
  };
};

export default PokeBalls;
