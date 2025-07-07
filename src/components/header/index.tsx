type HeaderProps = {
  title: string;
};
export const Header = ({ title }: HeaderProps) => {
  return (
    <header className=" flex justify-between bg-white p-4 shadow-[0_4px_6px_-1px_rgba(59,150,246,0.3)]">
      <h2 className="text-2xl font-semibold text-gray-800"> {title}</h2>
      <section>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <i className="fas fa-bell text-xl"></i>
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <i className="fas fa-envelope text-xl"></i>
          </button>
          <div className="relative">
            <button
              id="user-menu-button"
              className="flex items-center space-x-2 focus:outline-none"
            >
              <span className="text-sm font-medium">Admin</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
              />
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};
