'use client';

import { deleteInvoice } from '@/app/lib/actions';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../button';
import CreateInvoiceModal from './create-modal';
import DeleteInvoiceModal from './delete-modal';

export function CreateInvoice() {
  const [showCreationModal, setShowCreationModal] = useState(false);
  
  return (
    <>
      <Button
        className="rounded-md border p-2 hover:bg-gray-100"
        onClick={() => setShowCreationModal(true)}
      >
        <span className="hidden md:block">Create Invoice</span>{' '}
        <PlusIcon className="h-5 md:ml-4" />
      </Button>

      {showCreationModal && (
        <CreateInvoiceModal
          onCancel={() => setShowCreationModal(false)}
        />
      )}
    </>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showConfirmationPopup = () => {
    setIsModalOpen(true);
  };

  const deleteInvoiceWithId = async () => {
    setIsLoading(true);
    await deleteInvoice(id);
    setIsLoading(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="rounded-md border p-2 hover:bg-gray-100"
        onClick={showConfirmationPopup}
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
      {isModalOpen && (
        <DeleteInvoiceModal
          isDeleting={isLoading}
          onCancel={() => setIsModalOpen(false)}
          onDelete={deleteInvoiceWithId}
        />
      )}
    </>
  );
}
