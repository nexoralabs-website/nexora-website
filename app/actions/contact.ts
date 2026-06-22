"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { createSupabaseClient } from "@/lib/supabase";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormValues, string[]>>;
};

export async function submitContactForm(
  data: ContactFormValues
): Promise<ContactFormState> {
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const supabase = createSupabaseClient();

  if (supabase) {
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      phone: parsed.data.phone || null,
      service: parsed.data.service,
      budget: parsed.data.budget || null,
      message: parsed.data.message,
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        message: "Failed to submit form. Please try again or email us directly.",
      };
    }
  }

  return {
    success: true,
    message: "Thank you! We'll get back to you within 24 hours.",
  };
}
