// app/layout.tsx

import type { Metadata } from "next";
import { Box } from "@mui/material";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Description of your page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Box
          sx={{
            backgroundColor: 'orange', // Background color
            minHeight: '100vh', // Full viewport height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center the content vertically
            alignItems: 'center', // Center the content horizontally
            padding: 2, // Optional padding
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
