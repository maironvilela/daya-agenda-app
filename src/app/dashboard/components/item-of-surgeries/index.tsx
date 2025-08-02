type ItemOfSurgeriesProps = {
  patient: string;
  typeOfSurgery?: string;
  status: "pending" | "scheduled" | "completed" | "cancelled";
};

export function ItemOfSurgeries({
  patient,
  typeOfSurgery,
  status,
}: ItemOfSurgeriesProps) {
  const borderColor = {
    pending: "border-gray-400",
    cancelled: "border-red-400",
    completed: "border-green-400",
    scheduled: "border-blue-400",
  }[status];

  return (
    <div
      className={`p-2  hover:bg-gray-900 transition-colors duration-150 border-l-6 ${borderColor} mb-4`}
    >
      <div className="flex justify-between items-start ml-2">
        <div className="flex items-start space-x-4">
          <div>
            <p className="font-medium">{patient}</p>
            <p className="font-medium text-sm">Dr. Sávio Laborne</p>
            <p className="text-sm text-gray-500">{typeOfSurgery}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium">Mater Dei Contorno</p>
          <p className="text-sm text-gray-500">22/07/2025</p>
          <p className="text-sm text-gray-500">09:00 - 12:00</p>
        </div>
      </div>
    </div>
  );
}
