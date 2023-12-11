import type {ICategories, ICategoryProduct} from "@/stores/interfaces";

export const CATEGORIES: ICategories = {
    all: {
        title: 'VIEW ALL PRODUCTS',
        id: 1,
        items: {
            AllProducts: {
                id: 1,
                img: '/src/assets/images/buskets/allBuskets.jpg',
                title: 'All Products',
                products: [
                    {
                        key: 107514,
                        img: '/src/assets/images/buskets/busket1.jpg',
                        title: "REF#: 107514",
                        description: "SQUARE STEEL FRONT MESH BASKET 333 BLACK.",
                        price: '10.95',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 15 x 10 x 9.25',
                            'Material: Steel Wire',
                            'Mount: Lift-Off',
                            'Color: Black',
                            'Lorem ipsum',
                            'Lorem ipsum',
                            'Lorem ipsum',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },
        }
    },
    antenaFlags: {
        title: 'ANTENNA & FLAGS',
        id: 2,
        items: {
            meshBaskets: {
                id: 2,
                img: '/src/assets/images/buskets/allBuskets.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },

        }
    },
    axle: {
        title: 'AXLE PEGS',
        id: 3,
        items: {
            meshBaskets: {
                id: 3,
                img: '/src/assets/images/buskets/allBuskets.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },

        }
    },
    buskets: {
        title: 'Buskets',
        id: 4,
        items: {
            allBuskets:{
                id: 4,
                img: '/src/assets/images/buskets/allBuskets.jpg',
                title: 'View all baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },
            basketParts : {
                id: 5,
                img: '/src/assets/images/buskets/busket1.jpg',
                title: 'Basket Parts ',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },
            meshBaskets1: {
                id: 6,
                img: '/src/assets/images/buskets/busket2.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },
            meshBaskets2: {
                id: 7,
                img: '/src/assets/images/buskets/busket3.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },
            syntenic: {
                id: 8,
                img: '/src/assets/images/buskets/busket4.jpg',
                title: 'Synthetic Weave Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },
            trikeBaskets: {
                id: 9,
                img: '/src/assets/images/buskets/meshSquare.png',
                title: 'Trike Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },
            wireBaskets1: {
                id: 10,
                img: '/src/assets/images/buskets/busket6.png',
                title: 'Wire Baskets ',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },
            wireBaskets2: {
                id: 11,
                img: '/src/assets/images/buskets/busket7.png',
                title: 'Wire Baskets ',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },
        }
    },
    bat: {
        title: 'BAT HOLDER',
        id: 12,
        items: {
            meshBaskets: {
                id: 12,
                img: '/src/assets/images/buskets/busket3.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },

        }
    },
    battaries: {
        title: 'BATTERIES',
        id: 5,
        items: {
            meshBaskets: {
                id: 13,
                img: '/src/assets/images/buskets/busket3.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },

        }
    },
    BEARINGS: {
        title: 'BEARINGS',
        id: 6,
        items: {
            meshBaskets: {
                id: 14,
                img: '/src/assets/images/buskets/busket3.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },

        }
    },
    BELLS: {
        title: 'BELLS & HORNS',
        id: 7,
        items: {
            meshBaskets: {
                id: 15,
                img: '/src/assets/images/buskets/busket3.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },

        }
    },
    BICYCLES: {
        title: 'BICYCLES',
        id: 8,
        items: {
            meshBaskets: {
                id: 16,
                img: '/src/assets/images/buskets/busket3.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },

        }
    },
    BRACKETS: {
        title: 'BOTTOM BRACKETS',
        id: 9,
        items: {
            meshBaskets: {
                id: 17,
                img: '/src/assets/images/buskets/busket3.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },

        }
    },
    BRAKES: {
        title: 'BRAKES',
        id: 10,
        items: {
            meshBaskets: {
                id: 18,
                img: '/src/assets/images/buskets/busket3.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },

        }
    },
    BUMPERS: {
        title: 'BUMPERS',
        id: 11,
        items: {
            meshBaskets: {
                id: 19,
                img: '/src/assets/images/buskets/busket3.jpg',
                title: 'Mesh Baskets',
                products: [
                    {
                        key: 215678,
                        img: '/src/assets/images/buskets/busket2.jpg',
                        title: "REF#: 215678",
                        description: "RECTANGULAR MESH STORAGE BASKET 421 SILVER.",
                        price: '14.99',
                        minPurchaseQty: 3,
                        isInStock: false,
                        parameters: [
                            'Size: 20 x 12 x 8.75',
                            'Material: Stainless Steel',
                            'Mount: Hanging',
                            'Color: Silver',
                            'Lorem ipsum',
                        ]
                    },
                    {
                        key: 309821,
                        img: '/src/assets/images/buskets/busket3.jpg',
                        title: "REF#: 309821",
                        description: "OVAL WIRE STORAGE BASKET 117 WHITE.",
                        price: '8.50',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 18 x 14 x 10',
                            'Material: Coated Wire',
                            'Mount: Wall-Mounted',
                            'Color: White',
                        ]
                    },
                    {
                        key: 408765,
                        img: '/src/assets/images/buskets/busket4.jpg',
                        title: "REF#: 408765",
                        description: "COLLAPSIBLE FABRIC STORAGE BASKET 502 BLUE.",
                        price: '12.75',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 16 x 16 x 12',
                            'Material: Fabric',
                            'Mount: Foldable',
                            'Color: Blue',
                        ]
                    },
                    {
                        key: 523409,
                        img: '/src/assets/images/buskets/meshSquare.png',
                        title: "REF#: 523409",
                        description: "ROUND PLASTIC STORAGE BASKET 215 GREEN.",
                        price: '6.99',
                        minPurchaseQty: 1,
                        isInStock: true,
                        parameters: [
                            'Size: 14 x 14 x 10.5',
                            'Material: Plastic',
                            'Mount: Stackable',
                            'Color: Green',
                        ]
                    }
                ]
            },

        }
    }

}

