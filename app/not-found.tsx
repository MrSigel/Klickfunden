import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-ink pt-32 text-white">
        <div className="absolute inset-0 bg-radial-fade opacity-60" aria-hidden />
        <section className="container-page relative flex min-h-[68vh] items-center justify-center py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-marsgreen/30 bg-marsgreen/15 shadow-glow">
              <span className="font-display text-2xl font-bold text-marsgreen">
                404
              </span>
            </div>
            <p className="mt-8 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-marsgreen-300">
              <span className="h-px w-8 bg-marsgreen" />
              Nicht gefunden
              <span className="h-px w-8 bg-marsgreen" />
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Hoppla!
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-mist-100/80">
              Du bist auf einer Seite gelandet die aktuell noch nicht Existiert
              oder überhaupt garnicht vorhanden ist.
            </p>
            <div className="mt-9 flex justify-center">
              <Link href="/" className="btn-primary px-7 py-4 text-base">
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
