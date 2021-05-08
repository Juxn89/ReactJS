import PropTypes from 'prop-types';

// import {Fragment} from 'react';
//const PrimeraApp = (props) => {
    const PrimeraApp = ({saludo = 'Saludo default.', subtitulo}) => {
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

    // console.log(props);
    const saludoInterno = 'Hola mundo, JGomez';
    const saludoObject = {
        nombre: 'Juan',
        edad: 34
    };

    return(
        <> 
            <h1>{saludoInterno}</h1>
            {/* <h2>{props.saludo}</h2> */}
            <h2>{saludo}</h2>
            <h3>{subtitulo}</h3>
            {/* <pre>{JSON.stringify(saludoObject, null, 3)}</pre> */}
            <p>Mi primera aplicación</p>
        </>
    );
};

PrimeraApp.prototype = {
    sadudo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo by default'
}

export default PrimeraApp;