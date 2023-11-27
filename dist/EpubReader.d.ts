import { Highlight } from "./context/ViewerWrapper";
import { ItemType } from "./components/FileChapterMenu";
export type Functionality = {
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
    chapters?: ItemType[] | null;
    activeChapter?: string | number;
    onChapterSelect?: (v: ItemType) => any;
} & Functionality;
declare function EpubReader({ epubSrc, highlights, header, onBackClick, chapters, activeChapter, onChapterSelect, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default EpubReader;
//# sourceMappingURL=EpubReader.d.ts.map