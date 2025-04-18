import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Calendar, Clock, Ticket } from 'lucide-react';

type Concert = {
  id: number;
  city: string;
  date: string;
  time: string;
  venue?: string;
};

const ConcertSchedule = () => {
  const upcomingConcerts: Concert[] = [
    { id: 1, city: "Уссурийск", date: "19.06.25", time: "18:05", venue: "Городской ДК" },
    { id: 2, city: "Находка", date: "21.06.25", time: "18:00", venue: "Центральная площадь" },
    { id: 3, city: "Владивосток", date: "23.06.25", time: "17:30", venue: "Феско-Холл" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="space-y-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ближайшие концерты</h2>
          <p className="text-lg text-muted-foreground">
            Приходите на наши выступления и услышьте новые песни вживую
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingConcerts.map((concert) => (
            <Card key={concert.id} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-twogirls-red/10 to-twogirls-purple/10 pb-4">
                <CardTitle className="flex justify-between items-start">
                  <span>{concert.city}</span>
                  <span className="text-twogirls-red">{concert.date}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  {concert.venue && (
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{concert.venue}</span>
                    </div>
                  )}
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Начало в {concert.time}</span>
                  </div>
                </div>
                <Button className="w-full">
                  <Ticket className="h-4 w-4 mr-2" />
                  Купить билет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-muted/30 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Тур по Дальнему Востоку</h3>
              <p className="text-muted-foreground">
                <Calendar className="h-4 w-4 inline-block mr-2" />
                С 28 июня по 23 июля 2025 года
              </p>
            </div>
            <Button>Полное расписание тура</Button>
          </div>
          <div className="mt-6">
            <p>
              Тур включает выступления в городах: Хабаровск, Комсомольск-на-Амуре, 
              Благовещенск, Южно-Сахалинск, Петропавловск-Камчатский и другие.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcertSchedule;