import Head from 'next/head';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Servicemen to Scholars",
  description:
    "Welcome to Servicemen to Scholars! We are a non-profit startup dedicated to helping service people connect to the resources they need for higher education.",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* style */}
      </Head>

      {/* provideres] */}
      {children}
    </>
  );
};

export default RootLayout;
