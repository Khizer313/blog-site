import { TruckOutlined, CustomerServiceOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const services = [
  {
    icon: <TruckOutlined className="text-2xl" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140"
  },
  {
    icon: <CustomerServiceOutlined className="text-2xl" />,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    icon: <SafetyCertificateOutlined className="text-2xl" />,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days"
  }
];

export default function InfoSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white mb-4">
              {service.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}