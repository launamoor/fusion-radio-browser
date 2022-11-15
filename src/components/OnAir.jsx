const OnAir = function ({ className }) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center font-thin tracking-widest py-4 px-12 border-base-300 shadow-2xl shadow-slate-500 border rounded-xl animate-pulse">
        <div className="text-3xl lg:text-6xl text-gradient whitespace-nowrap select-none">
          ON AIR
        </div>
      </div>
    </div>
  );
};

export default OnAir;
