import { Highlight } from "./context/ViewerWrapper";
export type Functionality = {
    onNewHightlight?: (h: Highlight) => any;
    onShareQuote?: (text: string) => any;
    highlights: Array<Highlight>;
    onDeleteHighlight?: (cfi: string) => any;
    onUpdateHighlight?: (cfi: string, noteTxt: string) => any;
};
type Props = {
    epubSrc: string;
} & Functionality;
declare function EpubReader({ epubSrc, highlights, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default EpubReader;
//# sourceMappingURL=EpubReader.d.ts.map