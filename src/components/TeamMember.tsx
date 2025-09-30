import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamMember = ({ name, role, bio, image }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-soft transition-all duration-300">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-secondary font-medium mb-3">{role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
