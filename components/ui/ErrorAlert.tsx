type ErrorAlertProps = {
  message: string;
  hint?: string;
};

export default function ErrorAlert({ message, hint }: ErrorAlertProps) {
  return (
    <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-sm leading-relaxed text-red-100">
      {message}
      {hint && ` ${hint}`}
    </div>
  );
}
