import { useState, useMemo } from 'react';
import Layout from '../../components/Layout';
import DesignCard from '../../components/DesignCard';
import FilterSidebar from '../../components/FilterSidebar';
import { designs } from '../../data/designs';
import styles from './Browse.module.scss';
import { useRouter } from 'next/router';

export default function Browse() {
    const router = useRouter();
    const { aiMatch } = router.query;

    const [filters, setFilters] = useState<{
        files: string[];
        hoops: string[];
        categories: string[];
    }>({
        files: [],
        hoops: [],
        categories: []
    });

    const allFiles = Array.from(new Set(designs.flatMap(d => d.formats)));
    const allHoops = Array.from(new Set(designs.map(d => d.hoopSize)));
    const allCategories = Array.from(new Set(designs.map(d => d.category)));

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleFilterChange = (type: 'files' | 'hoops' | 'categories', value: string) => {
        setFilters(prev => {
            const current = prev[type];
            const next = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [type]: next };
        });
    };

    const filteredDesigns = useMemo(() => {
        return designs.filter(design => {
            if (filters.files.length > 0 && !design.formats.some(f => filters.files.includes(f))) return false;
            if (filters.hoops.length > 0 && !filters.hoops.includes(design.hoopSize)) return false;
            if (filters.categories.length > 0 && !filters.categories.includes(design.category)) return false;
            return true;
        });
    }, [filters]);

    return (
        <Layout title="Browse Designs">
            <div className={styles.browseLayout}>
                <FilterSidebar
                    files={allFiles}
                    hoops={allHoops}
                    categories={allCategories}
                    selectedFilters={filters}
                    onFilterChange={handleFilterChange}
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />

                {isSidebarOpen && (
                    <div className={styles.overlay} onClick={() => setIsSidebarOpen(false)} />
                )}

                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <div className={styles.titleArea}>
                            <h1>{aiMatch === 'true' ? 'AI Matched Results' : 'Embroidery Designs'} ({filteredDesigns.length})</h1>
                            <p>{aiMatch === 'true' ? 'Here are the designs that best match your uploaded image.' : 'Find the perfect design for your next project'}</p>
                        </div>
                        <button
                            className={styles.mobileFilterBtn}
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <span className={styles.filterIcon}>🔍</span>
                            Filters
                        </button>
                    </div>

                    <div className={styles.grid}>
                        {filteredDesigns.map(design => (
                            <DesignCard key={design.id} design={design} />
                        ))}
                        {filteredDesigns.length === 0 && (
                            <p>No designs match your filters.</p>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
