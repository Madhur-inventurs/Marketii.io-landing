import Image from "next/image";
import Sushain from "../../assets/sushain.png";
import Enwrape from "../../assets/enwrape.png";
import Apptech from "../../assets/apptech.png";

const AwardsSection = () => {
  return (
    <div className="mt-8 mb-8 px-4">
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
        {/* Award 1 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl px-2 sm:px-4 md:px-6 sm:py-4 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/15">
          <Image
            src={Sushain}
            alt="Sushain Award"
            width={120}
            height={100}
            className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 object-contain"
          />
        </div>

        {/* Award 2 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl px-2 sm:px-4 md:px-6 sm:py-4 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/15">
          <Image
            src={Enwrape}
            alt="Enwrape Award"
            width={120}
            height={100}
            className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 object-contain"
          />
        </div>

        {/* Award 3 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl px-2 sm:px-4 md:px-6 sm:py-4 flex justify-center items-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/15">
          <Image
            src={Apptech}
            alt="Apptech 50 Award"
            width={120}
            height={100}
            className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
