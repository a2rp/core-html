import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));

// Foundations
const DoctypeLang = lazy(() => import("./pages/foundations/doctypeLang"));
const MetaCharsetViewport = lazy(() => import("./pages/foundations/metaCharsetViewport"));
const DirBasics = lazy(() => import("./pages/foundations/dirBasics"));
const BlockVsInline = lazy(() => import("./pages/foundations/blockVsInline"));
const ContentCategories = lazy(() => import("./pages/foundations/contentCategories"));

const HeadVsBody = lazy(() => import("./pages/skeleton/headVsBody"));
const BoilerplateOrder = lazy(() => import("./pages/skeleton/boilerplateOrder"));
const FaviconsMin = lazy(() => import("./pages/skeleton/faviconsMin"));
const ScriptsStylesPlacement = lazy(() => import("./pages/skeleton/scriptsStylesPlacement"));

const CoreLandmarks = lazy(() => import("./pages/landmarks/coreLandmarks"));
const SectionVsDiv = lazy(() => import("./pages/landmarks/sectionVsDiv"));
const NestingOutline = lazy(() => import("./pages/landmarks/nestingOutline"));

const H1H6Hierarchy = lazy(() => import("./pages/headings/h1H6Hierarchy"));

const PBrHr = lazy(() => import("./pages/text/pBrHr"));
const EmVsStrong = lazy(() => import("./pages/text/emVsStrong"));
const InlineSemantics = lazy(() => import("./pages/text/inlineSemantics"));
const CodePreKbdSamp = lazy(() => import("./pages/text/codePreKbdSamp"));

const MinimalAnatomy = lazy(() => import("./pages/links/minimalAnatomy"));
const PathsAndFragments = lazy(() => import("./pages/links/pathsAndFragments"));
const TargetRelSafety = lazy(() => import("./pages/links/targetRelSafety"));
const LinkTextQuality = lazy(() => import("./pages/links/linkTextQuality"));

const UlOlLi = lazy(() => import("./pages/lists/ulOlLi"));
const NestedAndStartReversed = lazy(() => import("./pages/lists/nestedAndStartReversed"));
const DlDtDd = lazy(() => import("./pages/lists/dlDtDd"));

const ImgBasics = lazy(() => import("./pages/media/imgBasics"));
const DecorativeVsInformative = lazy(() => import("./pages/media/decorativeVsInformative"));
const FigureFigcaption = lazy(() => import("./pages/media/figureFigcaption"));
const AudioVideoSimple = lazy(() => import("./pages/media/audioVideoSimple"));
const TrackBasics = lazy(() => import("./pages/media/trackBasics"));

const TablesStructure = lazy(() => import("./pages/tables/structure"));
const ThVsTdScope = lazy(() => import("./pages/tables/thVsTdScope"));
const ColgroupCol = lazy(() => import("./pages/tables/colgroupCol"));
const TablesA11yDosDonts = lazy(() => import("./pages/tables/a11yDosDonts"));

const FormBasics = lazy(() => import("./pages/forms/formBasics"));
const LabelAssociation = lazy(() => import("./pages/forms/labelAssociation"));
const InputsTypeMatrix = lazy(() => import("./pages/forms/inputsTypeMatrix"));
const CommonAttrs = lazy(() => import("./pages/forms/commonAttrs"));
const FieldsetLegend = lazy(() => import("./pages/forms/fieldsetLegend"));
const SelectOptgroup = lazy(() => import("./pages/forms/selectOptgroup"));
const TextareaBasics = lazy(() => import("./pages/forms/textarea"));
const ValidationHints = lazy(() => import("./pages/forms/validationHints"));
const AutocompleteTokens = lazy(() => import("./pages/forms/autocompleteTokens"));
const InputHelpers = lazy(() => import("./pages/forms/inputHelpers"));

const ButtonTypes = lazy(() => import("./pages/interactive/buttonTypes"));
const DetailsSummary = lazy(() => import("./pages/interactive/detailsSummary"));
const DialogOpen = lazy(() => import("./pages/interactive/dialogOpen"));
const NoNesting = lazy(() => import("./pages/interactive/noNesting"));

const TitleQuality = lazy(() => import("./pages/metadata/titleQuality"));
const MetaDescription = lazy(() => import("./pages/metadata/metaDescription"));
const CharsetViewportRecap = lazy(() => import("./pages/metadata/charsetViewportRecap"));
const RobotsBasics = lazy(() => import("./pages/metadata/robotsBasics"));
const CanonicalConcept = lazy(() => import("./pages/metadata/canonicalConcept"));
const LinksScripts = lazy(() => import("./pages/metadata/linksScripts"));

