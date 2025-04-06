import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
// import { PrismaClient } from '@prisma/client/edge';
// import { withAccelerate } from '@prisma/extension-accelerate';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
