import CustomButton from "../CustomButton";
import { motion } from "framer-motion";

const Hero = () => {
  const flyTo = (): void => {
    alert(`down!`);
  };
  return (
    <div>
      <div className="flex-1 pt-36 padding-x max-h[920px]">
        <h1 className="hero__title">Fell the Freedom and start your Journey</h1>
        <p className="hero__subtitle text-gray-200">
          Are you ready for an unforgettable journey with gold standard service?
          You can elevate the car rental experience by embellishing every moment
          with golden options, making each one special.
        </p>
        <CustomButton
          handleClick={flyTo}
          title="Explorer the Cars"
          designs="mt-10"
        />
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          animate={{ translateX: 0, scale: 1 }}
          transition={{ duration: 2 }}
          className="object-contain"
          src="hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
