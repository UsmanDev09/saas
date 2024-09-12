'use client';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { addUser, deleteUser } from "@/redux/tables/tablesSlice";
import { User } from "@/types/user";
import AddUserPopup from "../AddUserPopup";
import EditUserPopup from "../EditUserPopup";
import { FaEdit, FaTrash } from 'react-icons/fa';

const TableFive: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.tables.users);
  const [isAddUserPopupOpen, setIsAddUserPopupOpen] = useState(false);
  const [isEditUserPopupOpen, setIsEditUserPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(null);

  const handleDelete = (index: number) => {
    dispatch(deleteUser(index));
  };

  const handleAddUser = (user: User) => {
    dispatch(addUser(user));
    setIsAddUserPopupOpen(false);
  };

  const handleEditUser = (user: User, index: number) => {
    setSelectedUser(user);
    setSelectedUserIndex(index);
    setIsEditUserPopupOpen(true);
  };

  const closeEditUserPopup = () => {
    setIsEditUserPopupOpen(false);
    setSelectedUser(null);
    setSelectedUserIndex(null);
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
            <div className="col-span-1 flex justify-start">
              <button
                onClick={() => setIsAddUserPopupOpen(true)}
                className="px-3 py-1.5 ml-4 bg-blue-500 text-white rounded-md text-sm"
              >
                +
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
                <div className="col-span-1 flex justify-start gap-4 space-x-2">
                  <button
                    onClick={() => handleEditUser(user, index)}
                    className="text-primary mr-2"
              >
                <FaEdit className="cursor-pointer text-primary" />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500"
              >
                <FaTrash className="cursor-pointer text-red-500" />
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
      {isEditUserPopupOpen && selectedUser !== null && selectedUserIndex !== null && (
        <EditUserPopup
          user={selectedUser}
          index={selectedUserIndex}
          onClose={closeEditUserPopup}
        />
      )}
    </div>
  );
};

export default TableFive;