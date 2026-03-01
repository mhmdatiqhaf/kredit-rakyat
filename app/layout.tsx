import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-inter",
    display: 'swap',
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Kredit Rakyat | Pinjaman Peribadi Koperasi Kerajaan Malaysia",
    description: "Platform pembiayaan untuk penjawat awam. Pinjaman pantas, selamat & patuh syariah. Banding 10+ koperasi & bank terkemuka.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ms" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
            <head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-XXXXXX');`,
                    }}
                />
                {/* End Google Tag Manager */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            </head>
            <body className={`font-sans text-gray-800 bg-surface overflow-x-hidden ${inter.className}`}>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                {children}
                <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="beforeInteractive"></Script>
            </body>
        </html>
    );
}
