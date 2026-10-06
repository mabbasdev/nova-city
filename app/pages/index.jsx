import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Nova City Islamabad | Premium Housing Project</title>
                <meta name="description" content="Experience luxury living and modern architecture at Nova City Islamabad. Strategic location with world-class amenities." />

                {/* Open Graph / Facebook / WhatsApp */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://novacitypk.vercel.app/" />
                <meta property="og:title" content="Nova City Islamabad | Premium Housing Project" />
                <meta property="og:description" content="Experience luxury living and modern architecture at Nova City Islamabad. Strategic location with world-class amenities." />
                <meta property="og:image" content="https://novacitypk.vercel.app/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://novacitypk.vercel.app/" />
                <meta name="twitter:title" content="Nova City Islamabad | Premium Housing Project" />
                <meta name="twitter:description" content="Experience luxury living and modern architecture at Nova City Islamabad." />
                <meta name="twitter:image" content="https://novacitypk.vercel.app/og-image.jpg" />
            </Head>

            {/* Page content */}
        </>
    );
}