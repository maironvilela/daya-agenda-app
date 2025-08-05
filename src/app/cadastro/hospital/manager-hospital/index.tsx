'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Container } from '@/app/components/container';
import { Loading } from '@/app/components/loading';
import { ParticleEffect } from '@/app/dashboard/components/particle-effect';
import { Button } from '@radix-ui/themes';
import {
  Activity,
  Edit,
  Flag,
  Pencil,
  Plus,
  Search,
  Trash,
  Trash2,
  View,
  ViewIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Item } from '@radix-ui/react-dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ManageHospitalRecord() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full">
      {isLoading && <Loading message="Carregando Pagina Cadastro Hospital" />}

      <div className="flex flex-col gap-2">
        <HeaderTable />
      </div>
    </div>
  );
}

const HeaderTable = () => {
  return (
    <>
      <Container className="flex flex-col  items-start gap-4 overflow-hidden justify-center">
        <header className="flex flex-row items-center justify-between w-full bg-slate-800/50 backdrop-blur-xl px-4 py-2 rounded-lg z-50">
          <div className="flex flex-col">
            <strong>Lista Hospitais</strong>
            <span>Gerencie todos os hospitais do sistema</span>
          </div>

          <div className="px-4 py-2 border border-gray-50 hover:border-0  rounded-lg focus:ring-2  flex flex-row z-50">
            <input
              type="text"
              placeholder="Buscar Hospital..."
              className="outline-0"
            />
            <Search />
          </div>
        </header>
        <main className="overflow-scroll backdrop-blur-xl h-120 w-full">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-800/50 w-full">
              <thead className="bg-slate-800/50 border-b-4 border-slate-400/50">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider  "
                  >
                    Nome
                  </th>

                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider w-32 "
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className=" pl-2 py-3 text-start text-xs font-medium text-gray-50 uppercase tracking-wider w-24"
                  >
                    Detalhes
                  </th>
                </tr>
              </thead>
              <tbody
                className="bg-slate-800/50 divide-y divide-gray-200 "
                id="users-table-body"
              >
                <ItemList />
                <ItemList />

                <ItemList />

                <ItemList />
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </main>
        <footer className="justify-center flex my-8 z-50 mx-auto">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </footer>
      </Container>
    </>
  );
};

const ItemList = () => {
  return (
    <tr className="hover:bg-slate-800/50 transition duration-150 ease-in-out border-b-slate-600 ">
      <td className="p-4">Mais Saude Santo Agostinho</td>

      <td className="p-2 justify-center">
        <span className="bg-blue-400 rounded-full text-white px-4 py-2">
          Ativo
        </span>
      </td>
      <td className="p-2 flex flex-row gap-2 items-center justify-center">
        <Tooltip>
          <TooltipTrigger>
            <Dialog>
              <DialogTrigger>...</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Mater Dei Contorno</DialogTitle>
                  <DialogDescription className="flex flex-col gap-4 mt-8">
                    <div>
                      <strong>Rua: </strong>
                      <span>Rua Bernardo Vasconselhos</span>
                    </div>
                    <div>
                      <strong>Número: </strong>
                      <span>204</span>
                    </div>
                    <div>
                      <strong>Referencia: </strong>
                      <span>Próximo a praça Milton Campos</span>
                    </div>
                    <div>
                      <strong>Bairro: </strong>
                      <span>Lourdes</span>
                    </div>
                    <div>
                      <strong>Cidade: </strong>
                      <span>MG</span>
                    </div>

                    <div className="space-x-2 mx-auto py-4">
                      <button className="bg-red-500 p-2 rounded-2xl text-white hover:bg-red-600 transition duration-150 ease-in-out w-16">
                        Apagar
                      </button>

                      <button className="bg-blue-500 p-2 rounded-2xl text-white hover:bg-blue-600 transition duration-150 ease-in-out w-16">
                        Editar
                      </button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </TooltipTrigger>
          <TooltipContent className="flex justify-center items-center flex-col">
            <p>Exibir Detalhes do Hospital</p>
            <p>Matedei Mais Saude</p>
          </TooltipContent>
        </Tooltip>
      </td>
    </tr>
  );
};
