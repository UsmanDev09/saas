import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateBrand } from '@/redux/tables/tablesSlice';
import { BRAND } from '@/types/brand';

interface EditTopBrandsPopoverProps {
  brand: BRAND;
  onClose: () => void;
}

const EditTopBrandsPopover: React.FC<EditTopBrandsPopoverProps> = ({ brand, onClose }) => {
  const [editedBrand, setEditedBrand] = useState<BRAND>(brand);
  const dispatch = useDispatch();
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBrand({ ...editedBrand, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateBrand(editedBrand));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-boxdark max-w-md w-full" ref={popoverRef}>
        <h3 className="text-lg font-semibold mb-4">Edit Brand</h3>
        <form onSubmit={handleSubmit}>
          {['name', 'visitors', 'revenues', 'sales', 'conversion'].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-sm font-medium mb-2 capitalize">{field}</label>
              <input
                type={field === 'name' ? 'text' : 'number'}
                name={field}
                value={editedBrand[field as keyof BRAND]}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <div className="flex gap-2">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">Save</button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTopBrandsPopover;