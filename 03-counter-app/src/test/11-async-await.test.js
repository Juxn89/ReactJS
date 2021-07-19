import { getImage } from "../bases/11.async-await";

describe('Test on async-await y Fetch', () => {
    test('should return imagen\'s url', async() => {
        const url = await getImage();

        expect(url.includes('https://')).toBe(true);
    })
})