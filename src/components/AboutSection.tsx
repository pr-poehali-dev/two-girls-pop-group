import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Dasha Blake" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden mt-8">
                <img 
                  src="/placeholder.svg" 
                  alt="Clover" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">О группе</h2>
            
            <p className="text-lg">
              <span className="font-bold bg-gradient-to-r from-twogirls-red to-twogirls-purple bg-clip-text text-transparent">Two Girls</span> — 
              начинающая российская поп-группа из двух талантливых девушек, которая была создана в 2025 году в городе Находка.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">Dasha Blake</h3>
                <p>Красноволосая вокалистка и автор песен. Весёлая и иногда скромная, она привносит яркие эмоции в каждую композицию.</p>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">Clover</h3>
                <p>Брюнетка с короткой стрижкой, девочка-пацан. Талантливая вокалистка и автор песен, добавляющая уникальное звучание каждому треку.</p>
              </div>
            </div>
            
            <p className="text-lg">
              Группа говорит о нетрадиционной любви и свободе быть собой. Их главное послание: неважно, что думают другие, главное — что тебе нравится.
            </p>
            
            <div className="pt-2">
              <Button asChild>
                <Link to="/about">
                  Узнать больше
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;