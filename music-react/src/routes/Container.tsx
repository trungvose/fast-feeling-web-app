export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='bg-[#212529] flex-1 pt-8'>
        <div className='container mx-auto'>
          {children}
        </div>
      </div>
    </>
  );
};
