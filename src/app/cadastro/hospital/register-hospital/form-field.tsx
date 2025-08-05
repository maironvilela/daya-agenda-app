import { UseFormRegister, FieldError } from 'react-hook-form';
import { FormData } from './types/form';

interface FormFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<FormData>;
  error?: FieldError;
  type?: 'text' | 'select';
  options?: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  register,
  error,
  type = 'text',
  options,
  placeholder,
  required = false,
}) => {
  const fieldName = name as
    | keyof FormData
    | `endereco.${keyof FormData['endereco']}`;

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-600"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === 'select' && options ? (
        <select
          id={name}
          {...register(fieldName as any, {
            required: required ? `${label} é obrigatório` : false,
          })}
          className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-700/50 transition-colors ${
            error ? 'border-red-500' : 'border-slate-700/50'
          }`}
        >
          <option value="">Selecione...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type="text"
          placeholder={placeholder}
          {...register(fieldName as any, {
            required: required ? `${label} é obrigatório` : false,
          })}
          className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-700/50 transition-colors ${
            error ? 'border-red-500' : 'border-slate-700/50'
          }`}
        />
      )}

      {error && (
        <p className="text-sm text-red-600 flex items-center">
          <span className="mr-1">⚠</span>
          {error.message}
        </p>
      )}
    </div>
  );
};
