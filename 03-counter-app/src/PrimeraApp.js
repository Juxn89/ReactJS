// import {Fragment} from 'react';
const PrimeraApp = () => {
    // return <h1>Hola Mundo, Juan!</h1>;

    // return (
    //     <div>
    //         <h1>Hola Mundo, Juan!</h1>
    //         <p>Mi primera aplicación</p>
    //     </div>
    // );

    // return(
    //     <Fragment>
    //          <h1>Hola Mundo, Juan!</h1>
    //          <p>Mi primera aplicación</p>
    //     </Fragment>
    // );

    const saludo = 'Hola mundo, JGomez';
    const saludoObject = {
        nombre: 'Juan',
        edad: 34
    }

    return(
        <> 
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludoObject, null, 3)}</pre> */}
            <p>Mi primera aplicación</p>
        </>
    );
};

export default PrimeraApp;