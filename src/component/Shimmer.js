const Shimmer = () => {
  return (
    <div className="list">
      {Array(16)
        .fill("")
        .map((index) => (
          <div className="shimmerCard" key={index}>
            <p></p>
            <p></p>
            <p></p>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
