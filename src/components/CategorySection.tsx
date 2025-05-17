import React, { useEffect, useState } from 'react';

interface Machine {
  name: string;
  image: string;
  specs: [string, string][];
}

interface CategorySectionProps {
  title: string;
  description: string;
  machines: Machine[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, description, machines }) => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize(); // Set on first render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + visibleCards) % machines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCards, machines.length]);

  const getVisibleMachines = () => {
    const sliceEnd = index + visibleCards;
    if (sliceEnd <= machines.length) {
      return machines.slice(index, sliceEnd);
    }
    return [...machines.slice(index), ...machines.slice(0, sliceEnd - machines.length)];
  };

  const goToSlide = (dotIndex: number) => {
    setIndex(dotIndex * visibleCards % machines.length);
  };

  const visibleMachines = getVisibleMachines();

  return (
    <div className="mb-20">
      <br></br>
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">{title}</h2>
      <p className="text-center text-gray-600 mb-8">{description}</p>

      <div className="flex justify-center gap-6 flex-wrap transition-all duration-500">
        {visibleMachines.map((machine, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-[30%] transition-transform duration-500"
          >
            <img
              src={machine.image}
              alt={machine.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{machine.name}</h3>
              <table className="text-sm w-full border-t">
                <tbody>
                  {machine.specs.map(([label, value], idx) => (
                    <tr key={idx}>
                      <td className="py-1 pr-2 font-medium text-gray-700">{label}</td>
                      <td className="py-1 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(machines.length / visibleCards) }).map((_, i) => (
          <button
            key={i}
            className={`h-3 w-3 rounded-full ${
              index === i * visibleCards ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
