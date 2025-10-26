import React, { useEffect, useState } from "react";
import students from "../src/data/Student"; // ensure path is correct

function StudentList() {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [section, setSection] = useState("");
  const [id, setId] = useState(0);

  // Load initial data
  useEffect(() => {
    setData(students);
  }, []);

  // Edit
  const handleEdit = (id) => {
    if (id > 0) {
      const dt = data.find((item) => item.id === id);
      if (dt) {
        setId(dt.id);
        setName(dt.name);
        setStudentClass(dt.studentClass || dt.class); // fallback if old key
        setSection(dt.section);
      }
    }
  };

  // Delete
  const handleDelete = (id) => {
    if (id > 0 && window.confirm("Are you sure to delete this item?")) {
      const dt = data.filter((item) => item.id !== id);
      setData(dt);
    }
  };

  // Save or Update
  const handleSave = () => {
    if (!name || !studentClass || !section) {
      alert("Please fill all fields before saving!");
      return;
    }

    if (id === 0) {
      const newStudent = {
        id: data.length + 1,
        name,
        studentClass,
        section,
      };
      setData([...data, newStudent]);
    } else {
      const index = data.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedList = [...data];
        updatedList[index] = { id, name, studentClass, section };
        setData(updatedList);
      }
    }
    handleClear();
  };

  // Clear form
  const handleClear = () => {
    setId(0);
    setName("");
    setStudentClass("");
    setSection("");
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>Class</label>
          <input
            type="text"
            placeholder="Enter class"
            onChange={(e) => setStudentClass(e.target.value)}
            value={studentClass}
          />
        </div>
        <div>
          <label>Section</label>
          <input
            type="text"
            placeholder="Enter section"
            onChange={(e) => setSection(e.target.value)}
            value={section}
          />
        </div>
      </div>

      <div className="mt-3 text-center">
        <button className="btn btn-primary me-2" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-danger" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className="container mt-4">
        <h2>Student Details</h2>
        <p>Here is the list of students:</p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Class</th>
              <th>Section</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.studentClass || student.class}</td>
                <td>{student.section}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleEdit(student.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;
