import { cn } from "lib";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href, // Sem valor padrão, torna-se obrigatório
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  href: string; // Torna href obrigatório
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "row-span-1 rounded-lg group hover:shadow-md transition duration-200 shadow-input p-6 bg-card/80 backdrop-blur-lg border flex flex-col space-y-4",
        className
      )}
    >
      <div className="h-full">{header}</div>
      {icon}
      <div className="group-hover/bento:translate-x-2 transition duration-200 h-20 space-y-2 text-pretty">
        <div className="font-sans font-semibold text-foreground text-base">
          {title}
        </div>
        <div className="font-sans text-muted-foreground text-sm ">
          <p className="leading-tight">{description}</p>
        </div>
      </div>
    </Link>
  );
};
