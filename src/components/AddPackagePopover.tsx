import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPackage } from '@/redux/tables/tablesSlice';
import { Package } from '@/types/package';

interface AddPackagePopoverProps {
  onClose: () => void;
}

const AddPackagePopover: React.FC<AddPackagePopoverProps> = ({ onClose }) => {
  const [newPackage, setNewPackage] = useState<Package>({
    name: '',
    price: 0,
    invoiceDate: '',
    status: 'Inactive',
  });
  const dispatch = useDispatch();
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPackage({
      ...newPackage,
      [name]: name === 'price'
        ? Number(value)
        : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPackage(newPackage));
    onClose();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        ref={popoverRef}
        className="bg-white p-6 rounded shadow-lg dark:bg-boxdark max-w-lg w-full"
      >
        <h3 className="text-lg font-semibold mb-4">Add New Package</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={newPackage.name}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={newPackage.price.toString()}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Invoice Date</label>
            <input
              type="text"
              name="invoiceDate"
              value={newPackage.invoiceDate}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Status</label>
            <input
              type="text"
              name="status"
              value={newPackage.status}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Add</button>
          <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddPackagePopover;