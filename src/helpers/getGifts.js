export const getGifs = async(category) =>{
    try {
        const apyKey = 'MF5GLoM847D9PuStFSwLAYgO8kqt1LNs';
        const limitGifs = '5';
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apyKey}&q=${category}&limit=${limitGifs}`)
        const { data } = await response.json()
        const gifs = data.map ( (gif) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images.original.url
            }
        })
        return gifs
    } catch (error) {
        console.log(error);
    }
}