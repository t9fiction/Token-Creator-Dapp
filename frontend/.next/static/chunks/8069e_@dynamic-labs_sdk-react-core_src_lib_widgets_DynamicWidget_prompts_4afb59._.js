(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/8069e_@dynamic-labs_sdk-react-core_src_lib_widgets_DynamicWidget_prompts_4afb59._.js", {

"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/DefaultPromptModal/DefaultPromptModal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DefaultPromptLayout": (()=>DefaultPromptLayout),
    "DefaultPromptModal": (()=>DefaultPromptModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$classNames$2f$classNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/classNames/classNames.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/WidgetPortal/WidgetPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconWithSpinner$2f$IconWithSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconWithSpinner/IconWithSpinner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const DefaultPromptLayout = ({ children, className = '', dataTestId = '', icon, showSpinnerInIcon = true, title })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$classNames$2f$classNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classNames"])('default-prompt-modal', className),
        "data-testid": dataTestId,
        children: [
            icon && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconWithSpinner$2f$IconWithSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWithSpinner"], {
                Icon: icon,
                iconSize: 96,
                isSpinning: showSpinnerInIcon,
                className: 'default-prompt-modal__icon-with-spinner'
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: 'default-prompt-modal__content',
                children: [
                    title && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                        variant: 'title',
                        color: 'primary',
                        "data-testid": 'title',
                        children: title
                    }),
                    children
                ]
            })
        ]
    });
const DefaultPromptModal = (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetPortal"], {
        onClose: props.onClose,
        portalClassName: 'prompt-modal-portal',
        portalContainerClassName: 'prompt-modal-portal__container',
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultPromptLayout, Object.assign({}, props))
    });
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/DetectedNewWalletModal/DetectedNewWalletModal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DetectedNewWalletModal": (()=>DetectedNewWalletModal),
    "DetectedNewWalletWidgetPortal": (()=>DetectedNewWalletWidgetPortal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/PromptModal/PromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/WidgetPortal/WidgetPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/hooks/useCloseMultiWalletPrompt/useCloseMultiWalletPrompt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/DefaultPromptModal/DefaultPromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$HardwareWalletToggle$2f$HardwareWalletToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/HardwareWalletToggle/HardwareWalletToggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$TypographyButton$2f$TypographyButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/TypographyButton/TypographyButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/components/WalletIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isHardwareWalletConnector$2f$isHardwareWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isHardwareWalletConnector/isHardwareWalletConnector.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const DetectedNewWalletContent = ()=>{
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { setMultiWalletWidgetState, primaryWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    const handleClick = ()=>{
        setMultiWalletWidgetState('awaiting_signature', undefined, 'linking_new_wallet');
    };
    const walletConnector = primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultPromptLayout"], {
        dataTestId: 'detected-new-wallet-modal',
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletIcon"], {
            walletKey: walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.key
        }),
        title: t('dyn_detected_new_wallet.title'),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: 'detected-new-wallet-modal__top-section',
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                    variant: 'body_normal',
                    color: 'secondary',
                    weight: 'regular',
                    "data-testid": 'content',
                    children: t('dyn_detected_new_wallet.description', {
                        walletName: walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.name
                    })
                }),
                walletConnector && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isHardwareWalletConnector$2f$isHardwareWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHardwareWalletConnector"])(walletConnector) && walletConnector.canConnectWithHardwareWallet() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$HardwareWalletToggle$2f$HardwareWalletToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HardwareWalletToggle"], {
                    connectors: [
                        walletConnector
                    ],
                    copykey: 'dyn_select_chain.using_hardware_wallet_toggle_label',
                    label: t('dyn_select_chain.using_hardware_wallet_toggle_label')
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$TypographyButton$2f$TypographyButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypographyButton"], {
                    expanded: true,
                    onClick: handleClick,
                    typographyProps: {
                        variant: 'button_secondary'
                    },
                    children: t('dyn_detected_new_wallet.confirm_button')
                })
            ]
        })
    });
};
const DetectedNewWalletWidgetPortal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetPortal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DetectedNewWalletContent, {})
    });
