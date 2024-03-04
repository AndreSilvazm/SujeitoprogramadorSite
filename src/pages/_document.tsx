import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=EB+Garamond&family=Kode+Mono:wght@400..700&family=Lilita+One&family=Noto+Sans+Lepcha&family=Oswald:wght@200&family=Playfair+Display&family=Poiret+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@100;500&family=Rouge+Script&family=Sacramento&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet" />


      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <Head />
      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  );
}
