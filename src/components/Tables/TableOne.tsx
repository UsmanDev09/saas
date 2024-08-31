'use client';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { RootState } from '@/redux/store';
import { deleteBrand, updateBrand } from '@/redux/tables/tablesSlice';
import { BRAND } from '@/types/brand';
import EditTopBrandsPopover from '../EditTopBrandsPopover';
import AddTopBrandsPopover from '../AddTopBrandsPopover';
import { useState } from 'react';

const TableOne = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state: RootState) => state.tables.brands);
  const [selectedBrand, setSelectedBrand] = useState<BRAND | null>(null);
  const [isEditPopoverOpen, setIsEditPopoverOpen] = useState(false);
  const [isAddPopoverOpen, setIsAddPopoverOpen] = useState(false);

  const handleEdit = (brand: BRAND) => {
    setSelectedBrand(brand);
    setIsEditPopoverOpen(true);
  };

  const handleDelete = (brandName: string) => {
    dispatch(deleteBrand(brandName));
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Channels
        </h4>
        <button
          onClick={() => setIsAddPopoverOpen(true)}
          className="text-primary text-2xl w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full"
        >
          +
        </button> 
      </div>

      <div className="flex flex-col space-y-4"> {/* Added space between sections */}
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Visitors
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sales
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>

        {brands.map((brand: BRAND, key: number) => (
          <div
            className={`grid grid-cols-4 sm:grid-cols-6 ${
              key === brands.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                {brand.logo ? (
                  <Image src={brand.logo} alt="Brand" width={48} height={48} />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <button
                onClick={() => handleEdit(brand)}
                className="text-primary mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(brand.name)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {isEditPopoverOpen && selectedBrand && (
          <EditTopBrandsPopover
            onClose={() => setIsEditPopoverOpen(false)}
            brand={selectedBrand}
          />
        )}
        {isAddPopoverOpen && (
          <AddTopBrandsPopover onClose={() => setIsAddPopoverOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default TableOne;