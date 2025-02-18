import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-[300px]">
      <Input
        placeholder="What are you looking for?"
        prefix={<SearchOutlined className="text-gray-400" />}
        className="rounded-md"
      />
    </div>
  );
}
