import styles from './FilterSidebar.module.scss';

interface FilterSidebarProps {
    files: string[];
    hoops: string[];
    categories: string[];
    selectedFilters: {
        files: string[];
        hoops: string[];
        categories: string[];
    };
    onFilterChange: (type: 'files' | 'hoops' | 'categories', value: string) => void;
    isOpen?: boolean;
    onClose?: () => void;
}

export default function FilterSidebar({
    files,
    hoops,
    categories,
    selectedFilters,
    onFilterChange,
    isOpen = false,
    onClose
}: FilterSidebarProps) {
    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.sidebarHeader}>
                <h3>Filters</h3>
                <button className={styles.closeButton} onClick={onClose} aria-label="Close filters">
                    ×
                </button>
            </div>
            <div className={styles.section}>
                <h3>Machine Format</h3>
                <div className={styles.options}>
                    {files.map((file) => (
                        <label key={file}>
                            <input
                                type="checkbox"
                                checked={selectedFilters.files.includes(file)}
                                onChange={() => onFilterChange('files', file)}
                            />
                            {file}
                        </label>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h3>Hoop Size</h3>
                <div className={styles.options}>
                    {hoops.map((hoop) => (
                        <label key={hoop}>
                            <input
                                type="checkbox"
                                checked={selectedFilters.hoops.includes(hoop)}
                                onChange={() => onFilterChange('hoops', hoop)}
                            />
                            {hoop}
                        </label>
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h3>Category</h3>
                <div className={styles.options}>
                    {categories.map((cat) => (
                        <label key={cat}>
                            <input
                                type="checkbox"
                                checked={selectedFilters.categories.includes(cat)}
                                onChange={() => onFilterChange('categories', cat)}
                            />
                            {cat}
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
}
