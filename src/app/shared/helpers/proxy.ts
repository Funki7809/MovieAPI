export default {
    genres: {
        url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=d25eb09a98a57d37b39bb4e508b67599&language=es-MX'
    },
    movies: {
        url:'https://api.themoviedb.org/3/discover/movie?api_key=d25eb09a98a57d37b39bb4e508b67599&language=es-MX&with_genres='
    },
    oneMovie: {
        url:'https://api.themoviedb.org/3/movie/'
    },
    movieKey:{
        url:'?api_key=d25eb09a98a57d37b39bb4e508b67599&language=es-MX'
    },
    similar:{
        url:'/similar?api_key=d25eb09a98a57d37b39bb4e508b67599&language=es-MX&page=1'
    },
    search:{
        url:'https://api.themoviedb.org/3/search/movie?api_key=d25eb09a98a57d37b39bb4e508b67599&language=es-MX&query='
    },
    invitadoSesion:{
        url:'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=d25eb09a98a57d37b39bb4e508b67599'
    },
    getTrailer:{
        url:'/videos?api_key=d25eb09a98a57d37b39bb4e508b67599&language=en-US'
    }
}