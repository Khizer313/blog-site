import { Select } from 'antd';

const categories = [
  { label: 'Woman\'s Fashion', value: 'womans-fashion' },
  { label: 'Men\'s Fashion', value: 'mens-fashion' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Home & Lifestyle', value: 'home-lifestyle' },
  { label: 'Medicine', value: 'medicine' },
  { label: 'Sports & Outdoor', value: 'sports-outdoor' },
  { label: 'Baby\'s & Toys', value: 'baby-toys' },
  { label: 'Groceries & Pets', value: 'groceries-pets' },
  { label: 'Health & Beauty', value: 'health-beauty' },
];

export default function CategoryDropdowns() {
  return (
    <div className="flex flex-col space-y-2">
      {categories.map((category) => (
        <Select
          key={category.value}
          className="w-[200px]"
          defaultValue={category.value}
          options={[category]}
          bordered={false}
        />
      ))}
    </div>
  );
}