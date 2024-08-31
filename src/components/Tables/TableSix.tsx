"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { User } from "@/types/user";
import DropdownFour from "@/components/Dropdowns/DropdownFour";
import EditUserPopup from "@/components/EditUserPopup";
import { deleteUser } from "@/redux/tables/tablesSlice"; // Update this path if needed

const TableSix: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.tables.users);

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(null);

  const handleEdit = (index: number) => {
    setSelectedUserIndex(index);
    setIsEditPopupOpen(true);
  };

  const handleDelete = (index: number) => {
    dispatch(deleteUser(index));
  };

  const handleCloseEditPopup = () => {
    setIsEditPopupOpen(false);
    setSelectedUserIndex(null);
  };

  return (
    <div className="max-w-full overflow-x-auto">
      <div className="min-w-[1170px]">
        {/* Table header start */}
        <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
          <div className="col-span-3">
            <h5 className="font-medium text-white">Name</h5>
          </div>
          <div className="col-span-3">
            <h5 className="font-medium text-white">Position</h5>
          </div>
          <div className="col-span-3">
            <h5 className="font-medium text-white">Email</h5>
          </div>
          <div className="col-span-2">
            <h5 className="font-medium text-white">Role</h5>
          </div>
          <div className="col-span-1">
            <h5 className="text-right font-medium text-white">Edit</h5>
          </div>
        </div>
        {/* Table header end */}

        {/* Table body start */}
        <div className="rounded-b-[10px] bg-white dark:bg-boxdark">
          {users.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"
            >
              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">{item.name}</p>
              </div>

              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.title}
                </p>
              </div>

              <div className="col-span-3">
                <p className="text-[#637381] dark:text-bodydark">
                  {item.email}
                </p>
              </div>

              <div className="col-span-2">
                <p className="text-[#637381] dark:text-bodydark">{item.role}</p>
              </div>
              <div className="relative col-span-1">
                <DropdownFour
                  classes={
                    index < 2
                      ? "top-full mt-1"
                      : index >= users.length - 2
                      ? "bottom-full mb-1"
                      : ""
                  }
                  onEdit={() => handleEdit(index)}
                  onDelete={() => handleDelete(index)}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Table body end */}
      </div>
      {isEditPopupOpen && selectedUserIndex !== null && (
        <EditUserPopup
          user={users[selectedUserIndex]}
          onClose={handleCloseEditPopup}
          index={selectedUserIndex}
        />
      )}
    </div>
  );
};

export default TableSix;