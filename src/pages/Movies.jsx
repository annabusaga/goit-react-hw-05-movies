const Movies = () => {
  //  // http-запис
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {Array.map(movie => {
          return <Link key={movie} to={`${movie}`}></Link>;
        })}
      </ul>
    </div>
  );
};

export default Movies;
