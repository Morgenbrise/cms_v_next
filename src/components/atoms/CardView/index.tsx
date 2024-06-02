export function CardView({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border border-solid border-[#DBDFE9] rounded-lg p-5 mt-5">
      {children}
    </div>
  );
}
