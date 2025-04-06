import { dev } from '$app/environment';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { createClient } from '@supabase/supabase-js';
import { PrismaClient as PrismaClientEdge } from '@prisma/client/edge';

export const prisma = dev
	? new PrismaClient().$extends(withAccelerate())
	: new PrismaClientEdge().$extends(withAccelerate());

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
