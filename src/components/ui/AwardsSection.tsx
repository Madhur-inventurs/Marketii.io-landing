import Image from 'next/image';
import Sushain from '../../assets/sushain.png';
import Enwrape from '../../assets/enwrape.png';
import Apptech from '../../assets/apptech.png';


const AwardsSection = () => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-6 px-4 mb-8">
      {/* Award 1 */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 flex justify-center items-center max-w-xs w-full shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          src={Sushain} // Replace with your actual image path
          alt="Sushain Award"
          width={120}
          height={100}
          className="mr-4"
        />
        {/* <div className="text-center text-xl font-semibold text-muted-foreground ">
          Deloitte<br />Technology Fast<br />50 India – Winner
        </div> */}
      </div>

      {/* Award 2 */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 flex justify-center items-center max-w-xs w-full shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          src={Enwrape} // Replace with your actual image path
          alt="Enwrape Award"
          width={120}
          height={100}
          className="mr-4"
        />
        {/* <div className="text-center text-xl font-semibold text-muted-foreground ">
          ET Rise<br />Top MSMEs<br />Ranking India’s Best
        </div> */}
      </div>

      {/* Award 3 */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 flex justify-center items-center max-w-xs w-full shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image
          src={Apptech} // Replace with your actual image path
          alt="Apptech 50 Award"
          width={120}
          height={100}
          className="mr-4"
        />
        {/* <div className="text-center text-xl font-semibold text-muted-foreground ">
          Startup 50<br />Top Enterprise<br />Venture by SmartCEO
        </div> */}
      </div>
    </div>
  );
};

export default AwardsSection;
