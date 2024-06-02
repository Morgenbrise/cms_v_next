export function LeftBorderPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-auto pl-[40px] border-l-[1px] border-solid border-[#F1F1F4]">
      {children}
    </div>
  );
}
