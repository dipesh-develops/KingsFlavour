const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-evenly pl-32 pr-32 pt-5">
      {Array(16)
        .fill("")
        .map((index) => (
          <div className="w-[300px] h-[300px]" key={index}>
            <p className=" bg-gray-100 rounded-md h-[190px]"></p>
            <p className="bg-gray-100 w-40 h-4 mt-5 "></p>
            <p className="bg-gray-100 w-28 h-4 mt-3 "></p>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