const IdClassStyleTitle = lazy(() => import("./pages/globals/idClassStyleTitle"));
const HiddenTabindexContenteditable = lazy(() => import("./pages/globals/hiddenTabindexContenteditable"));
const DataAttributes = lazy(() => import("./pages/globals/dataAttributes"));
const LangOnElements = lazy(() => import("./pages/globals/langOnElements"));

const LazyDecoding = lazy(() => import("./pages/imagesPerf/lazyDecoding"));
const IntrinsicDimensions = lazy(() => import("./pages/imagesPerf/intrinsicDimensions"));
const FetchpriorityNote = lazy(() => import("./pages/images-perf/fetchpriorityNote"));

const A11yLanguageLandmarks = lazy(() => import("./pages/a11y/languageLandmarks"));
const FormLabelsErrors = lazy(() => import("./pages/a11y/formLabelsErrors"));
const NameRoleValue = lazy(() => import("./pages/a11y/nameRoleValue"));
const FocusOrderOutline = lazy(() => import("./pages/a11y/focusOrderOutline"));
const SkipLinkConcept = lazy(() => import("./pages/a11y/skipLinkConcept"));

const ScriptPlacement = lazy(() => import("./pages/scripting/scriptPlacement"));
const ProgressiveEnhancement = lazy(() => import("./pages/scripting/progressiveEnhancement"));
const SemanticsHelpJs = lazy(() => import("./pages/scripting/semanticsHelpJs"));

const VoidElements = lazy(() => import("./pages/pitfalls/voidElements"));
const PitfallMultipleH1 = lazy(() => import("./pages/pitfalls/multipleH1"));
const ButtonVsLink = lazy(() => import("./pages/pitfalls/buttonVsLink"));
const NoDivForHeadings = lazy(() => import("./pages/pitfalls/noDivForHeadings"));
const TextInsideImages = lazy(() => import("./pages/pitfalls/textInsideImages"));

const ButtonVsLinkDecision = lazy(() => import("./pages/patterns/buttonVsLinkDecision"));
const LabeledFormRow = lazy(() => import("./pages/patterns/labeledFormRow"));
const DataTableWithScope = lazy(() => import("./pages/patterns/dataTableWithScope"));
const FigureWithCaption = lazy(() => import("./pages/patterns/figureWithCaption"));
const BasicPageSkeleton = lazy(() => import("./pages/patterns/basicPageSkeleton"));


