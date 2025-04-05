export function Card({ children }) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-4 w-full h-full">
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className }) {
    return <div className={`text-center ${className}`}>{children}</div>;
  }
  