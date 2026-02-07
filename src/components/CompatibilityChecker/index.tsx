import { useState } from 'react';
import styles from './CompatibilityChecker.module.scss';

interface CompatibilityCheckerProps {
    supportedFormats: string[];
}

// Mock database of machines
const MACHINES = [
    { name: 'Brother PE800', format: 'PES' },
    { name: 'Janome Memory Craft', format: 'JEF' },
    { name: 'Bernina 7 Series', format: 'EXP' },
    { name: 'Singer Legacy', format: 'XXX' },
    { name: 'Husqvarna Viking', format: 'HUS' },
    { name: 'Pfaff Creative', format: 'VIP' },
];

export default function CompatibilityChecker({ supportedFormats }: CompatibilityCheckerProps) {
    const [selectedMachine, setSelectedMachine] = useState('');
    const [result, setResult] = useState<{ status: 'success' | 'error' | null; message: string }>({ status: null, message: '' });

    const checkCompatibility = () => {
        if (!selectedMachine) return;

        const machine = MACHINES.find(m => m.name === selectedMachine);
        if (!machine) return;

        if (supportedFormats.includes(machine.format)) {
            setResult({
                status: 'success',
                message: `Compatible! This design includes the .${machine.format} file format for your ${machine.name}.`
            });
        } else {
            setResult({
                status: 'error',
                message: `Not automatically compatible. This design does not list .${machine.format}. You may need conversion software.`
            });
        }
    };

    return (
        <div className={styles.checker}>
            <h3>Check Machine Compatibility</h3>
            <div className={styles.form}>
                <select
                    value={selectedMachine}
                    onChange={(e) => {
                        setSelectedMachine(e.target.value);
                        setResult({ status: null, message: '' }); // Reset result on change
                    }}
                >
                    <option value="">Select your machine model...</option>
                    {MACHINES.map(m => (
                        <option key={m.name} value={m.name}>{m.name}</option>
                    ))}
                </select>
                <button onClick={checkCompatibility} disabled={!selectedMachine}> Check</button>
            </div>

            {result.status && (
                <div className={`${styles.result} ${styles[result.status]}`}>
                    {result.status === 'success' ? '✅' : '⚠️'} {result.message}
                </div>
            )}
        </div>
    );
}
