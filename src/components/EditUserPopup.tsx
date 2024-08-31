"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "@/redux/tables/tablesSlice"; // Update this path if needed
import { User } from "@/types/user";

interface EditUserPopupProps {
  user: User;
  onClose: () => void;
  index: number;
}

const EditUserPopup: React.FC<EditUserPopupProps> = ({ user, onClose, index }) => {
  const [name, setName] = useState(user.name);
  const [title, setTitle] = useState(user.title);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(updateUser({ index, user: { name, title, email, role } }));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Edit User</h2>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          Position:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>
        <label className="block mb-4">
          Role:
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditUserPopup;