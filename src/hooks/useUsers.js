import { useState, useEffect } from "react";
import api from "../utils/api";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (data) => {
    try {
      const res = await api.post("/users", data);
      setUsers([...users, res.data]);
    } catch (err) {
      console.error("Gagal menambah user:", err);
    }
  };

  const updateUser = async (id, data) => {
    try {
      const res = await api.put(`/users/${id}`, data);
      setUsers(users.map((u) => (u.id === id ? res.data : u)));
    } catch (err) {
      console.error("Gagal update user:", err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      console.error("Gagal hapus user:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, addUser, updateUser, deleteUser };
};

export default useUsers;
