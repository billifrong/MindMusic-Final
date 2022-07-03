export interface Canciones {
    Nombre: string,
    Artista: string,
    Duracion: string,
    Fecha: number,
    Imagen: string,
    Musica: string,
    Favorito: number
}

export const ListaCanciones:Array<Canciones>=[
    {
        Nombre: "Una Noche en Medellin",
        Artista: "Cris MJ",
        Duracion: "2:35",
        Fecha: 2022,
        Imagen: "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/a0/f3/4e/a0f34e76-f34c-166c-3763-309e658e41ab/196626234452.jpg/1200x1200bf-60.jpg",
        Musica: "../../assets/music/Cris-MJ-Una-Noche-En-Medellin.mp3",
        Favorito: 1
    },
    {
        Nombre: "Torero",
        Artista: "Chayanne",
        Duracion: "3:41",
        Fecha: 2002,
        Imagen: "https://images.genius.com/ce73fbc64837cd35f216f154a419cffb.953x953x1.jpg",
        Musica: "../../assets/music/Chayanne - Torero.mp3",
        Favorito: 1
    },
    {
        Nombre: "Historia de Taxi",
        Artista: "Ricardo Arjona",
        Duracion: "6:40",
        Fecha: 1994,
        Imagen: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/1/3/b/c/888301588894031.jpg",
        Musica: "../../assets/music/Ricardo Arjona - Historia De Taxi.mp3",
        Favorito: 1
    },
    {
        Nombre: "2022",
        Artista: "Fother Muckers",
        Duracion: "4:23",
        Fecha: 2008,
        Imagen: "https://i.scdn.co/image/ab67616d0000b2731848e869a32bd164ae883bde",
        Musica: "../../assets/music/fother_muckers_2022.mp3",
        Favorito: 0
    }
    ,{
        Nombre: "Dire, Dire Docks",
        Artista: "Koji Kondo",
        Duracion: "3:06",
        Fecha: 1996,
        Imagen: "https://i1.sndcdn.com/artworks-000134896086-nlpxxc-t500x500.jpg",
        Musica: "../../assets/music/09 Dire, Dire Docks.mp3",
        Favorito: 0
    }

]
