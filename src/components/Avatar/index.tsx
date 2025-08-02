import Image from "next/image";

type AvatarProps = {
  avatarUrl: string;
  isBorder?: boolean;
};
export function Avatar({ avatarUrl, isBorder = true }: AvatarProps) {
  return (
    <div className="flex flex-row gap-2">
      <Image
        alt="Avatar"
        src={avatarUrl}
        width={40}
        height={40}
        className="bg-slate-900/50 border-slate-700/50 border-2  rounded-full p-2 "
      />
      <div className="flex flex-col items-center justify-center">
        <strong className=" text-sm">Joao da Silveira</strong>
      </div>
    </div>
  );
}
