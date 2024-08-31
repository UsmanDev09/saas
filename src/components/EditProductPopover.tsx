import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '@/redux/tables/tablesSlice';
import { Product } from '@/types/product';

interface EditProductPopoverProps {
  product: Product;
  onClose: () => void;
}

const EditProductPopover: React.FC<EditProductPopoverProps> = ({ product, onClose }) => {
  const [editedProduct, setEditedProduct] = useState<Product>(product);
  const dispatch = useDispatch();
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: name === 'price' || name === 'sold' || name === 'profit'
        ? Number(value)
        : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateProduct(editedProduct));
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
        <h3 className="text-lg font-semibold mb-4">Edit Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={editedProduct.category}
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
              value={editedProduct.price.toString()}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Sold</label>
            <input
              type="number"
              name="sold"
              value={editedProduct.sold.toString()}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Profit</label>
            <input
              type="number"
              name="profit"
              value={editedProduct.profit.toString()}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
          <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditProductPopover;