const getImage = async () => {
    try {
        const api_key = 'FLXux8VXQpxCXoCO7WuYs9NxbOZXAiVb';
        const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);    
        const {data} = await response.json();
        
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
    }

};

getImage();
