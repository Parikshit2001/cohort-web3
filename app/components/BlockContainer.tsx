function BlockContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-300 py-3 px-4">
      {children}
    </div>
  );
}

export default BlockContainer;
