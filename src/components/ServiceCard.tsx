import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  const cardContent = (
    <Card className="h-full shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
        {link && (
          <div className="mt-4 pt-4 border-t border-border">
            <Button variant="link" className="p-0 h-auto text-primary group-hover:gap-2 transition-all">
              Scopri di più
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (link) {
    return <Link to={link} className="block">{cardContent}</Link>;
  }

  return cardContent;
};

export default ServiceCard;
