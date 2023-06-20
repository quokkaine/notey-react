import { ToastContainer } from 'react-toastify'
import './globals.css'
import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Chainlancer',
    description: 'Your work backed by the blockchain'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" style={{ background: '#111111' }}>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
