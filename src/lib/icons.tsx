/**
 * Icon registry: data files reference icons by string name so content stays
 * serializable. Add new icons here — one place, typed exhaustively.
 */
import {
  Blocks,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Code2,
  Cpu,
  Database,
  Eye,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  LifeBuoy,
  Lightbulb,
  LineChart,
  Mail,
  MapPin,
  MessageSquare,
  Palette,
  Phone,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Timer,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const REGISTRY = {
  Blocks,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Code2,
  Cpu,
  Database,
  Eye,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  LifeBuoy,
  Lightbulb,
  LineChart,
  Mail,
  MapPin,
  MessageSquare,
  Palette,
  Phone,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Timer,
  Users,
  Wrench,
  Zap,
} satisfies Record<string, LucideIcon>;

export type RegistryIconName = keyof typeof REGISTRY;

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = REGISTRY[name as RegistryIconName] ?? Sparkles;
  return <Cmp className={className} aria-hidden />;
}
