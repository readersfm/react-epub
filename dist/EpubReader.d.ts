import { Highlight } from "./context/ViewerWrapper";
import { ItemType } from "./components/FileChapterMenu";
export type Functionality = {
    onChapterClick?: (v: ItemType) => any;
    onNewHightlight?: (h: Highlight) => any;
    onShareQuote?: (text: string) => any;
    highlights: Array<Highlight>;
    onDeleteHighlight?: (cfi: string) => any;
    onUpdateHighlight?: (cfi: string, noteTxt: string) => any;
};
type Props = {
    epubSrc: string;
    header?: string;
    onBackClick?: () => any;
    chapterItem?: ItemType[] | null;
    activeFileSrc?: string;
} & Functionality;
declare function EpubReader({ epubSrc, highlights, header, onBackClick, chapterItem, activeFileSrc, onChapterClick, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default EpubReader;
//# sourceMappingURL=EpubReader.d.ts.map