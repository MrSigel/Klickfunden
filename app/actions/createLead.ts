"use server";

import {
  submitLead,
  type SubmitLeadErrorType,
  type SubmitLeadInput,
} from "@/app/actions/submitLead";

export type CreateLeadInput = SubmitLeadInput;

export type CreateLeadResult =
  | { ok: true; id: string }
  | { ok: false; message: string; errorType: SubmitLeadErrorType };

export async function createLead(input: CreateLeadInput): Promise<CreateLeadResult> {
  const result = await submitLead(input);

  if (result.success) {
    return { ok: true, id: result.id };
  }

  return {
    ok: false,
    message: result.message,
    errorType: result.errorType,
  };
}
