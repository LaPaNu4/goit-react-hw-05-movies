export const GetDayMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzViOGM1OTc0MTZjYWRmYWRiYThiOGUxMDY2NmE3OCIsInN1YiI6IjY0YjQwZWEyMzc4MDYyMDBmZjM5MmMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vfNu1mi9Qt4Nu6fuFBkuv04SzXZGOKy3YFd71u5e9aY',
    },
  };

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/day',
      options
    );
    const data = await response.json();
      return data;
      
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const GetMovie = async (id) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzViOGM1OTc0MTZjYWRmYWRiYThiOGUxMDY2NmE3OCIsInN1YiI6IjY0YjQwZWEyMzc4MDYyMDBmZjM5MmMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vfNu1mi9Qt4Nu6fuFBkuv04SzXZGOKy3YFd71u5e9aY',
      },
    };

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const GetCast = async (id) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzViOGM1OTc0MTZjYWRmYWRiYThiOGUxMDY2NmE3OCIsInN1YiI6IjY0YjQwZWEyMzc4MDYyMDBmZjM5MmMzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vfNu1mi9Qt4Nu6fuFBkuv04SzXZGOKy3YFd71u5e9aY',
      },
    };

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
