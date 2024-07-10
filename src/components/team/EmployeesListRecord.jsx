export const EmployeesListRecord = ({ record }) => {
  return (
    <li className="relative w-full max-w-52 lg:max-w-xs">
      <img
        src={record.img}
        alt={record.name}
        className="h-full max-h-96 w-full rounded-md object-cover"
      />
      <div className="absolute bottom-3 left-3">
        <p className="bg-gray-200 text-center p-2 rounded mb-2 text-xs">
          {record.name}
        </p>
        <p className="bg-gray-200 text-center p-2 rounded text-xs">
          {record.role}
        </p>
      </div>
    </li>
  );
};
