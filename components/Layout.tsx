import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Main Content with padding-top to account for fixed navbar */}
      <main className="flex-grow pt-16">
        <div className="max-w-screen mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
