import { createPortal } from 'react-dom';
import Form from './create-form';

interface CreateInvoiceModalProps {
  onCancel: () => void;
}

export default function CreateInvoiceModal({
  onCancel,
}: CreateInvoiceModalProps) {

  return (
    <>
      {createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <Form onCancel={onCancel}/>
        </div>,
        document.body
      )}
    </>
  );
}