const DetectedNewWalletModal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptModal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DetectedNewWalletContent, {})
    });
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingAccountSwitchModal/SwitchAccountView/SwitchAccountView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SwitchAccountView": (()=>SwitchAccountView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenWalletAddress$2f$shortenWalletAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$LogoutButton$2f$LogoutButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/LogoutButton/LogoutButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const SwitchAccountView = ({ selectedWalletToSwitchTo })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                variant: 'body_normal',
                color: 'secondary',
                weight: 'regular',
                "data-testid": 'content',
                children: [
                    "Switch to wallet",
                    ' ',
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                        as: 'span',
                        weight: 'medium',
                        color: 'primary',
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenWalletAddress$2f$shortenWalletAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortenWalletAddress"])(selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.address, 3, 3)
                    }),
                    ' ',
                    "in ",
                    selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.connector.name,
                    " to make it active."
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {
                fullWidth: true,
                text: 'Or'
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$LogoutButton$2f$LogoutButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoutButton"], {
                isTextButton: false,
                buttonClassName: 'primary-not-connected__log-out-button'
            })
        ]
    });
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingAccountSwitchModal/SwitchOrUseActiveAccountView/SwitchOrUseActiveAccountView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SwitchOrUseActiveAccountView": (()=>SwitchOrUseActiveAccountView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenWalletAddress$2f$shortenWalletAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Icon/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$TypographyButton$2f$TypographyButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/TypographyButton/TypographyButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/components/WalletIcon.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const SwitchOrUseActiveAccountView = ({ connectedWallet, selectedWalletToSwitchTo })=>{
    const { setSelectedWalletWithAction, setSelectedWalletConnectorKey, setPrimaryWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    const onUseActiveWalletClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SwitchOrUseActiveAccountView.useCallback[onUseActiveWalletClick]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, {
                "SwitchOrUseActiveAccountView.useCallback[onUseActiveWalletClick]": function*() {
                    var _a, _b;
                    if (!connectedWallet) {
                        return;
                    }
                    if (connectedWallet.connector.connectedChain === 'FLOW') {
                        (_b = (_a = connectedWallet.connector).endSession) === null || _b === void 0 ? void 0 : _b.call(_a);
                    }
                    setSelectedWalletWithAction({
                        action: 'select',
                        wallet: connectedWallet
                    });
                    setPrimaryWallet(connectedWallet === null || connectedWallet === void 0 ? void 0 : connectedWallet.id);
                    setSelectedWalletConnectorKey(connectedWallet === null || connectedWallet === void 0 ? void 0 : connectedWallet.connector.key);
                }
            }["SwitchOrUseActiveAccountView.useCallback[onUseActiveWalletClick]"])
    }["SwitchOrUseActiveAccountView.useCallback[onUseActiveWalletClick]"], [
        connectedWallet,
        setSelectedWalletWithAction,
        setPrimaryWallet,
        setSelectedWalletConnectorKey
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                variant: 'body_normal',
                color: 'secondary',
                weight: 'regular',
                "data-testid": 'content',
                children: [
                    "Wallet",
                    ' ',
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                        as: 'span',
                        weight: 'medium',
                        color: 'primary',
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenWalletAddress$2f$shortenWalletAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortenWalletAddress"])(selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.address, 3, 3)
                    }),
                    ' ',
                    "is not active in ",
                    selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.connector.name,
                    ". To make active, open your ",
                    selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.connector.name,
                    " wallet and switch to this account."
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {
                fullWidth: true,
                text: 'Or'
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                variant: 'body_normal',
                color: 'primary',
                children: "Use your active wallet"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$TypographyButton$2f$TypographyButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypographyButton"], {
                buttonClassName: 'default-prompt-modal__button',
                expanded: true,
                type: 'button',
                buttonPadding: 'medium',
                typographyProps: {
                    variant: 'button_secondary'
                },
                onClick: onUseActiveWalletClick,
                dataTestId: 'use-active-wallet-button',
                children: [
                    "Select",
                    ' ',
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                        size: 'xsmall',
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletIcon"], {
                            walletKey: selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.connector.key
                        })
                    }),
                    ' ',
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenWalletAddress$2f$shortenWalletAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortenWalletAddress"])(connectedWallet === null || connectedWallet === void 0 ? void 0 : connectedWallet.address, 3, 3)
                ]
            })
        ]
    });
};
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingAccountSwitchModal/PendingAccountSwitchModal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PendingAccountSwitchModal": (()=>PendingAccountSwitchModal),
    "PendingAccountSwitchWidgetPortal": (()=>PendingAccountSwitchWidgetPortal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/PromptModal/PromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/WidgetPortal/WidgetPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/DefaultPromptModal/DefaultPromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useConnectedAccountWallet$2f$useConnectedAccountWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useConnectedAccountWallet/useConnectedAccountWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingAccountSwitchModal$2f$SwitchAccountView$2f$SwitchAccountView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingAccountSwitchModal/SwitchAccountView/SwitchAccountView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingAccountSwitchModal$2f$SwitchOrUseActiveAccountView$2f$SwitchOrUseActiveAccountView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingAccountSwitchModal/SwitchOrUseActiveAccountView/SwitchOrUseActiveAccountView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/components/WalletIcon.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PendingAccountSwitchContent = ()=>{
    var _a, _b, _c, _d;
    const { selectedWalletWithAction, primaryWallet, secondaryWallets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    const selectedConnector = (_a = selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet) === null || _a === void 0 ? void 0 : _a.connector;
    const isSameWallet = (selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.key) === (primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector.key);
    const { data: connectedWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useConnectedAccountWallet$2f$useConnectedAccountWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectedAccountWallet"])((_b = selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet) === null || _b === void 0 ? void 0 : _b.connector, secondaryWallets);
    const selectedWalletToSwitchTo = (_d = (_c = selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet) !== null && _c !== void 0 ? _c : primaryWallet) !== null && _d !== void 0 ? _d : undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultPromptLayout"], {
        dataTestId: 'pending-account-switch',
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletIcon"], {
            walletKey: selectedConnector === null || selectedConnector === void 0 ? void 0 : selectedConnector.key
        }),
        title: `Switch wallet in ${selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.connector.name}`,
        children: isSameWallet || !connectedWallet ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingAccountSwitchModal$2f$SwitchAccountView$2f$SwitchAccountView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchAccountView"], {
            selectedWalletToSwitchTo: selectedWalletToSwitchTo
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingAccountSwitchModal$2f$SwitchOrUseActiveAccountView$2f$SwitchOrUseActiveAccountView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchOrUseActiveAccountView"], {
            connectedWallet: connectedWallet,
            selectedWalletToSwitchTo: selectedWalletToSwitchTo
        })
    });
};
const PendingAccountSwitchWidgetPortal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetPortal"], {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PendingAccountSwitchContent, {})
    });
