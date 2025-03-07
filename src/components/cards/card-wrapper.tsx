import { ReactNode } from "react";
import { useTheme } from "next-themes";

const shineMaskImage = `
  radial-gradient(
    circle at 50% 150%,
    white,
    transparent
  )`;

interface CardWrapperProps {
  children: ReactNode;
}

export default function CardWrapper({ children }: CardWrapperProps) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="group w-full h-full relative overflow-hidden rounded-3xl p-px dark:bg-white/10 bg-white/60">
      {resolvedTheme === "dark" && (
        <>
          <div className="absolute inset-0" style={{ background: "#ffffff" }} />
          <div
            className="shine absolute -inset-2 opacity-40 blur-md z-10"
            style={{
              maskImage: shineMaskImage,
              WebkitMaskImage: shineMaskImage,
              backgroundImage: `
                #e0dfe3`,
            }}
          />

          <div
            className="absolute inset-px rounded-3xl"
            style={{ background: "#ffffff" }}
          />
        </>
      )}
      {resolvedTheme === "light" && (
        <>
          <div
            className="absolute inset-px rounded-3xl"
            style={{ background: "#ede9e9" }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: `
              #ede8d080
              `,
            }}
          />
        </>
      )}

      <div className="relative h-full">{children}</div>
    </div>
  );
}
