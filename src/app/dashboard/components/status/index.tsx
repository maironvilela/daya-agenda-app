export function Status() {
  return (
    <div className="flex justify-start gap-6 my-8">
      <span className="border-l-6 border-gray-400 pl-2">Pendente</span>
      <span className="border-l-6  border-blue-400 pl-2">Agendado</span>
      <span className="border-l-6 border-red-400 pl-2 ">Cancelado</span>
      <span className="border-l-6 border-green-400 pl-2">Finalizado</span>
    </div>
  );
}
