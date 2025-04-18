import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-twogirls-red to-twogirls-purple bg-clip-text text-transparent">
              Two Girls
            </h2>
            <p className="text-muted-foreground">
              Начинающая российская поп-группа, состоящая из талантливых 15-летних девушек Dasha Blake и Clover. 
              Создана в 2025 году в городе Находка.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Music className="h-5 w-5" />
                <span className="sr-only">Музыкальные платформы</span>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Ссылки</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Главная
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                О группе
              </Link>
              <Link to="/music" className="text-muted-foreground hover:text-foreground transition-colors">
                Музыка
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                Галерея
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Контакты</h3>
            <nav className="flex flex-col space-y-2">
              <a 
                href="mailto:info@twogirls.ru" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                info@twogirls.ru
              </a>
              <a 
                href="tel:+79991234567" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                +7 (999) 123-45-67
              </a>
            </nav>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Two Girls. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;