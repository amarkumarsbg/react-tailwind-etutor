import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className="bg-secondary text-white py-12">
      <div className="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Expert tutors */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={898}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>

          <p className="text-xl">Expert tutors</p>
        </div>
        {/* Hours content */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={20000}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>

          <p className="text-xl">Hours content</p>
        </div>
        {/* Subject and courses */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={298}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>

          <p className="text-xl">Subject and courses</p>
        </div>
        {/* Active students */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={72878}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>

          <p className="text-xl">Active students</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
