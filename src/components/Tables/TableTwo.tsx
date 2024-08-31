'use client';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { RootState } from '@/redux/store';
import { deleteProduct } from '@/redux/tables/tablesSlice';
import EditProductPopover from '../EditProductPopover';
import AddProductPopover from '../AddProductPopover';
import { Product } from '@/types/product';
import { useState } from 'react';

const TableTwo = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.tables.products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditPopoverOpen, setIsEditPopoverOpen] = useState(false);
  const [isAddPopoverOpen, setIsAddPopoverOpen] = useState(false);

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsEditPopoverOpen(true);
  };

  const handleDelete = (productName: string) => {
    dispatch(deleteProduct(productName));
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
        <button
          onClick={() => setIsAddPopoverOpen(true)}
          className="text-primary text-2xl w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full"
        >
          +
        </button>
      </div>

      <div className="flex flex-col space-y-4"> {/* Added space between sections */}
        <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Product Name
            </h5>
          </div>
          <div className="hidden sm:flex p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Category
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Price
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sold
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Profit
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>

        {products.map((product: Product, key: number) => (
          <div
            className={`grid grid-cols-6 ${
              key === products.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                {product.image ? (
                  <Image src={product.image} alt="Product" width={48} height={48} />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {product.name}
              </p>
            </div>

            <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {product.category}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                ${product.price}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {product.sold}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">
                ${product.profit}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <button
                onClick={() => handleEdit(product)}
                className="text-primary mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.name)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {isEditPopoverOpen && selectedProduct && (
          <EditProductPopover
            product={selectedProduct}
            onClose={() => setIsEditPopoverOpen(false)}
          />
        )}
        {isAddPopoverOpen && (
          <AddProductPopover onClose={() => setIsAddPopoverOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default TableTwo;