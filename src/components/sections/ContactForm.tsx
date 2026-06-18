"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { COMPANY } from "@/lib/constants";

type FormData = {
  name: string;
  phone: string;
  email: string;
  count: string;
  message: string;
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSending(true);
    // Replace with Resend API route in production
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form data:", data);
    setSent(true);
    setSending(false);
    reset();
  };

  if (sent) {
    return (
      <div className="border border-brand/30 p-8 text-center">
        <div className="w-12 h-12 border border-brand/40 flex items-center justify-center mx-auto mb-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B5A040"
            strokeWidth="2"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="font-syne font-black text-dirt text-xl mb-2">
          Poptávka odeslána.
        </p>
        <p className="text-mist text-sm">
          Ozveme se do 24 hodin. Nebo zavolejte:{" "}
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="text-brand hover:underline"
          >
            {COMPANY.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
      {/* Name + Phone — 2 col on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="font-tech text-[11px] tracking-[0.15em] uppercase text-mist/60">
            Jméno a příjmení *
          </label>
          <input
            {...register("name", { required: "Povinné pole" })}
            type="text"
            placeholder="Jan Novák"
            className="bg-transparent border-b border-black/15 focus:border-brand pb-2.5 text-dirt placeholder-mist/40 font-body text-base transition-colors duration-200"
          />
          {errors.name && (
            <span className="font-tech text-[10px] text-rust">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="font-tech text-[11px] tracking-[0.15em] uppercase text-mist/60">
            Telefon *
          </label>
          <input
            {...register("phone", { required: "Povinné pole" })}
            type="tel"
            placeholder="+420 725 381 004"
            className="bg-transparent border-b border-black/15 focus:border-brand pb-2.5 text-dirt placeholder-mist/40 font-body text-base transition-colors duration-200"
          />
          {errors.phone && (
            <span className="font-tech text-[10px] text-rust">
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="font-tech text-[11px] tracking-[0.15em] uppercase text-mist/60">
          E-mail *
        </label>
        <input
          {...register("email", {
            required: "Povinné pole",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Neplatný e-mail",
            },
          })}
          type="email"
          placeholder="jan@farma.cz"
          className="bg-transparent border-b border-black/15 focus:border-brand pb-2.5 text-dirt placeholder-mist/40 font-body text-base transition-colors duration-200"
        />
        {errors.email && (
          <span className="font-tech text-[10px] text-rust">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Count */}
      <div className="flex flex-col gap-2">
        <label className="font-tech text-[11px] tracking-[0.15em] uppercase text-mist/60">
          Počet svítidel / velikost stáje *
        </label>
        <select
          {...register("count", { required: "Povinné pole" })}
          className="bg-white border-b border-black/15 focus:border-brand pb-2.5 text-dirt font-body text-base transition-colors duration-200 cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled className="text-mist/40">
            Vyberte přibližný počet
          </option>
          <option value="do-50">do 50 ks</option>
          <option value="50-200">50–200 ks</option>
          <option value="200+">200+ ks</option>
        </select>
        {errors.count && (
          <span className="font-tech text-[10px] text-rust">
            {errors.count.message}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="font-tech text-[11px] tracking-[0.15em] uppercase text-mist/60">
          Zpráva (nepovinné)
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Popište svůj projekt, stávající osvětlení, nebo co vás trápí..."
          className="bg-transparent border-b border-black/15 focus:border-brand pb-2.5 text-dirt placeholder-mist/40 font-body text-base transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="self-start bg-brand text-dirt font-body font-semibold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#9D8B36] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3"
      >
        {sending ? (
          <>
            <svg
              className="animate-spin"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
            Odesílám...
          </>
        ) : (
          "Odeslat poptávku"
        )}
      </button>

      <p className="text-mist/40 text-xs font-tech leading-relaxed">
        Odesláním souhlasíte se zpracováním osobních údajů pro účely odpovědi
        na poptávku. Vaše data neposkytujeme třetím stranám.
      </p>
    </form>
  );
}
