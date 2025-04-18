import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Music, User2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-twogirls-red to-twogirls-purple bg-clip-text text-transparent">
            Two Girls
          </h1>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-lg font-medium hover:text-twogirls-red transition-colors">
            Главная
          </Link>
          <Link to="/about" className="text-lg font-medium hover:text-twogirls-red transition-colors">
            О группе
          </Link>
          <Link to="/music" className="text-lg font-medium hover:text-twogirls-red transition-colors">
            Музыка
          </Link>
          <Link to="/gallery" className="text-lg font-medium hover:text-twogirls-red transition-colors">
            Галерея
          </Link>
        </nav>

        {/* Мобильное меню (кнопка) */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Мобильное меню (выпадающее) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
          <div className="container mx-auto py-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 hover:text-twogirls-red transition-colors"
              onClick={toggleMenu}
            >
              Главная
            </Link>
            <Link 
              to="/about" 
              className="block py-2 hover:text-twogirls-red transition-colors"
              onClick={toggleMenu}
            >
              О группе
            </Link>
            <Link 
              to="/music" 
              className="block py-2 hover:text-twogirls-red transition-colors"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Music className="mr-2 h-4 w-4" />
                Музыка
              </div>
            </Link>
            <Link 
              to="/gallery" 
              className="block py-2 hover:text-twogirls-red transition-colors"
              onClick={toggleMenu}
            >
              Галерея
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;