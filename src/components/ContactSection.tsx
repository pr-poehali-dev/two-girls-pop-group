import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Связаться с нами</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Есть вопросы о сотрудничестве, интервью или концертах? Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-twogirls-red/5 to-twogirls-purple/5 border-none shadow-sm hover:shadow transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-twogirls-red/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-twogirls-red" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Телефон</h3>
                <p className="text-muted-foreground mb-4">Для быстрой связи</p>
                <Button asChild variant="link" className="text-twogirls-red">
                  <a href="tel:+79242461020">+7 (924) 246-10-20</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-twogirls-purple/5 to-twogirls-red/5 border-none shadow-sm hover:shadow transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-twogirls-purple/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-twogirls-purple" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-muted-foreground mb-4">Для деловых предложений</p>
                <Button asChild variant="link" className="text-twogirls-purple">
                  <a href="mailto:info@twogirls.ru">info@twogirls.ru</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-twogirls-red/5 to-twogirls-purple/5 border-none shadow-sm hover:shadow transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-twogirls-red/10 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-twogirls-red" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Telegram</h3>
                <p className="text-muted-foreground mb-4">Для общения с фанатами</p>
                <Button asChild variant="link" className="text-twogirls-red">
                  <a 
                    href="https://t.me/two_girls0" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @two_girls0
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-twogirls-purple/5 to-twogirls-red/5 border-none shadow-sm hover:shadow transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-twogirls-purple/10 flex items-center justify-center">
                <Instagram className="h-6 w-6 text-twogirls-purple" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Instagram</h3>
                <p className="text-muted-foreground mb-4">Следите за новостями</p>
                <Button asChild variant="link" className="text-twogirls-purple">
                  <a 
                    href="https://www.instagram.com/two_girls42" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @two_girls42
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;