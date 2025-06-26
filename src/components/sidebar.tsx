export function SideBar() {
  return (
    <div
      id="sidebar"
      className="sidebar bg-blue-800 text-white w-64 flex-shrink-0 flex flex-col h-screen"
    >
      <div className="flex items-center justify-between p-4 border-b border-blue-700">
        <div className="flex items-center space-x-3">
          <span className="sidebar-text text-xl font-bold"></span>
        </div>
        <button id="toggleSidebar" className="text-blue-200 hover:text-white">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className="flex-grow overflow-y-auto">
        <nav className="p-2">
          <a
            href="#"
            className="sidebar-option flex items-center space-x-3 p-3 rounded-lg bg-blue-700 text-white mb-1"
          >
            <i className="fas fa-home"></i>
            <span className="sidebar-text">Dashboard</span>
          </a>
          <a
            href="#"
            className="sidebar-option flex items-center space-x-3 p-3 rounded-lg text-blue-200 hover:bg-blue-700 hover:text-white mb-1"
          >
            <i className="fas fa-procedures"></i>
            <span className="sidebar-text">Cirurgias</span>
          </a>
          <a
            href="#"
            className="sidebar-option flex items-center space-x-3 p-3 rounded-lg text-blue-200 hover:bg-blue-700 hover:text-white mb-1"
          >
            <i className="fas fa-user-md"></i>
            <span className="sidebar-text">Médicos</span>
          </a>
          <a
            href="#"
            className="sidebar-option flex items-center space-x-3 p-3 rounded-lg text-blue-200 hover:bg-blue-700 hover:text-white mb-1"
          >
            <i className="fas fa-hospital-user"></i>
            <span className="sidebar-text">Pacientes</span>
          </a>
          <a
            href="#"
            className="sidebar-option flex items-center space-x-3 p-3 rounded-lg text-blue-200 hover:bg-blue-700 hover:text-white mb-1"
          >
            <i className="fas fa-calendar-alt"></i>
            <span className="sidebar-text">Agendamentos</span>
          </a>
          <a
            href="#"
            className="sidebar-option flex items-center space-x-3 p-3 rounded-lg text-blue-200 hover:bg-blue-700 hover:text-white mb-1"
          >
            <i className="fas fa-box"></i>
            <span className="sidebar-text">Instrumentos</span>
          </a>
          <a
            href="#"
            className="sidebar-option flex items-center space-x-3 p-3 rounded-lg text-blue-200 hover:bg-blue-700 hover:text-white mb-1"
          >
            <i className="fas fa-chart-bar"></i>
            <span className="sidebar-text">Relatórios</span>
          </a>
        </nav>
      </div>
      <div className="p-4 border-t border-blue-700">
        <div className="flex items-center space-x-3">
          <img
            src="https://randomuser.me/api/portraits/lego/5.jpg"
            className="w-10 h-10 rounded-full"
            alt="Usuário"
          />
          <div className="sidebar-text">
            <div className="font-medium">Dr. Silva</div>
            <div className="text-xs text-blue-300">Cirurgião Chefe</div>
          </div>
        </div>
      </div>
    </div>
  );
}
