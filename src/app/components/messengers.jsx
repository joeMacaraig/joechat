export const Messengers = () => {
  const something = [
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
    "something",
  ];
  return (
    <section className="relative overflow-y-auto">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col border w-[300px] p-4">
        <h1>Messaged Joe - {something.length}</h1>
        <div>
          {something.map((item) => (
            <div className="pl-4 py-3 border border-black text-center flex items-center gap-2 mb-1">
              <div className="p-4 bg-black rounded-full"></div>
              <h1 className="">{item}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden top-5 right-5 absolute ">ICON</div>
    </section>
  );
};