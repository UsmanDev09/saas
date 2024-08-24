'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import DropdownDefault from '../Dropdowns/DropdownDefault';

const TableFour: React.FC = () => {
  // Access the brand data from Redux store
  const brands = useSelector((state: RootState) => state.tables.brands);

  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 flex justify-between">
          <div>
            <h4 className="text-title-sm2 font-bold text-black dark:text-white">
              Top Channels
            </h4>
          </div>
          <DropdownDefault onDelete={function (): void {
            throw new Error("Function not implemented.");
          } } onEdit={function (): void {
            throw new Error("Function not implemented.");
          } } />
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
            <div className="p-2.5 xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Source
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Visitors
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Revenues
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Conversion
              </h5>
            </div>
          </div>

          {brands.map((brand, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-4 ${
                key === brands.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="h-9 w-full max-w-9 flex-shrink-0">
                  <Image src={brand.logo} width={60} height={50} alt="Brand" />
                </div>
                <p className="hidden font-medium text-black dark:text-white sm:block">
                  {brand.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium text-black dark:text-white">
                  {brand.visitors}K
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="font-medium text-meta-3">${brand.revenues}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="font-medium text-meta-5">{brand.conversion}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableFour;