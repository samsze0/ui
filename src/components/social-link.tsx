import { cn } from "@@/utils/tailwind";
import { buttonVariants } from "@@/components/primitives/button";
import { RxLinkedinLogo } from "react-icons/rx";
import { ImTwitter } from "react-icons/im";
import { LinkComponent } from "@@/types/link";

export const SocialLink: React.FC<
  React.ComponentProps<"a"> & {
    className?: string;
    href: string;
    type: "artizon" | "linkedIn" | "twitter";
    linkComp?: LinkComponent;
  }
> = ({ href, type, className, linkComp }) => {
  const Link = linkComp ?? "a";

  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <div
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          className,
          "w-9 px-0"
        )}
      >
        {type === "twitter" ? (
          <ImTwitter className="h-[1.2rem] w-[1.2rem] fill-current" />
        ) : type === "linkedIn" ? (
          <RxLinkedinLogo className="h-[1.2rem] w-[1.2rem] fill-current" />
        ) : null}
        <span className="sr-only">{type}</span>
      </div>
    </Link>
  );
};
