import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { User, MapPin, CheckCircle, AlertCircle, Hospital } from 'lucide-react';
import { FormData } from './types/form';
import { FormField } from './form-field';
import { Container } from '@/app/components/container';
import { Loading } from '@/app/components/loading';

export const UserForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simula uma chamada de API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Dados do formulário:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  const statusOptions = [
    { value: 'ativo', label: 'Ativo' },
    { value: 'inativo', label: 'Inativo' },
    { value: 'pendente', label: 'Pendente' },
  ];

  if (isLoading) {
    return <Loading message="Formulário enviado com sucesso!" />;
  }

  if (isSubmitted) {
    return (
      <Container className="h-[70vh] flex items-center justify-center p-4 mt-2">
        <Container className="rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-50 mb-2">Sucesso!</h2>
          <p className="text-gray-50">Formulário enviado com sucesso.</p>
        </Container>
      </Container>
    );
  }

  return (
    <Container>
      <div>
        <div className="rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <header className="flex flex-row items-center justify-between w-full bg-slate-800/50 backdrop-blur-xl px-4 py-4 rounded-lg z-50">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2items-center text-white">
                <Hospital />
                <strong>Cadastro Hospitais</strong>
              </div>

              <span>Gerencie todos os hospitais do sistema</span>
            </div>
          </header>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Dados Pessoais */}
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <User className="w-5 h-5 text-slate-500 mr-2" />
                  <h2 className="text-xl font-semibold text-slate-500">
                    Dados Pessoais
                  </h2>
                </div>

                <FormField
                  label="Nome completo"
                  name="nome"
                  register={register}
                  error={errors.nome}
                  placeholder="Digite seu nome completo"
                  required
                />

                <FormField
                  label="Status"
                  name="status"
                  register={register}
                  error={errors.status}
                  type="select"
                  options={statusOptions}
                  required
                />
              </div>

              {/* Endereço */}
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-slate-500 mr-2" />
                  <h2 className="text-xl font-semibold text-slate-500">
                    Endereço
                  </h2>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <FormField
                      label="Rua"
                      name="endereco.rua"
                      register={register}
                      error={errors.endereco?.rua}
                      placeholder="Nome da rua"
                      required
                    />
                  </div>
                  <FormField
                    label="Número"
                    name="endereco.numero"
                    register={register}
                    error={errors.endereco?.numero}
                    placeholder="123"
                    required
                  />
                </div>

                <FormField
                  label="Complemento"
                  name="endereco.complemento"
                  register={register}
                  error={errors.endereco?.complemento}
                  placeholder="Apartamento, bloco, etc. (opcional)"
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    label="Bairro"
                    name="endereco.bairro"
                    register={register}
                    error={errors.endereco?.bairro}
                    placeholder="Nome do bairro"
                    required
                  />
                  <FormField
                    label="Cidade"
                    name="endereco.cidade"
                    register={register}
                    error={errors.endereco?.cidade}
                    placeholder="Nome da cidade"
                    required
                  />
                </div>

                <FormField
                  label="Ponto de referência"
                  name="endereco.pontoReferencia"
                  register={register}
                  error={errors.endereco?.pontoReferencia}
                  placeholder="Próximo ao shopping, escola, etc. (opcional)"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t border-slate-700">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Cadastrar Usuário
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Validation Summary */}
        {Object.keys(errors).length > 0 && (
          <div className="mt-6 bg-slate-700/50 border border-red-500 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="font-semibold text-red-800">
                Corrija os seguintes erros:
              </h3>
            </div>
            <ul className="text-sm text-red-700 space-y-1">
              {errors.nome && <li>• {errors.nome.message}</li>}
              {errors.status && <li>• {errors.status.message}</li>}
              {errors.endereco?.rua && <li>• {errors.endereco.rua.message}</li>}
              {errors.endereco?.numero && (
                <li>• {errors.endereco.numero.message}</li>
              )}
              {errors.endereco?.bairro && (
                <li>• {errors.endereco.bairro.message}</li>
              )}
              {errors.endereco?.cidade && (
                <li>• {errors.endereco.cidade.message}</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};
