import Link from 'next/link';
import { MobileMenuButton } from './MobileMenuButton';
import { GoogleLoginButton } from './GoogleLoginButton';

export const Navbar = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Attach Account', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">XiaoLongBao</span>
            </Link>
          </div>

          {/* Desktop Navigation - Server-side rendered */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
                  prefetch={false}
                >
                  {item.label}
                </Link>
              ))}
              <GoogleLoginButton />
            </div>
          </div>

          {/* Mobile menu button - Client component */}
          <div className="md:hidden">
            <MobileMenuButton navItems={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}