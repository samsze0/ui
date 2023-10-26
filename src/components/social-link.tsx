import { cn } from "@@/utils/tailwind";
import { buttonVariants } from "@@/components/primitives/button";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { ImTwitter } from "react-icons/im";
import { LinkComponent } from "@@/types/link";
import { VariantProps } from "class-variance-authority";
import { PrefixProperties } from "@@/types/prefix-properties";

// TODO: properly setup a standard for exposing internal components props

export const SocialLink: React.FC<
  React.ComponentProps<"a"> & {
    // PrefixProperties<"button", VariantProps<typeof buttonVariants>> &
    className?: string;
    href: string;
    type: "linkedIn" | "twitter" | "github";
    linkComp?: LinkComponent;
  }
> = ({
  href,
  type,
  className,
  linkComp,
  // buttonSize,
  // buttonState,
  // buttonStyles,
}) => {
  const Link = linkComp ?? "a";

  const Icon =
    type === "twitter"
      ? ImTwitter
      : type === "linkedIn"
      ? RxLinkedinLogo
      : type === "github"
      ? RxGithubLogo
      : null;

  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <div
        className={cn(
          buttonVariants({
            styles: "ghost",
            size: "icon",
          }),
          className
        )}
      >
        {Icon && <Icon className="h-[1.2rem] w-[1.2rem] fill-current" />}
      </div>
    </Link>
  );
};
