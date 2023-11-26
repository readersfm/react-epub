export type ItemType = {
    chapterName: string;
    fileSrc: string;
};
type Props = {
    chapterItem?: ItemType[] | null;
    activeFileSrc?: string;
    onChapterClick?: (v: ItemType) => any;
};
declare function FileChapterMenu({ chapterItem, activeFileSrc, onChapterClick, }: Props): import("react/jsx-runtime").JSX.Element;
export default FileChapterMenu;
//# sourceMappingURL=FileChapterMenu.d.ts.map