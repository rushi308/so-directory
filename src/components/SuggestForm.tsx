"use client";

import { useState, type FormEvent } from "react";
import type { Category } from "@/types/directory";

type SuggestFormProps = {
  categories: Category[];
};

type FormState = {
  businessName: string;
  categoryId: string;
  shortDescription: string;
  phone: string;
  website: string;
  contactName: string;
  notes: string;
};

const initialState: FormState = {
  businessName: "",
  categoryId: "",
  shortDescription: "",
  phone: "",
  website: "",
  contactName: "",
  notes: "",
};

export function SuggestForm({ categories }: SuggestFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.businessName.trim()) {
      next.businessName = "Please enter a business name.";
    }
    if (!values.categoryId) {
      next.categoryId = "Please choose a category.";
    }
    if (values.shortDescription.trim().length < 12) {
      next.shortDescription = "Add a short description (at least a sentence).";
    }
    if (!values.phone.trim() && !values.website.trim()) {
      next.phone = "Add a phone/WhatsApp number or a website.";
    }
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // v1: UI-only. Swap for POST /api/suggestions or a server action later.
    setSubmitted(true);
    setForm(initialState);
  }

  if (submitted) {
    return (
      <div
        className="animate-fade-up rounded-lg border border-green-700/20 bg-green-50 px-6 py-10 text-center"
        role="status"
      >
        <p className="font-display text-2xl text-green-900">Thank you</p>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          We’ll review your suggestion and add it to the directory if it looks
          right for the neighbourhood.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-green-800 underline-offset-4 hover:underline"
        >
          Suggest another business
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-md border border-green-900/15 bg-cream px-3 py-2.5 text-ink outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/20";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="businessName" className="text-sm font-medium text-ink">
          Business name
        </label>
        <input
          id="businessName"
          name="businessName"
          value={form.businessName}
          onChange={(e) => update("businessName", e.target.value)}
          className={fieldClass}
          autoComplete="organization"
        />
        {errors.businessName ? (
          <p className="mt-1 text-sm text-red-700">{errors.businessName}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="categoryId" className="text-sm font-medium text-ink">
          Category
        </label>
        <select
          id="categoryId"
          name="categoryId"
          value={form.categoryId}
          onChange={(e) => update("categoryId", e.target.value)}
          className={fieldClass}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.categoryId ? (
          <p className="mt-1 text-sm text-red-700">{errors.categoryId}</p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="shortDescription"
          className="text-sm font-medium text-ink"
        >
          Short description
        </label>
        <textarea
          id="shortDescription"
          name="shortDescription"
          rows={3}
          value={form.shortDescription}
          onChange={(e) => update("shortDescription", e.target.value)}
          className={fieldClass}
          placeholder="What do they help with around South Oxhey?"
        />
        {errors.shortDescription ? (
          <p className="mt-1 text-sm text-red-700">{errors.shortDescription}</p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass}
            autoComplete="tel"
          />
          {errors.phone ? (
            <p className="mt-1 text-sm text-red-700">{errors.phone}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="website" className="text-sm font-medium text-ink">
            Website <span className="font-normal text-stone">(optional)</span>
          </label>
          <input
            id="website"
            name="website"
            type="url"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            className={fieldClass}
            placeholder="https://"
            autoComplete="url"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contactName" className="text-sm font-medium text-ink">
          Your name / contact{" "}
          <span className="font-normal text-stone">(optional)</span>
        </label>
        <input
          id="contactName"
          name="contactName"
          value={form.contactName}
          onChange={(e) => update("contactName", e.target.value)}
          className={fieldClass}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="notes" className="text-sm font-medium text-ink">
          Notes <span className="font-normal text-stone">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          className={fieldClass}
          placeholder="Anything neighbours should know"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-green-800 px-5 py-3.5 font-medium text-white transition hover:bg-green-700 sm:w-auto"
      >
        Submit suggestion
      </button>
    </form>
  );
}
