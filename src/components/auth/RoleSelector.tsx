import { ROLES, type RoleId } from "@/lib/roles";

type Props = {
  value: RoleId;
  onChange: (role: RoleId) => void;
};

export default function RoleSelector({ value, onChange }: Props) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium">Masuk sebagai</legend>

      <div className="space-y-2.5">
        {ROLES.map((role) => {
          const checked = value === role.id;
          return (
            <label
              key={role.id}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 transition-colors ${
                checked
                  ? "border-brand bg-brand-soft"
                  : "border-line/70 bg-white hover:border-brand/50"
              }`}
            >
              <input
                type="radio"
                name="role"
                value={role.id}
                checked={checked}
                onChange={() => onChange(role.id)}
                className="mt-1 h-4 w-4 shrink-0 accent-brand"
              />
              <span>
                <span className="block text-sm font-medium">{role.title}</span>
                <span className="mt-0.5 block text-sm text-ink/80">
                  {role.description}
                </span>
              </span>
            </label>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-muted">
        Peran harus sesuai dengan akun Anda.
      </p>
    </fieldset>
  );
}
