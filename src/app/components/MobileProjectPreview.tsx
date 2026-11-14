import type { ProjectMobilePreview } from "../lib/projects";
import { DeviceMockup } from "./DeviceMockup";

const screens = [
  { screen: "lead", sizes: "140px" },
  { screen: "left", sizes: "120px" },
  { screen: "right", sizes: "120px" },
] as const;

const screenPositions = {
  fan: {
    lead: "top-[6%] left-1/2 z-10 h-[88%]",
    left: "top-[15%] left-[24%] h-[78%] -rotate-[9deg]",
    right: "top-[15%] left-[76%] h-[78%] rotate-[9deg]",
  },
  "featured-screen": {
    lead: "top-[5%] left-[24%] z-10 h-[90%] -rotate-[6deg]",
    left: "top-[11%] left-[54%] h-[64%] rotate-[10deg]",
    right: "top-[29%] left-[78%] h-[61%] rotate-[10deg]",
  },
  staggered: {
    lead: "top-[12%] left-1/2 h-[76%]",
    left: "top-[20%] left-[22%] h-[76%]",
    right: "top-[4%] left-[78%] h-[76%]",
  },
};

export function MobileProjectPreview({ preview }: { preview: ProjectMobilePreview }) {
  const positions = screenPositions[preview.layout];

  return (
    <div
      className="absolute inset-0 isolate bg-[radial-gradient(ellipse_at_50%_10%,#fff9,transparent_70%),linear-gradient(150deg,transparent_45%,#00000014)]"
      style={{ backgroundColor: preview.background }}
    >
      {screens.map(({ screen, sizes }) => (
        <div key={screen} className={`absolute -translate-x-1/2 ${positions[screen]}`}>
          <DeviceMockup {...preview[screen]} sizes={sizes} className="h-full" />
        </div>
      ))}
    </div>
  );
}
