type PaginateItemProps = {
  page: number;
  isSelected: boolean;
  handleChangePage: (page: number) => void;
};

export function PaginateItem({
  page,
  isSelected,
  handleChangePage,
}: PaginateItemProps) {
  return (
    <button
      className={`
    relative px-2
    ${
      isSelected
        ? 'text-blue-600 before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-2 before:h-0.5 before:bg-blue-600'
        : 'text-blue-400'
    }
    ${
      isSelected
        ? ''
        : 'hover:brightness-75 hover:before:content-[""] hover:before:absolute hover:before:left-0 hover:before:right-0 hover:before:bottom-2 hover:before:h-0.5 hover:before:bg-blue-400'
    }  `}
      onClick={() => handleChangePage(page)}
    >
      {page}
    </button>
  );
}
