import Image from "next/image";

export default function Test() {
  return (
    <div className="min-h-screen">
      <h1>Test</h1>
      <Image src="/me/casual.jpeg" alt="Test" width={100} height={100} />

      <Image src="/me/pro.jpg" alt="Test" width={100} height={100} />
    </div>
  );
}