const PendingAccountSwitchModal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptModal"], {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PendingAccountSwitchContent, {})
    });
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingAccountSwitchToLinkModal/PendingAccountSwitchToLinkModal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PendingAccountSwitchToLinkModal": (()=>PendingAccountSwitchToLinkModal),
    "PendingAccountSwitchToLinkWidgetPortal": (()=>PendingAccountSwitchToLinkWidgetPortal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/PromptModal/PromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/WidgetPortal/WidgetPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/hooks/useCloseMultiWalletPrompt/useCloseMultiWalletPrompt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/DefaultPromptModal/DefaultPromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/components/WalletIcon.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PendingAccountSwitchToLinkContent = ()=>{
    const { selectedWalletConnector } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultPromptLayout"], {
        dataTestId: 'pending-account-switch',
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletIcon"], {
            walletKey: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.key
        }),
        title: `Wallet is already linked, switch wallet in ${selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name}`,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
            variant: 'body_normal',
            color: 'secondary',
            weight: 'regular',
            "data-testid": 'content',
            children: [
                "To link a new wallet, open",
                ' ',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                    as: 'span',
                    weight: 'medium',
                    color: 'primary',
                    children: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name
                }),
                ' ',
                "and switch to the account you want to link."
            ]
        })
    });
};
const PendingAccountSwitchToLinkWidgetPortal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetPortal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PendingAccountSwitchToLinkContent, {})
    });
const PendingAccountSwitchToLinkModal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptModal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PendingAccountSwitchToLinkContent, {})
    });
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/UnlinkWalletPopUp/UnlinkWalletPopUp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UnlinkWalletPopUpModal": (()=>UnlinkWalletPopUpModal),
    "UnlinkWalletPopUpWidgetPortal": (()=>UnlinkWalletPopUpWidgetPortal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$TypographyButton$2f$TypographyButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/TypographyButton/TypographyButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/hooks/useCloseMultiWalletPrompt/useCloseMultiWalletPrompt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/PromptModal/PromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/WidgetPortal/WidgetPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const UnlinkWalletPopUpContent = ({ onClickCancel })=>{
    var _a;
    const { handleUnlinkWallet, setSelectedWalletWithAction, authMode, selectedWalletWithAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { loading, setLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadingContext"])();
    const walletId = (_a = selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet) === null || _a === void 0 ? void 0 : _a.id;
    if (!walletId) {
        throw new Error('Wallet id is not defined');
    }
    const onConfirmClick = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
            try {
                setLoading(true);
                yield handleUnlinkWallet(walletId);
                setSelectedWalletWithAction(null);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error(error);
            } finally{
                setLoading(false);
            }
        });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: 'unlink-wallet-popup__container',
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                color: 'primary',
                className: 'unlink-wallet-popup__title',
                variant: 'body_normal',
                as: 'h6',
                children: authMode === 'connect-only' ? t('dyn_unlink_wallet_pop_up.disconnect_title') : t('dyn_unlink_wallet_pop_up.unlink_title')
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                className: 'unlink-wallet-popup__label',
                variant: 'body_small',
                color: 'secondary',
                children: authMode === 'connect-only' ? t('dyn_unlink_wallet_pop_up.disconnect_description') : t('dyn_unlink_wallet_pop_up.unlink_description')
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$TypographyButton$2f$TypographyButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypographyButton"], {
                buttonPadding: 'small',
                onClick: onConfirmClick,
                disabled: loading,
                buttonClassName: 'unlink-wallet-popup__button unlink-wallet-popup__button--shadow',
                color: 'primary',
                expanded: true,
                typographyProps: {
                    variant: 'button_secondary',
                    weight: 'medium'
                },
                dataTestId: 'unlink-wallet-popup-yes-button',
                children: authMode === 'connect-only' ? t('dyn_unlink_wallet_pop_up.disconnect_button') : t('dyn_unlink_wallet_pop_up.unlink_button')
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$TypographyButton$2f$TypographyButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypographyButton"], {
                expanded: true,
                buttonPadding: 'small',
                onClick: onClickCancel,
                buttonVariant: 'secondary',
                buttonClassName: 'unlink-wallet-popup__button',
                typographyProps: {
                    variant: 'button_secondary',
                    weight: 'medium'
                },
                children: t('dyn_unlink_wallet_pop_up.cancel_button')
            })
        ]
    });
};
const UnlinkWalletPopUpModal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptModal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(UnlinkWalletPopUpContent, {
            onClickCancel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])()
        })
    });
