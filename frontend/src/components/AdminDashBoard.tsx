import React, { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";

const STATUS_OPTIONS = [
  "Pending",
  "Confirmed",
  "In Progress",
  "Completed",
  "Cancelled",
];

interface Booking {
  _id: string;
  name: string;
  email: string;
  eventType: string;
  date: string;
  status: string;
  localStatus?: string;
}

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(8);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/events", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookings(response.data);
        setFilteredBookings(response.data);
      } catch (err) {
        setError("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchBookings();
    }
  }, [token]);

  useEffect(() => {
    let filtered = bookings;
    if (searchTerm) {
      filtered = filtered.filter(
        (b) =>
          b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (statusFilter) {
      filtered = filtered.filter((b) => b.status === statusFilter);
    }
    setFilteredBookings(filtered);
    setCurrentPage(1);
  }, [searchTerm, statusFilter, bookings]);

  const handleStatusChange = (id: string, newStatus: string) => {
    setFilteredBookings((prev) =>
      prev.map((booking) =>
        booking._id === id ? { ...booking, localStatus: newStatus } : booking
      )
    );
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await axios.put(
        `http://localhost:5000/api/events/${id}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Status updated successfully");

      const updated = bookings.map((b) =>
        b._id === id ? { ...b, status, localStatus: undefined } : b
      );
      setBookings(updated);
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
    }
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(filteredBookings);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "bookings.csv");
    link.click();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredBookings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p className="text-red-600 text-4xl">{error}</p>;

  return (
    <div className="mt-32 p-4 max-w-7xl mx-auto text-black">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Bookings</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/3"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/3"
        >
          <option value="">All Statuses</option>
          {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <button
          onClick={exportToCSV}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Export CSV
        </button>
        <button
          onClick={handleLogout}
          className="bg-[#a38e13] text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border">
          <thead>
            <tr className="bg-[#a38e13] text-white">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Event Type</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((booking) => (
              <tr key={booking._id}>
                <td className="p-2 border">{booking.name}</td>
                <td className="p-2 border">{booking.email}</td>
                <td className="p-2 border">{booking.eventType}</td>
                <td className="p-2 border">
                  {new Date(booking.date).toLocaleDateString()}
                </td>
                <td className="p-2 border">
                  <select
                    value={booking.localStatus || booking.status}
                    onChange={(e) =>
                      handleStatusChange(booking._id, e.target.value)
                    }
                    className="border p-1 rounded"
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() =>
                      updateStatus(
                        booking._id,
                        booking.localStatus || booking.status
                      )
                    }
                    className="bg-[#a38e13] text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === i + 1
                ? "bg-[#a38e13] text-white"
                : "bg-white text-[#a38e13]"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
