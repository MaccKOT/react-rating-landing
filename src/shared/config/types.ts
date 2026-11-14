export type SectionId = "clubs" | "rating" | "reviews" | "slots";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type BrandMarkKind =
  | "bolt"
  | "chip"
  | "spade"
  | "diamond"
  | "wave"
  | "clover"
  | "crown"
  | "seven"
  | "star"
  | "dice";

export type Casino = {
  id: string;
  name: string;
  mark: BrandMarkKind;
  color: string;
  bonus: string;
  payout: string;
  providers: string[];
  withdrawals: string;
  cashback: string;
  rating: number;
};

export type SlotArtKind = "fruits" | "seven" | "cocktail";

export type Slot = {
  id: string;
  name: string;
  provider: string;
  art: SlotArtKind;
  gradient: readonly [string, string];
};

export type Review = { title: string };
