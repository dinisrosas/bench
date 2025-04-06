import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { stickers } from './data/stickers.js';

async function main() {
	const data = stickers.map((s) => ({
		name: s.name,
		description: s.set + ' ' + s.set_name,
		price: 5.99,
		stock: s.quantity,
		sku: s.id,
		imageUrl: s.image_url
	}));

	const insert = await prisma.product.createMany({
		data
	});

	console.log(insert);
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
	});
