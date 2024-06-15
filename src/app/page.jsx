import { Developer } from "./components/developer";
import { Messages } from "./components/messages";
import { Messengers } from "./components/messengers";

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen">
      <Developer />
      <Messages />
      <Messengers />
    </main>
  );
}
