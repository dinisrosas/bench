import { supabase } from '$lib';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { data: products } = await supabase.from('stickers').select('*');
	return {
		products
	};
};
