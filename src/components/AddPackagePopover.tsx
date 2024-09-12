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
      [name]: name === 'price' ? Number(value) : value,
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
    <div className={`fixed inset-0 flex items-center justify-center z-99999 bg-black bg-opacity-80 px-4 py-5`}>
      <div
        ref={popoverRef}
        className="relative w-full max-w-md rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4"
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-5 sm:top-5"
        >
          <svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z"
              fill=""
            />
          </svg>
        </button>

        <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Add New Package</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2.5 font-medium text-black dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={newPackage.name}
              onChange={handleChange}
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2.5 font-medium text-black dark:text-white">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={newPackage.price.toString()}
              onChange={handleChange}
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2.5 font-medium text-black dark:text-white">
              Invoice Date
            </label>
            <input
              type="text"
              name="invoiceDate"
              value={newPackage.invoiceDate}
              onChange={handleChange}
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2.5 font-medium text-black dark:text-white">
              Status
            </label>
            <input
              type="text"
              name="status"
              value={newPackage.status}
              onChange={handleChange}
              className="w-full rounded-sm border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:text-white dark:focus:border-primary"
              required
            />
          </div>
          <div className="flex justify-end gap-2.5">
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-sm border border-transparent bg-primary py-2 px-4 text-base font-medium text-white shadow-button transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:bg-opacity-70 dark:bg-primary dark:hover:bg-primary/90 dark:focus:ring-primary"
            >
              Add
            </button>
            {/* <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 items-center justify-center rounded-sm border border-transparent bg-secondary py-2 px-4 text-base font-medium text-white shadow-button transition hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:pointer-events-none disabled:bg-opacity-70 dark:bg-secondary dark:hover:bg-secondary/90 dark:focus:ring-secondary"
            >
              Cancel
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPackagePopover; 