import { renderHook } from '@testing-library/react-hooks';
import useFetch from '../../components/hooks/useFetch';

describe('Puebas en useFetch', () => {
    
    test('Debe de retornar el valor por defecto', () => {
        const { result } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`) );
        const { data, loading, error } = result.current;
        
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test('Debe tener la infor deseada', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://www.breakingbadapi.com/api/quotes/1`) );
        await waitForNextUpdate({timeout:4000});

        const { data, loading, error } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });

    test('Manejo del error', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetch(`https://reqres.in/apid/users?page=2`) );
        await waitForNextUpdate({timeout:4000});

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');
    });
});