const UnlinkWalletPopUpWidgetPortal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetPortal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(UnlinkWalletPopUpContent, {
            onClickCancel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])()
        })
    });
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/NoQrNotInstalledModalView/NoQrNotInstalledModalView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NoQrNotInstalledModalView": (()=>NoQrNotInstalledModalView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$pixelToRem$2f$pixelToRem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/pixelToRem/pixelToRem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$NoQrNotInstalledView$2f$WalletHelpLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/NoQrNotInstalledView/WalletHelpLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useWalletDownloadLinks$2f$useWalletDownloadLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/hooks/useWalletDownloadLinks/useWalletDownloadLinks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$context$2f$WalletBookContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/context/WalletBookContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletBookWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/components/WalletIcon.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const NoQrNotInstalledModalView = ()=>{
    const { selectedWalletConnector } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    const { walletBook } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$context$2f$WalletBookContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletBookContext"])();
    const downloadLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useWalletDownloadLinks$2f$useWalletDownloadLinks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletDownloadLinks"])(selectedWalletConnector);
    if (!selectedWalletConnector) {
        return null;
    }
    const walletName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletBookWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWalletBookWallet"])(walletBook, selectedWalletConnector.key, selectedWalletConnector.walletFallback).name;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: 'no-qr-code-not-installed-modal-view',
        "data-testid": 'no-qr-code-not-installed',
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletIcon"], {
                walletKey: selectedWalletConnector.key,
                style: {
                    height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$pixelToRem$2f$pixelToRem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pixelToRem"])(64),
                    width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$pixelToRem$2f$pixelToRem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pixelToRem"])(64)
                }
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                variant: 'body_normal',
                color: 'primary',
                children: [
                    "We can\u2019t detect ",
                    walletName,
                    " extension"
                ]
            }),
            Array.isArray(downloadLinks) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                variant: 'body_normal',
                color: 'secondary',
                children: "Select from your preferred options below:"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: 'no-qr-code-not-installed-modal-view__links-section',
                children: downloadLinks.map(({ key, name, link, Icon })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$NoQrNotInstalledView$2f$WalletHelpLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletHelpLink"], {
                        name: name,
                        link: link,
                        Icon: Icon
                    }, key))
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                variant: 'body_mini',
                color: 'secondary',
                children: "Refresh the page once installed"
            })
        ]
    });
};
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingConnectionModal/PendingConnectionModal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PendingConnectionModal": (()=>PendingConnectionModal),
    "PendingConnectionWidgetPortal": (()=>PendingConnectionWidgetPortal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getReferencedAccount$2f$getReferencedAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/getReferencedAccount/getReferencedAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$helpers$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/helpers/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/PromptModal/PromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/WidgetPortal/WidgetPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/hooks/useCloseMultiWalletPrompt/useCloseMultiWalletPrompt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/DefaultPromptModal/DefaultPromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$AuthProviderIcon$2f$AuthProviderIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/AuthProviderIcon/AuthProviderIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isSocialWalletConnector$2f$isSocialWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isSocialWalletConnector/isSocialWalletConnector.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PendingConnectionContent = ()=>{
    var _a;
    const { selectedWalletConnector, user, selectedWalletWithAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    let title;
    let description;
    if (selectedWalletWithAction && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isSocialWalletConnector$2f$isSocialWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSocialWalletConnector"])(selectedWalletWithAction.wallet.connector)) {
        const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$getReferencedAccount$2f$getReferencedAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReferencedAccount"])(user, selectedWalletWithAction.wallet.id);
        title = `Reconnecting ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$helpers$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])((_a = account === null || account === void 0 ? void 0 : account.oauthProvider) !== null && _a !== void 0 ? _a : '')}`;
    } else {
        title = `Connect ${selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name} wallet`;
        description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Connect your",
                ' ',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                    as: 'span',
                    weight: 'medium',
                    color: 'primary',
                    children: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name
                }),
                ' ',
                "wallet to make active."
            ]
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultPromptLayout"], {
        dataTestId: 'pending-connection-modal',
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$AuthProviderIcon$2f$AuthProviderIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ // eslint-disable-line
        ["AuthProviderIcon"], {
            wallet: selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet
        }),
        title: title,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
            variant: 'body_normal',
            color: 'secondary',
            weight: 'regular',
            "data-testid": 'content',
            children: description
        })
    });
};
const PendingConnectionModal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptModal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PendingConnectionContent, {})
    });
