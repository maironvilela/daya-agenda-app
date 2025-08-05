'use client';

import { Container } from '@/app/components/container';
import { Loading } from '@/app/components/loading';

import { Activity, Pencil, Search, Trash2, ViewIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { ManageHospitalRecord } from './manager-hospital';
import { UserForm } from './register-hospital/index.';

export default function MangerHospital() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageRegisterHospital, setIsPageRegisterHospital] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-screen ">
      {isLoading && <Loading message="Carregando Pagina Hospital" />}

      <Header />
      <HeaderTable
        isPageRegisterHospital={isPageRegisterHospital}
        setPageRegisterHospital={setIsPageRegisterHospital}
      />

      <main>
        {isPageRegisterHospital ? <UserForm /> : <ManageHospitalRecord />}
      </main>
    </div>
  );
}

const Header = () => {
  return (
    <Container className="mb-2">
      <Activity color="#314158" />
      <h2 className="text-2xl">Cadastro de Hospital</h2>
    </Container>
  );
};

type HeaderTableProps = {
  isPageRegisterHospital: boolean;
  setPageRegisterHospital: (value: boolean) => void;
};

const HeaderTable = ({
  isPageRegisterHospital,
  setPageRegisterHospital,
}: HeaderTableProps) => {
  return (
    <>
      <Container className="flex flex-col  items-start gap-4 overflow-hidden justify-center z-50">
        <nav className="mx-auto">
          <ul className="flex flex-row gap-4 text-gray-100 z-50">
            <li
              className={
                isPageRegisterHospital ? '' : 'border-b-2 border-slate-400'
              }
            >
              <button
                onClick={() => {
                  setPageRegisterHospital(!isPageRegisterHospital);
                }}
              >
                Gerenciar Hospitais
              </button>
            </li>
            <li
              className={
                isPageRegisterHospital ? 'border-b-2 border-slate-400' : ''
              }
            >
              <button
                onClick={() => {
                  setPageRegisterHospital(!isPageRegisterHospital);
                }}
              >
                Cadastro Hospitais
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};

const ItemList = () => {
  return (
    <tr className="hover:bg-slate-800/50 transition duration-150 ease-in-out border-b-slate-800 ">
      <td className="p-4">Mais Saude Santo Agostinho</td>

      <td className="p-2 justify-center">Ativo</td>
      <td className="p-2 flex flex-row gap-2 items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>...</DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-800/80 text-gray-100 border-slate-700 ">
            <DropdownMenuItem>
              <button
                className="z-50 hover:text-gray-500 flex flex-row gap-2 items-center"
                onClick={() => {
                  alert('Botao Editar Pressionado');
                }}
              >
                <Pencil /> Editar
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                className="z-50 hover:text-gray-500 flex flex-row gap-2 items-center"
                onClick={() => {
                  alert('Botao Deletar Clicado');
                }}
              >
                <Trash2 />
                Deletar
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                className="z-50 hover:text-gray-500 flex flex-row gap-2 items-center"
                onClick={() => {
                  alert('Botao Visualizar Clicado');
                }}
              >
                <ViewIcon />
                Visualizar
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  );
};
