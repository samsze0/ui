import Link from "next/link";

export type LinkComponent = React.FC<React.ComponentProps<"a">> | typeof Link;
