import PropTypes from 'prop-types';

    const PrimeraApp = ({saludo = 'Saludo default.', subtitulo}) => {
    return(
        <> 
            
            <h2>{saludo}</h2>
            <h3>{subtitulo}</h3>
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