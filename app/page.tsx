import VisitAmount from "@/components/VisitAmount";
import { promises as fs } from 'fs';
import TopNavbar from "./components/topNavbar";

export default async function Home() {

  const visitNumber: string = await fs.readFile(process.cwd() + '/stores/VisitNumber.txt', 'utf8')

  const newVisitNumber: number = +visitNumber+1

  await fs.writeFile(process.cwd() + '/stores/VisitNumber.txt', newVisitNumber.toString(), 'utf8')
  console.log(newVisitNumber);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-600">
      
      <VisitAmount visitNumber={visitNumber} />
      
    </main>
  );
}
