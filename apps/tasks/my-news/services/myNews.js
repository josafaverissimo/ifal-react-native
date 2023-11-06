import qs from 'qs'

export default class NewsApi {
  constructor() {
    this.api = 'https://newsapi.org/v2'
    this.apiKey = 'b225aa8696224f14bded1ad3e295a457'
    this.endpoints = {
      everything: '/everything'
    }
  }

  getNews(term) {
    const data = qs.stringify({
      q: term,
      apiKey: this.apiKey,
      language: 'pt'
    })
    const url = `${this.api}/${this.endpoints.everything}?${data}`

    return fetch(url)
  }
}