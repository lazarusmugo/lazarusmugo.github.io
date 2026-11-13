import Image from "next/image";

export function DeviceMockup({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[9/19.5] overflow-hidden rounded-[14%/6.5%] border-[3px] border-neutral-800 bg-neutral-800 shadow-[0_8px_20px_-10px_#0007] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        draggable={false}
        className="select-none object-contain"
      />
    </div>
  );
}
