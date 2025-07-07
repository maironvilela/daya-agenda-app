import { Card } from '@/components/card';
import Image from 'next/image';
import checkDouble from '@/icons/check-double.svg';

export function Header() {
  return (
    <header className="flex  lex-grow gap-4 ">
      <Card title="Total de Cirurgias" value={10}>
        <Image src={checkDouble} alt="Bed Pulse" width={30} height={30} />
      </Card>

      <Card title="Cirurgias Realizadas" value={10}>
        <Image src={checkDouble} alt="Bed Pulse" width={30} height={30} />
      </Card>

      <Card title="Cirurgias Canceladas" value={10}>
        <Image src={checkDouble} alt="Bed Pulse" width={30} height={30} />
      </Card>

      <Card title="Cirurgias Agendadas" value={10}>
        <Image src={checkDouble} alt="Bed Pulse" width={30} height={30} />
      </Card>
    </header>
  );
}
