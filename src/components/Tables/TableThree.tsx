'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { deletePackage, updatePackage } from '@/redux/tables/tablesSlice';
import { Package } from '@/types/package';
import EditPackagePopover from '../EditPackagePopover';
import AddPackagePopover from '../AddPackagePopover';
import { useState } from 'react';

const TableThree = () => {
  const dispatch = useDispatch();
  const packages = useSelector((state: RootState) => state.tables.packages);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isEditPopoverOpen, setIsEditPopoverOpen] = useState(false);
  const [isAddPopoverOpen, setIsAddPopoverOpen] = useState(false);

  const handleEdit = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsEditPopoverOpen(true);
  };

  const handleDelete = (packageName: string) => {
    dispatch(deletePackage(packageName));
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Packages
        </h4>
        <button
          onClick={() => setIsAddPopoverOpen(true)}
          className="text-primary text-2xl w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full"
        >
          +
        </button> 
      </div>

      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Price
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Invoice Date
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>

        {packages.map((pkg: Package, key: number) => (
          <div
            className={`grid grid-cols-4 sm:grid-cols-5 ${
              key === packages.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{pkg.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">${pkg.price}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{pkg.invoiceDate}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className={`text-${pkg.status === 'Active' ? 'green-500' : 'red-500'}`}>
                {pkg.status}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <button
                onClick={() => handleEdit(pkg)}
                className="text-primary mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(pkg.name)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {isEditPopoverOpen && selectedPackage && (
          <EditPackagePopover
            onClose={() => setIsEditPopoverOpen(false)}
            pkg={selectedPackage}
          />
        )}
        {isAddPopoverOpen && (
          <AddPackagePopover onClose={() => setIsAddPopoverOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default TableThree;