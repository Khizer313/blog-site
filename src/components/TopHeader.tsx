import { Select } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

export default function TopHeader() {
  return (
    <div className="w-full bg-black text-white py-2 px-4 flex justify-between items-center text-sm">
      <div className="flex-1" /> {/* Spacer */}
      <div className="text-center flex-1">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-bold underline cursor-pointer">ShopNow</span>
        </p>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <GlobalOutlined className="mr-2" />
        <Select
          defaultValue="english"
          style={{ width: 100 }}
          bordered={false}
          dropdownStyle={{ minWidth: 120 }}
          options={[
            { value: "english", label: "English" },
            { value: "spanish", label: "Spanish" },
            { value: "french", label: "French" },
          ]}
          className="text-white ant-select-custom"
        />
      </div>
    </div>
  );
}
