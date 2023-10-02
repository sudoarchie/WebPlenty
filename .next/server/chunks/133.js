"use strict";
exports.id = 133;
exports.ids = [133];
exports.modules = {

/***/ 9133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarLogout: () => (/* binding */ NavbarLogout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1378);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var modularize_import_loader_name_Menu_from_default_as_default_join_esm_icons_menu_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4869);
/* harmony import */ var modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93);
/* harmony import */ var modularize_import_loader_name_MapPin_from_default_as_default_join_esm_icons_map_pin_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2611);
/* harmony import */ var modularize_import_loader_name_MessageSquare_from_default_as_default_join_esm_icons_message_square_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6521);
/* harmony import */ var modularize_import_loader_name_BarChart_from_default_as_default_join_esm_icons_bar_chart_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4315);
/* harmony import */ var modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2759);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3719);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_bjplogo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2585);
/* __next_internal_client_entry_do_not_use__ NavbarLogout auto */ 










const menuItems = [
    {
        name: "Home",
        href: "../"
    }
];
function NavbarLogout() {
    const [isMenuOpen, setIsMenuOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative w-full bg-white",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "inline-flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: _images_bjplogo_jpg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                className: " w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[50px] sm:h-[30px]",
                                alt: "BJP"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "font-bold",
                            children: "BJP"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden lg:block",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "inline-flex space-x-8",
                        children: menuItems.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: item.href,
                                    className: "text-sm font-semibold text-gray-800 hover:text-gray-900",
                                    children: item.name
                                })
                            }, item.name))
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden lg:block",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/  n",
                            children: "Logout"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Menu_from_default_as_default_join_esm_icons_menu_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        onClick: toggleMenu,
                        className: "h-6 w-6 cursor-pointer"
                    })
                }),
                isMenuOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "px-5 pb-6 pt-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                className: "-mx-3 space-y-6 ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-3 ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "-mr-2",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    type: "button",
                                                    onClick: toggleMenu,
                                                    className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "sr-only",
                                                            children: "Close menu"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            className: "h-6 w-6",
                                                            "aria-hidden": "true"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "px-3 text-xs font-semibold uppercase text-gray-900",
                                                children: "Navigate"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",
                                                href: "../form",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_BarChart_from_default_as_default_join_esm_icons_bar_chart_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mx-2 text-sm font-medium",
                                                        children: "Registration"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",
                                                href: "../karykarta",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_User_from_default_as_default_join_esm_icons_user_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mx-2 text-sm font-medium",
                                                        children: "Karyakarta"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",
                                                href: "../mundalmaster",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_MapPin_from_default_as_default_join_esm_icons_map_pin_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mx-2 text-sm font-medium",
                                                        children: "मंडल मास्टर"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",
                                                href: "/sectormaster",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_MapPin_from_default_as_default_join_esm_icons_map_pin_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mx-2 text-sm font-medium",
                                                        children: "सेक्टर मास्टर"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",
                                                href: "../boothmaster",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_MapPin_from_default_as_default_join_esm_icons_map_pin_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mx-2 text-sm font-medium",
                                                        children: "बूथ मास्टर"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-3 ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: "px-3 text-xs font-semibold uppercase text-gray-900",
                                                children: "content"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                className: "flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700",
                                                href: "#",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_MessageSquare_from_default_as_default_join_esm_icons_message_square_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mx-2 text-sm font-medium",
                                                        children: "Send SMS"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
}


/***/ })

};
;