const PendingConnectionWidgetPortal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetPortal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PendingConnectionContent, {})
    });
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingSignModal/DefaultPendingSignModalContent/DefaultPendingSignModalContent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DefaultPendingSignModalContent": (()=>DefaultPendingSignModalContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$authenticationHooks$2f$useConnectAndSignSplitSteps$2f$useConnectAndSignSplitSteps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/authenticationHooks/useConnectAndSignSplitSteps/useConnectAndSignSplitSteps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/hooks/useCloseMultiWalletPrompt/useCloseMultiWalletPrompt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/DefaultPromptModal/DefaultPromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$TypographyButton$2f$TypographyButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/TypographyButton/TypographyButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/utils/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/components/WalletIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/isMobile.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const DefaultPendingSignModalContent = ()=>{
    const { selectedWalletConnector, setMultiWalletWidgetState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    const { signAlreadyConnectedUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$authenticationHooks$2f$useConnectAndSignSplitSteps$2f$useConnectAndSignSplitSteps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectAndSignSplitSteps"])();
    const onClickToSign = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(void 0, void 0, void 0, function*() {
            try {
                if (selectedWalletConnector) {
                    yield signAlreadyConnectedUser({
                        walletConnector: selectedWalletConnector
                    });
                }
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error(e);
            } finally{
                setMultiWalletWidgetState('idle');
            }
        });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultPromptModal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        dataTestId: 'pending-account-switch',
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletIcon"], {
            walletKey: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.key
        }),
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                variant: 'body_normal',
                color: 'secondary',
                weight: 'regular',
                "data-testid": 'content',
                children: "Sign the message in your wallet to approve linking this wallet to your account"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$isMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.canConnectViaCustodialService) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$TypographyButton$2f$TypographyButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypographyButton"], {
                buttonClassName: 'default-prompt-modal__button',
                expanded: true,
                type: 'button',
                buttonPadding: 'medium',
                typographyProps: {
                    variant: 'button_secondary'
                },
                onClick: onClickToSign,
                dataTestId: 'click-to-sign-button',
                children: "Click to Sign"
            })
        ]
    });
};
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingSignModal/PendingSignModal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PendingSignModal": (()=>PendingSignModal),
    "PendingSignWidgetPortal": (()=>PendingSignWidgetPortal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/hooks/useCloseMultiWalletPrompt/useCloseMultiWalletPrompt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/PromptModal/PromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/WidgetPortal/WidgetPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$EmailConnectorPendingSignModalContent$2f$EmailConnectorPendingSignModalContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/EmailConnectorPendingSignModalContent/EmailConnectorPendingSignModalContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$EmailOTPConnectorPendingSignModalContent$2f$EmailOTPConnectorPendingSignModalContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/EmailOTPConnectorPendingSignModalContent/EmailOTPConnectorPendingSignModalContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingSignModal$2f$DefaultPendingSignModalContent$2f$DefaultPendingSignModalContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingSignModal/DefaultPendingSignModalContent/DefaultPendingSignModalContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isEmailOTPWalletConnector$2f$isEmailOTPWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isEmailOTPWalletConnector/isEmailOTPWalletConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isEmailWalletConnector$2f$isEmailWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isEmailWalletConnector/isEmailWalletConnector.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PendingSignContent = ()=>{
    const { selectedWalletConnector } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    if (selectedWalletConnector !== null) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isEmailOTPWalletConnector$2f$isEmailOTPWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmailOTPWalletConnector"])(selectedWalletConnector)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$EmailOTPConnectorPendingSignModalContent$2f$EmailOTPConnectorPendingSignModalContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailOTPConnectorPendingSignModalContent"], {
                walletConnector: selectedWalletConnector
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isEmailWalletConnector$2f$isEmailWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmailWalletConnector"])(selectedWalletConnector)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$EmailConnectorPendingSignModalContent$2f$EmailConnectorPendingSignModalContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailConnectorPendingSignModalContent"], {
                emailWalletConnector: selectedWalletConnector
            });
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingSignModal$2f$DefaultPendingSignModalContent$2f$DefaultPendingSignModalContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultPendingSignModalContent"], {});
};
const PendingSignWidgetPortal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetPortal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PendingSignContent, {})
    });
