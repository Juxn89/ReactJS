const api_key = 'FLXux8VXQpxCXoCO7WuYs9NxbOZXAiVb';
const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

request
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);
