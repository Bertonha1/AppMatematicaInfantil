export function Button({ children, ...props }) {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md text-lg transition"
        {...props}
      >
        {children}
      </button>
    );
  }
  