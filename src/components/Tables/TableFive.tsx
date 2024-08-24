'use client';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { deleteUser } from "@/redux/tables/tablesSlice";
import { User } from "@/types/user";

const TableFive: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.tables.users);

  const handleDelete = (index: number) => {
    dispatch(deleteUser(index));
  };

  return (
    <div className="overflow-hidden rounded-[10px]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1170px]">
          {/* Table header */}
          <div className="grid grid-cols-12 bg-[#F9FAFB] px-5 py-4 dark:bg-meta-4 lg:px-7.5 2xl:px-11">
            <div className="col-span-3">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">
                NAME
              </h5>
            </div>
            <div className="col-span-3">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">
                TITLE
              </h5>
            </div>
            <div className="col-span-3">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">
                EMAIL
              </h5>
            </div>
            <div className="col-span-2">
              <h5 className="font-medium text-[#637381] dark:text-bodydark">
                ROLE
              </h5>
            </div>
          </div>
          {/* Table body */}
          <div className="bg-white dark:bg-boxdark">
            {users.map((user, index) => (
              <div
                key={index}
                className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
              >
                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">
                    {user.name}
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">
                    {user.title}
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">
                    {user.email}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-[#637381] dark:text-bodydark">
                    {user.role}
                  </p>
                </div>
                <div className="col-span-1">
                  <button
                    onClick={() => handleDelete(index)}
                    className="float-right text-primary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableFive;