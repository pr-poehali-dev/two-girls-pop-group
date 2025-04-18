import { Button } from '@/components/ui/button';
import { Calendar, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-40">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-twogirls-red/20 to-twogirls-purple/20 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="block">Two Girls</span>
              <span className="bg-gradient-to-r from-twogirls-red to-twogirls-purple bg-clip-text text-transparent">
                Первая любовь
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Новый сингл выходит <span className="font-semibold text-foreground">28 апреля 2025</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-twogirls-red hover:bg-twogirls-red/90">
                <Music className="mr-2 h-5 w-5" />
                Предзаказ
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Концерты
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Первый альбом <Link to="/music" className="font-medium underline text-foreground hover:text-twogirls-purple">«Неразлучные»</Link> выйдет летом 2025 года
              </p>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Two Girls - Первая любовь" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-background/60 backdrop-blur">
              <p className="text-sm font-medium">Слушайте первыми</p>
              <h3 className="text-lg font-bold">Первая любовь</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;