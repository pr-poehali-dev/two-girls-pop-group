import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Play, ListMusic } from 'lucide-react';

type Track = {
  id: number;
  title: string;
  duration: string;
};

const AlbumSection = () => {
  const albumTracks: Track[] = [
    { id: 1, title: "Первая любовь", duration: "3:12" },
    { id: 2, title: "Ненормальные", duration: "2:45" },
    { id: 3, title: "Я так", duration: "3:30" },
    { id: 4, title: "Двигайся", duration: "2:58" },
    { id: 5, title: "Я люблю тебя", duration: "3:24" },
    { id: 6, title: "Только жди", duration: "3:02" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Альбом «Неразлучные»</h2>
            <p className="text-muted-foreground">Выходит летом 2025 года</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            <ListMusic className="mr-2 h-4 w-4" />
            Полный трек-лист
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="aspect-square rounded-xl overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Альбом «Неразлучные»" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-2">
            <Card className="border-none shadow-none bg-muted/30">
              <CardContent className="p-0">
                <div className="space-y-2 p-4">
                  <h3 className="text-xl font-bold">Избранные треки</h3>
                </div>
                <div className="divide-y">
                  {albumTracks.map((track) => (
                    <div 
                      key={track.id} 
                      className="flex items-center gap-4 p-4 hover:bg-muted/60 transition-colors"
                    >
                      <div className="w-8 flex justify-center text-muted-foreground">
                        {track.id}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <div className="flex-1">
                        <p className="font-medium">{track.title}</p>
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {track.duration}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-sm">
                    В полный альбом войдут 20 треков, включая хиты «Неразлучные», «Two Girls» и другие
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;