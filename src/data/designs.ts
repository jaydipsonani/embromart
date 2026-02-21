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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/c526422b381cc9ff47408657d6ead852/fd4f7c83-774f-418c-96a9-9e088cb78130.jpg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/32d2362865731444d797d27a128931cb/ad0902c4-ac9c-44f8-96a8-0e3ec4f2c3d6.jpg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/086c78d3f28aa06a2095eb7f41f2ee09/b8c14a8b-38b9-4d89-965a-96d7ec249786.jpg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/96451815b3c7f1e2760a1133e0815b98/ff0e5423-cc39-4272-98e4-d5c5b10d2e80.jpeg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/8c812bb5742da53f227eeaad0c4b370e/b5b0fa98-2895-41b7-827e-3a40eda9a97e.jpeg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/f5f6b2045e76942c2e78aa9c8c09e034/f53b2880-4051-4898-bea9-fd6215ac35f5.jpg/0/*/412x412',
        formats: ['PES', 'DST', 'VP3'],
        hoopSize: '6x10',
        description: 'Intricate traditional mandala design. Best stitched on stable woven fabrics.',
        stitchCount: 35600,
        colors: 4,
        category: 'Abstract',
        rating: 4.5
    },
    {
        id: '1',
        title: 'Vintage Floral Bouquet',
        price: 299,
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/c526422b381cc9ff47408657d6ead852/fd4f7c83-774f-418c-96a9-9e088cb78130.jpg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/32d2362865731444d797d27a128931cb/ad0902c4-ac9c-44f8-96a8-0e3ec4f2c3d6.jpg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/086c78d3f28aa06a2095eb7f41f2ee09/b8c14a8b-38b9-4d89-965a-96d7ec249786.jpg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/96451815b3c7f1e2760a1133e0815b98/ff0e5423-cc39-4272-98e4-d5c5b10d2e80.jpeg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/8c812bb5742da53f227eeaad0c4b370e/b5b0fa98-2895-41b7-827e-3a40eda9a97e.jpeg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/f5f6b2045e76942c2e78aa9c8c09e034/f53b2880-4051-4898-bea9-fd6215ac35f5.jpg/0/*/412x412',
        formats: ['PES', 'DST', 'VP3'],
        hoopSize: '6x10',
        description: 'Intricate traditional mandala design. Best stitched on stable woven fabrics.',
        stitchCount: 35600,
        colors: 4,
        category: 'Abstract',
        rating: 4.5
    },
    {
        id: '1',
        title: 'Vintage Floral Bouquet',
        price: 299,
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/c526422b381cc9ff47408657d6ead852/fd4f7c83-774f-418c-96a9-9e088cb78130.jpg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/32d2362865731444d797d27a128931cb/ad0902c4-ac9c-44f8-96a8-0e3ec4f2c3d6.jpg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/086c78d3f28aa06a2095eb7f41f2ee09/b8c14a8b-38b9-4d89-965a-96d7ec249786.jpg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/96451815b3c7f1e2760a1133e0815b98/ff0e5423-cc39-4272-98e4-d5c5b10d2e80.jpeg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/8c812bb5742da53f227eeaad0c4b370e/b5b0fa98-2895-41b7-827e-3a40eda9a97e.jpeg/0/*/412x412',
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
        imageUrl: 'https://isv.prod.lovecrafts.co/v1/images/f5f6b2045e76942c2e78aa9c8c09e034/f53b2880-4051-4898-bea9-fd6215ac35f5.jpg/0/*/412x412',
        formats: ['PES', 'DST', 'VP3'],
        hoopSize: '6x10',
        description: 'Intricate traditional mandala design. Best stitched on stable woven fabrics.',
        stitchCount: 35600,
        colors: 4,
        category: 'Abstract',
        rating: 4.5
    },
    // {
    //     id: '7',
    //     title: 'Spring Rose Garden',
    //     price: 329,
    //     imageUrl: 'https://cdn.pixabay.com/photo/2018/02/06/14/07/embroidery-3134828_1280.jpg',
    //     formats: ['PES', 'DST', 'JEF', 'EXP'],
    //     hoopSize: '5x7',
    //     description: 'A vibrant collection of spring roses. Adds a classic touch to linens and home decor.',
    //     stitchCount: 15600,
    //     colors: 10,
    //     category: 'Floral',
    //     rating: 4.7,
    //     isNew: true
    // },
    // {
    //     id: '8',
    //     title: 'Playful Puppy',
    //     price: 359,
    //     imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/13/20/embroidery-1869842_1280.jpg',
    //     formats: ['PES', 'XXX', 'VIP'],
    //     hoopSize: '4x4',
    //     description: 'A cute puppy design that kids will love. Great for t-shirts and backpacks.',
    //     stitchCount: 11000,
    //     colors: 6,
    //     category: 'Kids',
    //     rating: 4.9
    // },
    // {
    //     id: '9',
    //     title: 'Elegant Monogram A',
    //     price: 199,
    //     imageUrl: 'https://cdn.pixabay.com/photo/2016/06/14/15/38/embroidery-1456686_1280.jpg',
    //     formats: ['PES', 'DST', 'EXP'],
    //     hoopSize: '4x4',
    //     description: 'A sophisticated single letter monogram. Detailed satin stitching.',
    //     stitchCount: 4500,
    //     colors: 2,
    //     category: 'Fonts',
    //     rating: 4.6
    // },
    // {
    //     id: '10',
    //     title: 'Geometric Bear',
    //     price: 489,
    //     imageUrl: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/star-wars-2695572_1280.jpg',
    //     formats: ['DST', 'PES', 'EXP', 'HUS'],
    //     hoopSize: '5x7',
    //     description: 'Modern geometric bear design. Perfect for woodland themed decor.',
    //     stitchCount: 19500,
    //     colors: 3,
    //     category: 'Animals', // Matches Lion
    //     rating: 4.8
    // }
];
