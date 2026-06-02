import { useState, useEffect } from "react";
import StudentCard from "../components/StudentCard";

const API_URL =
  "https://student-dashboard-backend-lu2v.onrender.com";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await fetch(`${API_URL}/students`);
    const data = await response.json();
    setStudents(data);
  };

  const addStudent = async () => {
    if (name === "" || age === "") return;

    const newStudent = {
      name,
      age: Number(age),
    };

    await fetch(`${API_URL}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });

    fetchStudents();

    setName("");
    setAge("");
  };

  const removeStudent = async (id) => {
    await fetch(`${API_URL}/students/${id}`, {
      method: "DELETE",
    });

    fetchStudents();
  };

  const updateStudent = async (id) => {
    const student = students.find(
      (student) => student._id === id,
    );

    const updatedStudent = {
      ...student,
      age: Number(student.age) + 1,
    };

    await fetch(`${API_URL}/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudent),
    });

    fetchStudents();
  };

  return (
  <div className="min-h-screen bg-gray-50 p-4 md:p-8">
    <div className="max-w-7xl mx-auto">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Student Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Manage students efficiently
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-gray-500 text-sm">
            Total Students
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            {students.length}
          </h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <p className="text-gray-500 text-sm">
            Adults
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            {
              students.filter(
                (student) => student.age >= 18
              ).length
            }
          </h2>
        </div>

      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">

        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Add Student
        </h2>

        <div className="flex flex-col md:flex-row gap-3">

          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="md:w-40 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />

          <button
            onClick={addStudent}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Add Student
          </button>

        </div>

      </div>

      <div className="mb-6">

        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

        {students
          .filter((student) =>
            student.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((student) => (
            <StudentCard
              key={student._id}
              id={student._id}
              name={student.name}
              age={student.age}
              removeStudent={removeStudent}
              updateStudent={updateStudent}
            />
          ))}

      </div>

    </div>
  </div>
);
};

export default Dashboard;