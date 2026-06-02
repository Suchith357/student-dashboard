const StudentCard = ({
  name,
  age,
  removeStudent,
  updateStudent,
  id,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
            {name[0].toUpperCase()}
          </div>

          <div>
            <h2 className="font-semibold text-gray-900">
              {name}
            </h2>

            <p className="text-sm text-gray-500">
              Age {age}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mt-5">
        <button
          onClick={() => updateStudent(id)}
          className="flex-1 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Update
        </button>

        <button
          onClick={() => removeStudent(id)}
          className="flex-1 border border-red-300 text-red-600 py-2 rounded-lg hover:bg-red-50 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;