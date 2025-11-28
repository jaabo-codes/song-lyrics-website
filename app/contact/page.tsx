
import { Header } from "../header";

export default function ContactPage() {
  return (
    <section
      className="dark:bg-black"
    >
      <Header/>
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <h2 className="text-4xl dark:text-white">Contact Us</h2>
      </div>
    </section>
  );
}

