import { useState, useMemo } from 'react';
import Layout from '../../components/Layout';
import DesignCard from '../../components/DesignCard';
import FilterSidebar from '../../components/FilterSidebar';
import { designs } from '../../data/designs';
import styles from './Gallery.module.scss';
import { useRouter } from 'next/router';

export default function DesignGallery() {
    const router = useRouter();
    const { aiMatch } = router.query;

    const [currentPage, setCurrentPage] = useState(1);
    const designsPerPage = 15;
    const { search } = router.query;

    const [filters, setFilters] = useState<{
        files: string[];
        hoops: string[];
        categories: string[];
    }>({
        files: [],
        hoops: [],
        categories: []
    });

    const [sortBy, setSortBy] = useState<string>('featured');

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
        setCurrentPage(1); // Reset to first page on filter change
    };

    const filteredDesigns = useMemo(() => {
        let result = designs.filter(design => {
            // Category, Hoop, Format Filters
            if (filters.files.length > 0 && !design.formats.some(f => filters.files.includes(f))) return false;
            if (filters.hoops.length > 0 && !filters.hoops.includes(design.hoopSize)) return false;
            if (filters.categories.length > 0 && !filters.categories.includes(design.category)) return false;

            // Search filter
            if (search) {
                const query = (search as string).toLowerCase();
                return design.title.toLowerCase().includes(query) ||
                    design.category.toLowerCase().includes(query) ||
                    design.description.toLowerCase().includes(query);
            }

            return true;
        });

        // Sorting logic
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                break;
            default:
                // 'featured' - could be a custom order or just default
                break;
        }

        return result;
    }, [filters, search, sortBy]);

    // Pagination calculations
    const indexOfLastDesign = currentPage * designsPerPage;
    const indexOfFirstDesign = indexOfLastDesign - designsPerPage;
    const currentDesigns = filteredDesigns.slice(indexOfFirstDesign, indexOfLastDesign);
    const totalPages = Math.ceil(filteredDesigns.length / designsPerPage);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                            <h1>
                                {search ? `Search results for "${search}"` : aiMatch === 'true' ? 'AI Matched Results' : 'Embroidery Designs'}
                                ({filteredDesigns.length})
                            </h1>
                            <p>{search ? 'Find the designs that match your keywords' : aiMatch === 'true' ? 'Here are the designs that best match your uploaded image.' : 'Find the perfect design for your next project'}</p>
                        </div>
                        <div className={styles.controls}>
                            <div className={styles.sortWrapper}>
                                <label htmlFor="sort">Sort by:</label>
                                <select
                                    id="sort"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className={styles.sortSelect}
                                >
                                    <option value="featured">Featured</option>
                                    <option value="newest">Newest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to High</option>
                                    <option value="rating">Top Rated</option>
                                </select>
                            </div>
                            <button
                                className={styles.mobileFilterBtn}
                                onClick={() => setIsSidebarOpen(true)}
                            >
                                <span className={styles.filterIcon}>🔍</span>
                                Filters
                            </button>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        {currentDesigns.map(design => (
                            <DesignCard key={design.id} design={design} />
                        ))}
                    </div>

                    {filteredDesigns.length === 0 && (
                        <p className={styles.noResults}>No designs match your filters.</p>
                    )}

                    {totalPages > 1 && (
                        <div className={styles.pagination}>
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={styles.pageBtn}
                            >
                                Previous
                            </button>

                            <div className={styles.pageNumbers}>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                    <button
                                        key={number}
                                        onClick={() => paginate(number)}
                                        className={`${styles.pageNumber} ${currentPage === number ? styles.active : ''}`}
                                    >
                                        {number}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={styles.pageBtn}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
