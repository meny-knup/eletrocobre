import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function ProductSearch({ value, onChange }: Props) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar por nome, bitola (ex.: 2,5mm) ou tipo (PP, flexível)..."
        className="pl-9"
        aria-label="Buscar produtos"
      />
    </div>
  );
}
