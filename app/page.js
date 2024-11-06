import Dashboard from "@/component/dasboard";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
      <div>
      <Dashboard />
    </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://wa.me/+6285893802972"
        >
          Kirimkan Keluh kesahmu ke sini
        </a>
      </footer>
    </div>
  );
}