const AppRoutes = () => {
    const location = useLocation();

    return (
        <Suspense
            fallback={
                <Box
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CircularProgress />
                </Box>
            }
        >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />

                {/* Foundations */}
                <Route path="/foundations" element={<Navigate to="/foundations/doctype-lang" replace />} />
                <Route path="/foundations/doctype-lang" element={<DoctypeLang />} />
                <Route path="/foundations/meta-charset-viewport" element={<MetaCharsetViewport />} />
                <Route path="/foundations/dir-basics" element={<DirBasics />} />
                <Route path="/foundations/block-vs-inline" element={<BlockVsInline />} />
                <Route path="/foundations/content-categories" element={<ContentCategories />} />

                <Route path="/skeleton/head-vs-body" element={<HeadVsBody />} />
                <Route path="/skeleton/boilerplate-order" element={<BoilerplateOrder />} />
                <Route path="/skeleton/favicons-min" element={<FaviconsMin />} />
                <Route path="/skeleton/scripts-styles-placement" element={<ScriptsStylesPlacement />} />

                <Route path="/landmarks/core-landmarks" element={<CoreLandmarks />} />
                <Route path="/landmarks/section-vs-div" element={<SectionVsDiv />} />
                <Route path="/landmarks/nesting-outline" element={<NestingOutline />} />

                <Route path="/headings/h1-h6-hierarchy" element={<H1H6Hierarchy />} />

                <Route path="/text/p-br-hr" element={<PBrHr />} />
                <Route path="/text/em-vs-strong" element={<EmVsStrong />} />
                <Route path="/text/inline-semantics" element={<InlineSemantics />} />
                <Route path="/text/code-pre-kbd-samp" element={<CodePreKbdSamp />} />

                <Route path="/links/minimal-anatomy" element={<MinimalAnatomy />} />
                <Route path="/links/paths-and-fragments" element={<PathsAndFragments />} />
                <Route path="/links/target-rel-safety" element={<TargetRelSafety />} />
                <Route path="/links/link-text-quality" element={<LinkTextQuality />} />

                <Route path="/lists/ul-ol-li" element={<UlOlLi />} />
                <Route path="/lists/nested-and-start-reversed" element={<NestedAndStartReversed />} />

                <Route path="/lists/dl-dt-dd" element={<DlDtDd />} />
                <Route path="/media/img-basics" element={<ImgBasics />} />
                <Route path="/media/decorative-vs-informative" element={<DecorativeVsInformative />} />
                <Route path="/media/figure-figcaption" element={<FigureFigcaption />} />
                <Route path="/media/audio-video-simple" element={<AudioVideoSimple />} />
                <Route path="/media/track-basics" element={<TrackBasics />} />
                <Route path="/tables/structure" element={<TablesStructure />} />

                <Route path="/tables/th-vs-td-scope" element={<ThVsTdScope />} />
                <Route path="/tables/colgroup-col" element={<ColgroupCol />} />
                <Route path="/tables/a11y-dos-donts" element={<TablesA11yDosDonts />} />
                <Route path="/forms/form-basics" element={<FormBasics />} />
                <Route path="/forms/label-association" element={<LabelAssociation />} />
                <Route path="/forms/inputs-type-matrix" element={<InputsTypeMatrix />} />
                <Route path="/forms/common-attrs" element={<CommonAttrs />} />
                <Route path="/forms/fieldset-legend" element={<FieldsetLegend />} />

                <Route path="/forms/select-optgroup" element={<SelectOptgroup />} />
                <Route path="/forms/textarea" element={<TextareaBasics />} />

                <Route path="/forms/validation-hints" element={<ValidationHints />} />
                <Route path="/forms/autocomplete-tokens" element={<AutocompleteTokens />} />
                <Route path="/forms/input-helpers" element={<InputHelpers />} />

                <Route path="/interactive/button-types" element={<ButtonTypes />} />
                <Route path="/interactive/details-summary" element={<DetailsSummary />} />
                <Route path="/interactive/dialog-open" element={<DialogOpen />} />

                <Route path="/interactive/no-nesting" element={<NoNesting />} />
                <Route path="/metadata/title-quality" element={<TitleQuality />} />
                <Route path="/metadata/meta-description" element={<MetaDescription />} />
                <Route path="/metadata/charset-viewport-recap" element={<CharsetViewportRecap />} />
                <Route path="/metadata/robots-basics" element={<RobotsBasics />} />
                <Route path="/metadata/canonical-concept" element={<CanonicalConcept />} />
                <Route path="/metadata/links-scripts" element={<LinksScripts />} />
                <Route path="/globals/id-class-style-title" element={<IdClassStyleTitle />} />
                <Route path="/globals/hidden-tabindex-contenteditable" element={<HiddenTabindexContenteditable />} />
                <Route path="/globals/data-attributes" element={<DataAttributes />} />
                <Route path="/globals/lang-on-elements" element={<LangOnElements />} />
                <Route path="/images-perf/lazy-decoding" element={<LazyDecoding />} />
                <Route path="/images-perf/intrinsic-dimensions" element={<IntrinsicDimensions />} />
                <Route path="/images-perf/fetchpriority-note" element={<FetchpriorityNote />} />
                <Route path="/a11y/language-landmarks" element={<A11yLanguageLandmarks />} />
                <Route path="/a11y/form-labels-errors" element={<FormLabelsErrors />} />
                <Route path="/a11y/name-role-value" element={<NameRoleValue />} />
                <Route path="/a11y/focus-order-outline" element={<FocusOrderOutline />} />
                <Route path="/a11y/skip-link-concept" element={<SkipLinkConcept />} />
                <Route path="/scripting/script-placement" element={<ScriptPlacement />} />
                <Route path="/scripting/progressive-enhancement" element={<ProgressiveEnhancement />} />
                <Route path="/scripting/semantics-help-js" element={<SemanticsHelpJs />} />
                <Route path="/pitfalls/void-elements" element={<VoidElements />} />
                <Route path="/pitfalls/multiple-h1" element={<PitfallMultipleH1 />} />
                <Route path="/pitfalls/button-vs-link" element={<ButtonVsLink />} />
                <Route path="/pitfalls/no-div-for-headings" element={<NoDivForHeadings />} />
                <Route path="/pitfalls/text-inside-images" element={<TextInsideImages />} />
                <Route path="/patterns/button-vs-link-decision" element={<ButtonVsLinkDecision />} />
                <Route path="/patterns/labeled-form-row" element={<LabeledFormRow />} />
                <Route path="/patterns/data-table-with-scope" element={<DataTableWithScope />} />
                <Route path="/patterns/figure-with-caption" element={<FigureWithCaption />} />
                <Route path="/patterns/basic-page-skeleton" element={<BasicPageSkeleton />} />






                {/* Aliases so stale links never 404 */}
                <Route
                    path="/foundations/meta-charset"
                    element={<Navigate to="/foundations/meta-charset-viewport#charset" replace />}
                />
                <Route
                    path="/foundations/dir-viewport"
                    element={<Navigate to="/foundations/meta-charset-viewport#viewport" replace />}
                />


                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
