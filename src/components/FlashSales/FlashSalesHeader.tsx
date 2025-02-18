import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState, useEffect } from "react";

export default function FlashSalesHeader() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 23,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">Today's</h2>
          <span className="text-red-500 font-bold text-2xl">Flash Sales</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1 items-center">
            <span className="bg-red-500 text-white px-2 py-1 rounded">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span>:</span>
            <span className="bg-red-500 text-white px-2 py-1 rounded">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span>:</span>
            <span className="bg-red-500 text-white px-2 py-1 rounded">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          icon={<LeftOutlined />}
          className="border-gray-300"
          shape="circle"
        />
        <Button
          icon={<RightOutlined />}
          className="border-gray-300"
          shape="circle"
        />
      </div>
    </div>
  );
}
