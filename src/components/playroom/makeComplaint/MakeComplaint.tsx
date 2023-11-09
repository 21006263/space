import React, { CSSProperties } from 'react';
import { Button, Select, TextArea } from 'semantic-ui-react';

interface Option {
    key: string;
    text: string;
    value: string;
}

const options: Option[] = [
    { key: 'Restrictive practice', text: 'Restrictive practice', value: 'Restrictive practice' },
];

const styles: { [key: string]: CSSProperties } = {
    gene: {
        fontFamily: 'sans-serif',
        boxSizing: 'none',
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

const MakeComplaint: React.FC = () => {
    return (
        <div style={styles.gene}>
            <h1 style={styles.heading}>Make a Complaint</h1>
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    <div style={styles.border} />
                    <h2 style={styles.subHeading}>Participante has been or is at risk of harm or injury</h2>
                    <div style={styles.buttonGroup}>
                        <Button.Group>
                            <Button style={styles.yesButton}>Yes</Button>
                            <Button style={styles.noButton}>No</Button>
                        </Button.Group>
                    </div>
                    <h3 style={styles.subHeading}>How would you like to categorise this incident?</h3>
                    <Select placeholder="Restrictive practice" options={options} style={styles.select} />
                    <h3 style={styles.subHeading}>Tell us what happened</h3>
                    <TextArea placeholder="Escribe aquí" style={styles.textArea} />
                </div>
            </div>
        </div>
    );
};

export default MakeComplaint;

