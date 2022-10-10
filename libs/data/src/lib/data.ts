export function data(): string {
  return 'data';
}

export interface DealProps {
  dealnumber?: string;
  customername?: string;
  suppliername?: string;
  status?: string;
  datereceived?: string;
  amountfinanced?: number | null;
  owner?: string[];
  comments?: string;
}

export interface DealColumnProps {
  label: string;
  name: string;
}
