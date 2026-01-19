import { FloatingDock } from "@/components/ui/floating-dock";

export default function Home() {
  return <>
    <div className="h-screen w-screen flex justify-center">
      <div className="flex items-end space-y-10">
        <FloatingDock />
      </div>
    </div>
  </>;
}
