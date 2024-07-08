import { GlobalIcon } from "../../global/GlobalIcon";

export const EngagementPanel = () => {
  const mockdata = [
    {
      icon: "share",
      text: "Share",
    },
    {
      icon: "favorite",
      text: "Save",
    },
    {
      icon: "like",
      text: "Like",
    },
  ];

  return (
    <div className="flex justify-end gap-5 mb-5">
      {mockdata.map((record) => (
        <div
          className="flex gap-2 items-center cursor-pointer hover:text-cape-green"
          key={record.icon}
        >
          <p className="text-base">{record.text}</p>
          <div className="border p-2 rounded-full">
            <GlobalIcon type={record.icon} />
          </div>
        </div>
      ))}
    </div>
  );
};