const PendingSignModal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptModal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PendingSignContent, {})
    });
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/QrCodeModalView/QrCodeModalView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "QrCodeModalView": (()=>QrCodeModalView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$assets$2f$externalLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/externalLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$assets$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/assets/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenWalletAddress$2f$shortenWalletAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$pixelToRem$2f$pixelToRem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/functions/pixelToRem/pixelToRem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Icon/Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$CopyButton$2f$CopyButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/CopyButton/CopyButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$TextButton$2f$TextButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/TextButton/TextButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$QRCode$2f$QRCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/QRCode/QRCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$context$2f$WalletBookContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/context/WalletBookContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletPrimaryColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/helpers/getWalletPrimaryColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/components/WalletIcon.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const QrCodeModalView = ({ walletId })=>{
    var _a, _b;
    const { secondaryWallets, qrcodeUri, desktopUri } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    const { walletBook } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$context$2f$WalletBookContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletBookContext"])();
    const newPrimaryWallet = secondaryWallets.find(({ id })=>id === walletId);
    const walletKey = ((_a = newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector) === null || _a === void 0 ? void 0 : _a.key) || '';
    const walletName = ((_b = newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector) === null || _b === void 0 ? void 0 : _b.name) || '';
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"])();
    const qrCodeColorsByTheme = {
        dark: {
            accentColor: 'var(--dynamic-text-primary)'
        },
        light: {
            accentColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$helpers$2f$getWalletPrimaryColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWalletPrimaryColor"])(walletBook, walletKey) || 'var(--dynamic-text-primary)'
        }
    };
    // can't use theme because it's string instead of 'light' | 'dark'
    const typedTheme = theme.theme.name === 'light' ? 'light' : 'dark';
    const icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletIcon"], {
        walletKey: walletKey,
        style: {
            height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$pixelToRem$2f$pixelToRem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pixelToRem"])(24),
            width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$functions$2f$pixelToRem$2f$pixelToRem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pixelToRem"])(24)
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: 'qr-code-modal-view',
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                variant: 'button_primary',
                color: 'primary',
                className: 'qr-code-modal-view__title',
                children: [
                    "Connect with ",
                    newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector.name
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                variant: 'body_small',
                color: 'secondary',
                className: 'qr-code-modal-view__title',
                children: [
                    "Connect wallet",
                    ' ',
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                        as: 'span',
                        weight: 'medium',
                        color: 'primary',
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenWalletAddress$2f$shortenWalletAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortenWalletAddress"])(newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.address, 4, 4)
                    }),
                    ' ',
                    "to switch active account."
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: 'qr-code-modal-view__container',
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: 'qr-code-modal-view__wrapper',
                    children: qrcodeUri ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$QRCode$2f$QRCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCode"], {
                        Icon: icon,
                        accentColor: qrCodeColorsByTheme[typedTheme].accentColor,
                        value: qrcodeUri,
                        size: 175,
                        logoSize: 40,
                        walletKey: walletKey
                    }) : // this div exists to give the parent a child, so that the parent
                    // takes on its given width and height. the result is stable
                    // rendering of this component, without this there is a brief flash
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        "data-testid": 'no-qrcode'
                    })
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: 'button__container',
                children: [
                    (newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector.isWalletConnect) && qrcodeUri && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$CopyButton$2f$CopyButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyButton"], {
                        textToCopy: qrcodeUri,
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                size: 'small',
                                color: 'text-tertiary',
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$assets$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactComponent"], {})
                            }),
                            "Copy QR URI"
                        ]
                    }),
                    desktopUri && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$TextButton$2f$TextButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextButton"], {
                        className: 'button--open-app',
                        onClick: ()=>window.open(desktopUri),
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Icon$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                size: 'xsmall',
                                color: 'text-tertiary',
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$assets$2f$externalLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactComponent"], {})
                            }),
                            "Open ",
                            walletName,
                            " App"
                        ]
                    })
                ]
            })
        ]
    });
};
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/AwaitingConnectionModal/AwaitingConnectionModal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AwaitingConnectionModal": (()=>AwaitingConnectionModal),
    "AwaitingConnectionWidgetPortal": (()=>AwaitingConnectionWidgetPortal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/hooks/useCloseMultiWalletPrompt/useCloseMultiWalletPrompt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/PromptModal/PromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/WidgetPortal/WidgetPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$NoQrNotInstalledModalView$2f$NoQrNotInstalledModalView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/NoQrNotInstalledModalView/NoQrNotInstalledModalView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingConnectionModal$2f$PendingConnectionModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingConnectionModal/PendingConnectionModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingSignModal$2f$PendingSignModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PendingSignModal/PendingSignModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$QrCodeModalView$2f$QrCodeModalView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/QrCodeModalView/QrCodeModalView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isEmailOTPWalletConnector$2f$isEmailOTPWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isEmailOTPWalletConnector/isEmailOTPWalletConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isEmailWalletConnector$2f$isEmailWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/utils/isEmailWalletConnector/isEmailWalletConnector.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const AwaitingConnectionContent = ({ PendingSign, PendingConnection })=>{
    var _a, _b;
    const { selectedWalletConnector, showQrcodeModal, selectedWalletWithAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    const Pending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AwaitingConnectionContent.useMemo[Pending]": ()=>{
            if (selectedWalletConnector && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isEmailOTPWalletConnector$2f$isEmailOTPWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmailOTPWalletConnector"])(selectedWalletConnector) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$utils$2f$isEmailWalletConnector$2f$isEmailWalletConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmailWalletConnector"])(selectedWalletConnector))) {
                return PendingSign;
            }
            return PendingConnection;
        }
    }["AwaitingConnectionContent.useMemo[Pending]"], [
        selectedWalletConnector
    ]);
    if (showQrcodeModal) {
        if (selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.canConnectViaQrCode) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$QrCodeModalView$2f$QrCodeModalView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QrCodeModalView"], {
                walletId: (_b = (_a = selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : ''
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$NoQrNotInstalledModalView$2f$NoQrNotInstalledModalView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoQrNotInstalledModalView"], {});
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Pending, {});
};
const AwaitingConnectionWidgetPortal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetPortal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AwaitingConnectionContent, {
            PendingSign: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingSignModal$2f$PendingSignModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PendingSignWidgetPortal"],
            PendingConnection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingConnectionModal$2f$PendingConnectionModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PendingConnectionWidgetPortal"]
        })
    });
