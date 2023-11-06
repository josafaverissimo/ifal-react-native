export default class MoviesApi {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&language=pt-BR'
    this.options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjZmYTJlY2Y1NWQwYzUwMjZhMTk1MTlmNWFhZTNkZSIsInN1YiI6IjY1NDhlOGU4NDM0OTRmMDExZWM3NjA0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.31Fje8NH_jyg56Ao8EdX33cZDlcHWyZ_FCJHhKB1XAU'
      }
    }
  }

  getMovies() {
    return fetch(this.url, this.options)
  }
}