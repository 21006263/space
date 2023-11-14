import React, { CSSProperties } from 'react';
import { Button, Select, TextArea, ButtonProps, SelectProps, TextAreaProps } from 'semantic-ui-react';

// Definición de la interfaz para las opciones del selector
interface Option {
    key: string;
    text: string;
    value: string;
}

// Definición de las propiedades personalizadas del componente
interface MakeComplaintProps {
    buttonProps?: ButtonProps;         // Propiedades personalizadas para el botón
    selectProps?: SelectProps;         // Propiedades personalizadas para el selector
    textAreaProps?: TextAreaProps;     // Propiedades personalizadas para el área de texto
}

// Opciones para el selector
const options: Option[] = [
    { key: 'Restrictive practice', text: 'Restrictive practice', value: 'Restrictive practice' },
];

// Estilos del componente
const styles: { [key: string]: CSSProperties } = {
    gene: {
        fontFamily: 'sans-serif',
        boxSizing: 'none',
        marginLeft: '20px',
    },
    heading: { textAlign: 'left', fontSize: '48px' },
    container: { display: 'flex', flexDirection: 'column' },
    innerContainer: { borderRight: '1.5px solid #8F8D8C', padding: '10px' },
    border: { border: '1px solid #8F8D8C' },
    subHeading: { textAlign: 'left', color: '#8F8D8C', marginTop: '10px', fontSize: '24px' },
    buttonGroup: { display: 'flex', alignItems: 'center', width: '113px' },
    yesButton: { backgroundColor: '#612c69', color: '#FFFFFF', height: '40px' },
    noButton: { color: '#612c69', border: '1px solid #9F9191' },
    select: { color: '#8F8D8C', width: '100%', border: '1px solid #8F8D8C', outline: 'none' },
    textArea: { width: '100%', height: '100px', border: '1px solid #8F8D8C', outline: 'none' },
};

// Componente MakeComplaint con propiedades personalizadas
const MakeComplaint: React.FC<MakeComplaintProps> = ({ buttonProps, selectProps, textAreaProps }) => {
    return (
        <div style={styles.gene}>
            {/* Encabezado */}
            <h1 style={styles.heading}>Make a Complaint</h1>
            {/* Contenedor principal */}
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    {/* Línea divisoria */}
                    <div style={styles.border} />
                    {/* Subtítulo */}
                    <h2 style={styles.subHeading}>Participante has been or is at risk of harm or injury</h2>
                    {/* Grupo de botones (Sí/No) */}
                    <div style={styles.buttonGroup}>
                        <Button.Group>
                            <Button style={styles.yesButton} {...buttonProps}>Yes</Button>
                            {/* Botón No y resto del código del componente */}
                            <Button style={styles.noButton}>No</Button>
                        </Button.Group>
                    </div>
                    {/* Otro subtítulo */}
                    <h3 style={styles.subHeading}>How would you like to categorise this incident?</h3>
                    {/* Selector desplegable */}
                    <Select placeholder="Restrictive practice" options={options} style={styles.select} {...selectProps} />
                    {/* Otro subtítulo */}
                    <h3 style={styles.subHeading}>Tell us what happened</h3>
                    {/* Área de texto */}
                    <TextArea placeholder="Escribe aquí" style={styles.textArea} {...textAreaProps} />
                </div>
            </div>
        </div>
    );
};

export default MakeComplaint;


