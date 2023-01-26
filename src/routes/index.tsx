import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main
      class={
        "bg-zinc-900 text-white text-4xl flex flex-col items-center uppercase text-center font-thin"
      }
    >
      <div
        class={
          "h-screen max-w-2xl w-full flex flex-col items-center justify-center"
        }
      >
        <span class={"my-10"}>Hola pedazo de animal!</span>
        <img src="/me.png" alt="" class={"w-full"} />
      </div>
      <div
        class={
          "h-screen max-w-2xl w-full flex flex-col items-center justify-center"
        }
      >
        <span class={"my-10"}>Cumplo 26 este año y la puta madreee!</span>
        <img src="/giphy.gif" alt="" class={"w-full"} />
      </div>
      <div
        class={
          "h-screen max-w-2xl w-full flex flex-col items-center justify-center"
        }
      >
        <span class={"my-10"}>
          Para no comernos la depresión y la angustia que esto conlleva...{" "}
          <br />
          <br />
          <span class={"font-bold"}>
            El sábado a la noche te invito a comer algo a la parrila
          </span>
        </span>
        <img src="/party.gif" alt="" class={"w-full"} />
      </div>
      <div
        class={
          "h-screen max-w-2xl w-full flex flex-col items-center justify-center"
        }
      >
        <span class={"my-10"}>
          Traé lo que vayas a <b>tomar</b>, y si queres picar algun <b>snack</b>
          ... El mate invita la casa.
        </span>
        <img src="/leo.gif" alt="" class={"w-full"} />
      </div>
      <div
        class={
          "h-screen max-w-2xl w-full flex flex-col items-center justify-center"
        }
      >
        <div class="hover:translate-y-48 active:translate-y-48 active:pointer-events-none transition-all duration-500 ease-in-out font-thin cursor-pointer">
          Click acá para confirmar que veniiiis!
        </div>
      </div>
      <div
        class={
          "h-screen max-w-2xl w-full flex flex-col items-center justify-center"
        }
      >
        <Link
          href="https://walink.co/bc4ea8"
          target={"_blank"}
          class="underline hover:no-underline"
        >
          AAA mentira, clickea acá dale.
        </Link>
        <span class={"mt-10"}>
          Mira si no te iba a convidar la torta de la Elisa.
        </span>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
