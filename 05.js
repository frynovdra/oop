class Http{
    static async get() {
        const response = await fetch(url)
        const json = await response.json()
        return json
    }
}

twit = Http.get("https://api.twitter.com/1.1/search/tweets.json")
console.log(twit)
