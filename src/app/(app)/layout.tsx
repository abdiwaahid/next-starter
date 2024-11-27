import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      <main className='min-h-[80vh]'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
