'use client';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { deleteUser, addUser } from "@/redux/tables/tablesSlice";
import { User } from "@/types/user";
import AddUserPopup from "../AddUserPopup";

const TableFive: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.tables.users);
  const [isAddUserPopupOpen, setIsAddUserPopupOpen] = useState(false);

  const handleDelete = (index: number) => {
    dispatch(deleteUser(index));
  };

  const handleAddUser = (user: User) => {
    dispatch(addUser(user));
    setIsAddUserPopupOpen(false);
  };

  return (
    <div className="overflow-hidden rounded-[10px]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1170px]">
          {/* Table header */}
          <div className="grid grid-cols-12 bg-[#F9FAFB] px-5 py-4 dark:bg-meta-4 lg:px-7.5 2xl:px-11 items-center">
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
            <div className="col-span-1 flex justify-end">
              <button
                onClick={() => setIsAddUserPopupOpen(true)}
                className="px-3 py-1.5 bg-blue-500 text-white rounded-md text-sm"
              >
                Add User
              </button>
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
                <div className="col-span-1 flex items-center">
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-primary text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isAddUserPopupOpen && (
        <AddUserPopup
          onClose={() => setIsAddUserPopupOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export default TableFive;