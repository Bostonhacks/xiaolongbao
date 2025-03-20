import Link from 'next/link';
import { MobileMenuButton } from './MobileMenuButton';
import { getAuthStatus } from '../lib/authStatus';
import { GoogleLoginButton } from './GoogleLoginButton';
import LogoutButton from './LogoutButton';
import NavbarItems from './NavbarItems';
import { navItems, navItemsAuthenticated } from '../config/constants';

export const Navbar = async() => {

  const { isAuthenticated } = await getAuthStatus();

  return (
    <>
      {/* Mobile top navbar - shown on small screens */}
      <nav className="md:hidden bg-primary-dark shadow-md fixed w-full z-20 top-0 left-0">
        <div className="px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-800">XLB</span>
          </Link>
          
          {
            isAuthenticated ? (
              <MobileMenuButton navItems={navItemsAuthenticated} />
            ) : (
              <MobileMenuButton navItems={navItems} />
            )
          }
          
        </div>
      </nav>
      
      {/* Desktop sidebar - hidden on small screens */}
      <nav className="hidden md:flex flex-col bg-primary-dark shadow-lg fixed h-full w-40 z-20 top-0 left-0">
        <div className="p-4">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-text-primary">XiaoLongBao</span>
          </Link>
        </div>
        
        { 
          // Show different nav items based on authentication status
          isAuthenticated ? (
            <NavbarItems items={navItemsAuthenticated} />
          ) : (
            <NavbarItems items={navItems} />
          )
        }

        
        <div className="p-4 border-t">
          {isAuthenticated ? (
            <div className="flex flex-col space-y-3">
              <Link href="/profile" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-gray-900 transition-colors duration-100">
                Profile
              </Link>
              <LogoutButton />
            </div>
          ) : <GoogleLoginButton />}
        </div>
      </nav>
    </>
  );
}