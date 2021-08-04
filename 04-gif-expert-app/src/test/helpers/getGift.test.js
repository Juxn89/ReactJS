import { getGift } from "../../helpers/getGifs";

describe('Test on getGift Fetch', () =>{
    test('Should return 10 elements', async () => {
        const gifs = await getGift('One Puch');
        expect(gifs.length).toBe(10);
    });

    test('Should return 10 elements', async () => {
        const gifs = await getGift('');
        expect(gifs.length).toBe(0);
    });
});