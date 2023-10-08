import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'StoneC0der ─ developer';
	const description = "Hey 👋 I'm Ben, a developer";

	return {
		title,
		description,
		canonical: `https://ekangdev.com/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'EkangDev',
			url: `https://ekangdev.com/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://ekangdev.com/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@StoneC0der',
			site: '@StoneC0der',
		},
		...props,
	};
}
