import { Button } from "../_shared/components/ui/button";

export default function Header() {
  const handleDownloadLastVersion = () => {
    window.location.href = process.env.NEXT_PUBLIC_DOWNLOAD_URL!;
  };

  return (
    <div className="absolute flex w-full p-14 xl:px-24">
      <div className="w-full flex justify-between items-center h-fit p-4 rounded-xl gap-2">
        <div>
          <span className="text-sm font-bold lg:text-2xl">SONA</span>
        </div>

        <div className="flex flex-row gap-2">
          <Button onClick={handleDownloadLastVersion}>
            Download Grátis
          </Button>
        </div>
      </div>
    </div>
  );
}
