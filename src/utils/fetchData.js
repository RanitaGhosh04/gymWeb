export const excerciseOptions = {
      method: 'GET',
    //   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
      }
    };
    // console.log(process.env);

export const fetchData = async (url,options) => {

    const response =await fetch(url, options);
    const data = await response.json();

    return data;
}