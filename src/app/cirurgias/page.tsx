'use client';

import { Header } from '@/components/header';
import React, { useEffect, useState } from 'react';

// ...existing code...
export default function SugeryManagement() {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 720) {
        console.log('limite diminuiu');
        setLimit(10);
      } else {
        console.log('limite aumentou ');

        setLimit(15);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Busca os dados do backend sempre que o limite mudar
  useEffect(() => {
    async function fetchRows() {
      // Substitua pela sua chamada real de API
      const res = await fetch(`/api/cirurgias?limit=${limit}`);
      const data = await res.json();
    }
    fetchRows();
  }, [limit]);

  const rows = [
    {
      protocolo: '22345678',
      data: '22/10/2025',
      nome: 'Maria Aparecida da Silva',
      procedimento: 'Infiltração',
      medico: 'Dr. Savio Laborne',
    },
    {
      protocolo: '22345678',
      data: '22/10/2025',
      nome: 'Maria Aparecida da Silva',
      procedimento: 'Infiltração',
      medico: 'Dr. Savio Laborne',
    },
    {
      protocolo: '22345678',
      data: '22/10/2025',
      nome: 'Maria Aparecida da Silva',
      procedimento: 'Infiltração',
      medico: 'Dr. Savio Laborne',
    },
    {
      protocolo: '22345678',
      data: '22/10/2025',
      nome: 'Maria Aparecida da Silva',
      procedimento: 'Infiltração',
      medico: 'Dr. Savio Laborne',
    },
    {
      protocolo: '22345678',
      data: '22/10/2025',
      nome: 'Maria Aparecida da Silva',
      procedimento: 'Infiltração',
      medico: 'Dr. Savio Laborne',
    },
    {
      protocolo: '22345678',
      data: '22/10/2025',
      nome: 'Maria Aparecida da Silva',
      procedimento: 'Infiltração',
      medico: 'Dr. Savio Laborne',
    },
    {
      protocolo: '22345678',
      data: '22/10/2025',
      nome: 'Maria Aparecida da Silva',
      procedimento: 'Infiltração',
      medico: 'Dr. Savio Laborne',
    },
    // ...adicione mais linhas conforme necessário
  ];

  return (
    <div className="bg-gray-100 h-screen overflow-auto gap-2 w-screen ">
      <Header title="Cirurgias" />

      <main className="p-4 space-y-4">
        <section>
          <div className="bg-white rounded-lg shadow overflow-hidden p-4 flex  justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-medium text-gray-900">
                Lista de Cirurgias
              </h3>
              <p className="text-sm text-gray-500">
                Gerencie todos as cirurgias
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar Pacientes..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                />
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
              </div>
              <button
                id="add-user-btn"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition duration-150 ease-in-out"
              >
                <i className="fas fa-plus mr-2"></i>
                Adicionar Cirurgia
              </button>
            </div>
          </div>

          <div className=" py-4 px-2 border-b border-gray-200 bg-gray-50 my-2 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex flex-row gap-2">
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    <i className="fas fa-filter mr-1"></i>
                    Editar
                  </button>
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    <i className="fas fa-filter mr-1"></i>
                    Exluir
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  <i className="fas fa-filter mr-1"></i>
                  Filtrar
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4"
                  >
                    Data
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16"
                  >
                    Procedimento
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[300px]"
                  >
                    Medico Responsável
                  </th>
                </tr>
              </thead>
              <tbody
                className="bg-white divide-y divide-gray-200"
                id="users-table-body"
              >
                {rows.map((row, idx) => (
                  <React.Fragment key={row.protocolo + idx}>
                    <tr
                      tabIndex={0}
                      onClick={() =>
                        setSelectedRow(selectedRow === idx ? null : idx)
                      }
                      className={`cursor-pointer transition-colors duration-150 ${
                        selectedRow === idx ? 'bg-blue-100' : ''
                      }`}
                    >
                      <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <span>{row.data}</span>
                      </td>
                      <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <span>{row.nome}</span>
                      </td>
                      <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <span>{row.procedimento}</span>
                      </td>
                      <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <span>{row.medico}</span>
                      </td>
                    </tr>
                    {selectedRow === idx && (
                      <tr>
                        <td colSpan={5} className="bg-blue-50 px-6 py-4">
                          {/* Conteúdo extra exibido ao selecionar a linha */}
                          <div>
                            <strong>Detalhes da cirurgia:</strong>
                            <p>
                              Mais informações sobre {row.nome} e o procedimento{' '}
                              {row.procedimento}.
                            </p>
                            {/* Adicione aqui qualquer conteúdo ou componente */}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-gray-700">
                    Mostrando <span className="font-medium">1</span> a
                    <span className="font-medium">10</span> de
                    <span className="font-medium">1248</span> resultados
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50"
                    disabled
                  >
                    Anterior
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                    1
                  </button>
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    Próximo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
// ...existing code...
