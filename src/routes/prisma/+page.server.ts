// import { prisma } from '$lib';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// const products = await prisma.product.findMany({
	// 	omit: {
	// 		price: true
	// 	},
	// 	cacheStrategy: {
	// 		swr: 60,
	// 		ttl: 60,
	// 		tags: ['products']
	// 	}
	// });

	return {
		products: []
	};
};
