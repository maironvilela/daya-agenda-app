export function Items() {
  return (
    <div>
      <div
        className={`px-2  hover:bg-gray-50 transition-colors duration-150 border-l-6 border-red-500 mb-4`}
      >
        <div className="flex justify-between  l-2 items-center">
          <div className="flex items-start space-x-4">
            <div>
              <p className="font-medium">Jose Da Silva</p>
              <p className=" text-sm text-gray-500">Dr. Sávio Laborne</p>
            </div>
          </div>
          <div className="text-right  ">
            <p className="text-sm text-gray-500">09:00 - 12:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
