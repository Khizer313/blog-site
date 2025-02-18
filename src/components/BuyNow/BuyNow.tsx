import { useEffect, useState } from 'react';
import { Button } from 'antd';

export default function BuyNow() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-black rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Content */}
          <div className="flex-1 p-8 md:p-12 text-white">
            <span className="text-green-400 uppercase mb-4 block">Categories</span>
            <h2 className="text-4xl font-bold mb-6">Enhance Your Music Experience</h2>
            
            <div className="flex space-x-4 mb-8">
              {[
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center mb-1">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <Button 
              type="primary" 
              className="bg-green-400 hover:bg-green-500 border-none"
              size="large"
            >
              Buy Now!
            </Button>
          </div>

          {/* Image */}
          <div className="flex-1 p-8">
            <img 
              src="/assets/jbl.png" 
              alt="JBL Speaker" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
