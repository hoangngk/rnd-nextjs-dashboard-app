import { usePathname, useSearchParams } from 'next/navigation';

const useCreatePageUrl = (page: string | number): string => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const urlSearchParams = new URLSearchParams(searchParams);
  urlSearchParams.set('page', page.toString());

 return `${pathName}?${urlSearchParams.toString()}`;
};

export default useCreatePageUrl;
