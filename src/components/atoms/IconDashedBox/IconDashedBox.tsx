const IconDashedBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-10 h-10 inline-flex items-center justify-center border border-[#DBDFE9] border-dashed rounded-lg p-0 outline-0 mx-1">
      {children}
    </div>
  );
};

export default IconDashedBox;
