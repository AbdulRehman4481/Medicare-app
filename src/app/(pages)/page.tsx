
import dynamic from "next/dynamic";
const HomeComponent = dynamic(() => import('../../(components)/home/Home'), { ssr: false })
export default function Home() {
  return (
    <>
    <HomeComponent />
    </>
  );
}
