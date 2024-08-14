'use client';

import { createContext, ReactNode } from 'react';
import { CustomerField } from '@/app/lib/definitions';

export const CreateInvoiceContext = createContext<CustomerField[]>([]);

export const CreateInvoiceContextProvider = ({customers, children }: {customers: CustomerField[], children: ReactNode}) => {

  return (
    <CreateInvoiceContext.Provider value={customers}>
      {children}
    </CreateInvoiceContext.Provider>
  );
};