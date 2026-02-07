export interface Design {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    formats: string[];
    hoopSize: string;
    description: string;
    stitchCount: number;
    colors: number;
    category: string;
    rating: number;
    isNew?: boolean;
}

export const designs: Design[] = [
    {
        id: '1',
        title: 'Vintage Floral Bouquet',
        price: 299,
        imageUrl: 'https://images.unsplash.com/photo-1628116904618-97c9b8c95092?auto=format&fit=crop&q=80&w=500',
        formats: ['PES', 'DST', 'JEF', 'EXP'],
        hoopSize: '4x4',
        description: 'A beautiful vintage floral bouquet perfect for handkerchiefs and napkins. This design features delicate satin stitches and fills.',
        stitchCount: 12500,
        colors: 8,
        category: 'Floral',
        rating: 4.8,
        isNew: true
    },
    {
        id: '2',
        title: 'Cute Baby Elephant',
        price: 349,
        imageUrl: 'https://images.unsplash.com/photo-1598556885232-04ce17a861d8?auto=format&fit=crop&q=80&w=500',
        formats: ['PES', 'XXX', 'VIP', 'HUS'],
        hoopSize: '5x7',
        description: 'Adorable baby elephant design for onesies and bibs. Optimized for knit fabrics with light density.',
        stitchCount: 18200,
        colors: 5,
        category: 'Kids',
        rating: 5.0
    },
    {
        id: '3',
        title: 'Geometric Lion Head',
        price: 499,
        imageUrl: 'https://images.unsplash.com/photo-1616239103986-e918544dfcb0?auto=format&fit=crop&q=80&w=500',
        formats: ['DST', 'PES', 'EXP'],
        hoopSize: '8x8',
        description: 'Modern geometric lion head design. Great for denim jackets and tote bags. Stunning detailed run stitches.',
        stitchCount: 28400,
        colors: 1,
        category: 'Animals',
        rating: 4.9
    },
    {
        id: '4',
        title: 'Monogram Font Script',
        price: 699,
        imageUrl: 'https://images.unsplash.com/photo-1583096114844-065d140e695f?auto=format&fit=crop&q=80&w=500',
        formats: ['BX', 'PES', 'DST'],
        hoopSize: 'Multi',
        description: 'Elegant script font for monograms. Includes full alphabet A-Z and numbers 0-9 in 3 sizes (1", 2", 3").',
        stitchCount: 0,
        colors: 1,
        category: 'Fonts',
        rating: 4.7
    },
    {
        id: '5',
        title: 'Christmas Reindeer',
        price: 399,
        imageUrl: 'https://images.unsplash.com/photo-1543589923-7fb4ba047683?auto=format&fit=crop&q=80&w=500',
        formats: ['PES', 'DST', 'JEF'],
        hoopSize: '5x7',
        description: 'Festive reindeer with ornaments. Perfect for holiday stockings and sweaters.',
        stitchCount: 22100,
        colors: 12,
        category: 'Holiday',
        rating: 4.9,
        isNew: true
    },
    {
        id: '6',
        title: 'Traditional Mandala',
        price: 449,
        imageUrl: 'https://images.unsplash.com/photo-1605658661962-e64e9a3b2bda?auto=format&fit=crop&q=80&w=500',
        formats: ['PES', 'DST', 'VP3'],
        hoopSize: '6x10',
        description: 'Intricate traditional mandala design. Best stitched on stable woven fabrics.',
        stitchCount: 35600,
        colors: 4,
        category: 'Abstract',
        rating: 4.5
    }
];