const AwaitingConnectionModal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptModal"], {
        onClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$hooks$2f$useCloseMultiWalletPrompt$2f$useCloseMultiWalletPrompt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCloseMultiWalletPrompt"])(),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AwaitingConnectionContent, {
            PendingSign: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingSignModal$2f$PendingSignModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PendingSignModal"],
            PendingConnection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$PendingConnectionModal$2f$PendingConnectionModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PendingConnectionModal"]
        })
    });
;
}}),
"[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/PrimaryNotConnectedModal/PrimaryNotConnectedModal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PrimaryNotConnectedModal": (()=>PrimaryNotConnectedModal),
    "PrimaryNotConnectedWidgetPortal": (()=>PrimaryNotConnectedWidgetPortal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Accordion$2f$components$2f$AccordionItem$2f$AccordionItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Accordion/components/AccordionItem/AccordionItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$events$2f$dynamicEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/events/dynamicEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$_virtual$2f$_tslib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/_virtual/_tslib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$utils$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/utils/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$api$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-api-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$iconic$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/iconic/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$connector$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-connector-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ViewContext/ViewContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenWalletAddress$2f$shortenWalletAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$constants$2f$values$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/constants/values.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$loadingAndLifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/loadingAndLifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$consts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/consts/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useInternalDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$CaptchaContext$2f$CaptchaContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/CaptchaContext/CaptchaContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ErrorContext$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ErrorContext/ErrorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$multi$2d$wallet$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/multi-wallet/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$international$2d$phone$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-international-phone/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$config$2f$ApiEndpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/config/ApiEndpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$user$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/user/user.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$locale$2f$locale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/locale/locale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$projectSettings$2f$projectSettings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/projectSettings/projectSettings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccessDeniedContext$2f$AccessDeniedContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccessDeniedContext/AccessDeniedContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$AccountExistsContext$2f$AccountExistsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/AccountExistsContext/AccountExistsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserWalletsContext$2f$UserWalletsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserWalletsContext/UserWalletsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$VerificationContext$2f$VerificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/VerificationContext/VerificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletContext$2f$WalletContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletContext/WalletContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useEmbeddedWallet$2f$useSecureEnclaveEmbeddedWallet$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useEmbeddedWallet/useSecureEnclaveEmbeddedWallet/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ThemeContext$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/ThemeContext/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useUserUpdateRequest$2f$useUpdateUser$2f$userFieldsSchema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useUserUpdateRequest/useUpdateUser/userFieldsSchema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$types$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/types/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$LoadingContext$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/LoadingContext/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/yup/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$MockContext$2f$MockContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/MockContext/MockContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$CollectUserDataView$2f$useFields$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/CollectUserDataView/useFields.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FieldsStateContext$2f$FieldsStateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FieldsStateContext/FieldsStateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$UserFieldEditorContext$2f$UserFieldEditorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/UserFieldEditorContext/UserFieldEditorContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$rpc$2d$providers$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/rpc-providers/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$environmentId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/environmentId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$walletConnectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/walletConnectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$FooterAnimationContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/FooterAnimationContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$ShadowDOM$2f$ShadowDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/ShadowDOM/ShadowDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$ZoomTransition$2f$ZoomTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/ZoomTransition/ZoomTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$SlideInUpTransition$2f$SlideInUpTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Transition$2f$OpacityTransition$2f$OpacityTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Transition/OpacityTransition/OpacityTransition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$OverlayCard$2f$OverlayCardTarget$2f$OverlayCardTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/OverlayCard/OverlayCardTarget/OverlayCardTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$SocialRedirectContext$2f$SocialRedirectContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/SocialRedirectContext/SocialRedirectContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$WalletGroupContext$2f$WalletGroupContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/WalletGroupContext/WalletGroupContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$DynamicWidgetHeader$2f$DynamicWidgetHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/PromptModal/PromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/components/WidgetPortal/WidgetPortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/prompts/DefaultPromptModal/DefaultPromptModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$context$2f$DynamicWidgetContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/context/DynamicWidgetContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$MenuList$2f$Dropdown$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/MenuList/Dropdown/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$sendBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/sendBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$views$2f$TransactionConfirmationView$2f$TransactionConfirmationView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/views/TransactionConfirmationView/TransactionConfirmationView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$PasskeyContext$2f$PasskeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/PasskeyContext/PasskeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$views$2f$ManagePasskeysWidgetView$2f$PasskeyCard$2f$PasskeyCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$store$2f$state$2f$tokenBalances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/store/state/tokenBalances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$getInitialUrl$2f$getInitialUrl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/shared/utils/functions/getInitialUrl/getInitialUrl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$InlineWidget$2f$InlineWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/InlineWidget/InlineWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$IsBrowser$2f$IsBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/IsBrowser/IsBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$LogoutButton$2f$LogoutButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/LogoutButton/LogoutButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$PasskeyCreatedSuccessBanner$2f$PasskeyCreatedSuccessBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Popper$2f$PopperContext$2f$PopperContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/Popper/PopperContext/PopperContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2f$lib$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/qrcode/lib/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$IpConfigurationContext$2f$IpConfigurationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/IpConfigurationContext/IpConfigurationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicBridgeWidget$2f$views$2f$WalletsView$2f$components$2f$SecondaryWallets$2f$SecondaryWallets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hcaptcha$2f$react$2d$hcaptcha$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hcaptcha/react-hcaptcha/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@dynamic-labs/wallet-book/src/components/WalletIcon.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PrimaryNotConnectedContent = ()=>{
    var _a;
    const { primaryWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useInternalDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalDynamicContext"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$prompts$2f$DefaultPromptModal$2f$DefaultPromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultPromptLayout"], {
        dataTestId: 'wallet-not-connected',
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$wallet$2d$book$2f$src$2f$components$2f$WalletIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WalletIcon"], {
            walletKey: (_a = primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector) === null || _a === void 0 ? void 0 : _a.key
        }),
        title: `Switch wallet in ${primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector.name}`,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                variant: 'body_normal',
                color: 'secondary',
                weight: 'regular',
                "data-testid": 'content',
                children: [
                    "Your active wallet in",
                    ' ',
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                        as: 'span',
                        weight: 'medium',
                        color: 'primary',
                        children: primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector.name
                    }),
                    ' ',
                    "is not linked. Please switch to wallet",
                    ' ',
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                        as: 'span',
                        weight: 'medium',
                        color: 'primary',
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$shared$2f$utils$2f$functions$2f$shortenWalletAddress$2f$shortenWalletAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortenWalletAddress"])(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address, 3, 3)
                    }),
                    "."
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {
                fullWidth: true,
                text: 'Or'
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$LogoutButton$2f$LogoutButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoutButton"], {
                isTextButton: false,
                buttonClassName: 'primary-not-connected__log-out-button'
            })
        ]
    });
};
const PrimaryNotConnectedWidgetPortal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$WidgetPortal$2f$WidgetPortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetPortal"], {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PrimaryNotConnectedContent, {})
    });
const PrimaryNotConnectedModal = ()=>{
    const { view } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$ViewContext$2f$ViewContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewContext"])();
    // This modal would hide the view where we ask the user if they want to transfer the new wallet
    // So in that specific case, we don't show it
    if (view.type === 'wallet-used') return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$components$2f$PromptModal$2f$PromptModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptModal"], {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PrimaryNotConnectedContent, {})
    });
};
;
}}),
}]);

//# sourceMappingURL=8069e_%40dynamic-labs_sdk-react-core_src_lib_widgets_DynamicWidget_prompts_4afb59._.js.map