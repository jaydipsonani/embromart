import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './AIDesignUpload.module.scss';

export default function AIDesignUpload() {
    const router = useRouter();
    const [isUploading, setIsUploading] = useState(false);
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleFindMatch = () => {
        if (!file) return;
        setIsUploading(true);
        // Simulate AI processing
        setTimeout(() => {
            router.push('/galary?aiMatch=true');
        }, 1500);
    };

    return (
        <section className={styles.aiSection}>
            <div className={styles.container}>
                <div className={styles.aiCard}>
                    <div className={styles.content}>
                        <h2>Find Similar Designs with AI</h2>
                        <p>
                            Have a specific style in mind? Upload an image and our AI will
                            find matching embroidery designs from our collection instantly.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, color: '#666', marginBottom: '32px' }}>
                            <li style={{ marginBottom: '12px' }}>✨ Instant visual matching</li>
                            <li style={{ marginBottom: '12px' }}>🧵 Pattern recognition</li>
                            <li>🎨 Color-based filtering</li>
                        </ul>
                    </div>
                    <div className={styles.uploadArea}>
                        <div className={styles.dropzone} onClick={() => document.getElementById('ai-upload')?.click()}>
                            <input
                                id="ai-upload"
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <div className={styles.icon}>🖼️</div>
                            <div className={styles.uploadText}>
                                {file ? (
                                    <span>{file.name}</span>
                                ) : (
                                    <>
                                        <span>Click to upload design image</span>
                                        <small>PNG, JPG up to 10MB</small>
                                    </>
                                )}
                            </div>
                        </div>
                        <button
                            className={styles.findButton}
                            onClick={handleFindMatch}
                            disabled={!file || isUploading}
                        >
                            {isUploading ? 'Analyzing Design...' : 'Find Matching Designs'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
