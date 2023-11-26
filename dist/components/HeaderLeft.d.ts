import { NavItem, Rendition } from "epubjs";
import { ItemType } from "./FileChapterMenu";
type Props = {
    navItem: NavItem[] | null;
    rendition: Rendition | null;
    onBackClick?: () => any;
    chapterItem?: ItemType[] | null;
    activeFileSrc?: string;
    onChapterClick?: (v: ItemType) => any;
};
declare function HeaderLeft({ navItem, rendition, onBackClick, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default HeaderLeft;
//# sourceMappingURL=HeaderLeft.d.ts.map