import { NavLinkProps } from "@@/types/nav-link";
import { cn, tw } from "@@/utils/tailwind";
import { RxArrowTopRight } from "react-icons/rx";

// TODO: combine these components

export function NavLink({
  linkComp,
  href,
  pathname,
  children,
  onClick,
  className,
  external = false,
}: NavLinkProps) {
  const Link = linkComp ?? "a";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        tw`
            inline-block relative
            transition-colors hover:dark:text-neutral-50/80
          `,
        pathname?.startsWith(href)
          ? "dark:text-neutral-50"
          : "dark:text-neutral-50/60",
        className
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
      {external ?? (
        <RxArrowTopRight
          className={tw`
              absolute top-[0px] right-[-13px] 
              w-[10px] h-[10px]
              dark:text-neutral-50/60
            `}
        />
      )}
    </Link>
  );
}

export function MobileNavLink({
  href,
  onClick,
  className,
  children,
  linkComp,
  external = false,
}: NavLinkProps) {
  const Link = linkComp ?? "a";
  return (
    <span className="flex flex-row gap-2 items-center">
      <Link
        onClick={onClick}
        href={href}
        className={cn(className)}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
      {external && (
        <RxArrowTopRight
          className={tw`
              w-[12px] h-[12px]  
            dark:text-neutral-50/60
            `}
        />
      )}
    </span>
  );
}

export function FooterNavLink({
  href,
  onClick,
  className,
  children,
  pathname,
  linkComp,
  external = false,
}: NavLinkProps) {
  const Link = linkComp ?? "a";
  return (
    <span className="flex flex-row gap-1 items-center">
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          tw`
          text-sm
          transition-colors hover:dark:text-neutral-50/80
        `,
          pathname?.startsWith(href)
            ? "dark:text-neutral-50/80"
            : "dark:text-neutral-400/80",
          className
        )}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
      {external && (
        <RxArrowTopRight className="text-neutral-400/70 w-[13px] h-[13px]" />
      )}
    </span>
  );
}
