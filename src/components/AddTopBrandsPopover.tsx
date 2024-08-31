import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBrand } from '@/redux/tables/tablesSlice';
import { BRAND } from '@/types/brand';

const AddTopBrandsPopover: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [newBrand, setNewBrand] = useState<BRAND>({
    name: '',
    logo: '',
    visitors: 0,
    revenues: '',
    sales: 0,
    conversion: 0,
  });
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
    setNewBrand(prevBrand => ({
      ...prevBrand,
      [name]: name === 'visitors' || name === 'revenues' || name === 'sales' || name === 'conversion'
        ? Number(value) // Convert string to number
        : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addBrand(newBrand));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-boxdark max-w-md w-full" ref={popoverRef}>
        <h3 className="text-lg font-semibold mb-4">Add New Brand</h3>
        <form onSubmit={handleSubmit}>
          {['name', 'logo', 'visitors', 'revenues', 'sales', 'conversion'].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-sm font-medium mb-2 capitalize">{field}</label>
              <input
                type={field === 'name' || field === 'logo' ? 'text' : 'number'}
                name={field}
                value={field === 'logo' ? newBrand.logo : newBrand[field as keyof BRAND]}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}
          <div className="flex gap-2">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">Add</button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-black px-4 py-2 rounded-lg shadow hover:bg-gray-600">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTopBrandsPopover;