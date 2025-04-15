export function Button({ children, variant = "blue", ...props }) {
  const colorVariants = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    pink: "bg-pink-500 hover:bg-pink-600",
    emerald: "bg-emerald-500 hover:bg-emerald-600",
  };

  const backgroundColor = colorVariants[variant] || colorVariants["blue"];

  return (
    <button
      title={props.title || ""}
      className={`${backgroundColor} text-white px-4 py-2 rounded-2xl shadow-md text-lg transition`}
      {...props}
    >
      {children}
    </button>
  );
}
