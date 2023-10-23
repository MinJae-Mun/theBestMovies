const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjY3OTJlY2JhNmE2YjE2YzUwZTQzZTAyYTEwMDdjMiIsInN1YiI6IjY1MmY0ZjY0MDI0ZWM4MDEwMTU0MWM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wh46iE1UXUzHDYiBec9C3e54pJTue9-e0VzCXy2PWoI'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .catch(err => consonle.error(err))
    .then(data => {
        const resultData = data['results'];
        const movieList = document.querySelector('.movie_list');
        movieList.innerHTML = '';
        for(let i = 0; i < Object.keys(resultData).length; i++) {
            let _title = resultData[i].title;
            let tempHTML = `
                <div class = "movie_title">${_title}</div>
            `;
            movieList.insertAdjacentHTML('beforeend', tempHTML);
        }
    })