import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, Music, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Студийный дневник</h2>
          <p className="text-lg text-muted-foreground">
            На нашем сайте вы можете следить за процессом записи альбома и отдельных песен
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="aspect-video relative overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Студийная запись" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="inline-flex items-center px-2 py-1 rounded-full bg-twogirls-purple/80 text-white text-xs font-medium">
                  <Mic className="h-3 w-3 mr-1" />
                  Студия
                </div>
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">Запись нового трека "Первая любовь"</h3>
              <p className="text-muted-foreground">
                Dasha и Clover делятся процессом записи своего дебютного сингла в студии 
                звукозаписи во Владивостоке.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2">
              <span className="text-sm text-muted-foreground">12 апреля 2025</span>
              <Button variant="ghost" size="sm" className="text-twogirls-red hover:text-twogirls-red/90">
                Читать
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="aspect-video relative overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Текст песни" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="inline-flex items-center px-2 py-1 rounded-full bg-twogirls-red/80 text-white text-xs font-medium">
                  <Music className="h-3 w-3 mr-1" />
                  Творчество
                </div>
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">Как рождаются тексты наших песен</h3>
              <p className="text-muted-foreground">
                Clover рассказывает о процессе написания текстов и о чем будет их дебютный альбом 
                "Неразлучные".
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2">
              <span className="text-sm text-muted-foreground">8 апреля 2025</span>
              <Button variant="ghost" size="sm" className="text-twogirls-red hover:text-twogirls-red/90">
                Читать
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="aspect-video relative overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Работа над альбомом" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="inline-flex items-center px-2 py-1 rounded-full bg-twogirls-purple/80 text-white text-xs font-medium">
                  <Music className="h-3 w-3 mr-1" />
                  Альбом
                </div>
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">Планы на альбом "Неразлучные"</h3>
              <p className="text-muted-foreground">
                Two Girls делятся информацией о концепции альбома и планах на его запись 
                и выпуск летом этого года.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-2">
              <span className="text-sm text-muted-foreground">28 марта 2025</span>
              <Button variant="ghost" size="sm" className="text-twogirls-red hover:text-twogirls-red/90">
                Читать
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <Link to="/blog">
              Все записи
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;