"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotlightGroup = exports.SpotlightGroupContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.SpotlightGroupContext = (0, react_1.createContext)(null);
const SpotlightGroup = ({ children, className = "", style = {}, }) => {
    const [position, setPosition] = (0, react_1.useState)({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const onMouseMove = (x, y) => {
        setPosition({ x, y });
    };
    return ((0, jsx_runtime_1.jsx)(exports.SpotlightGroupContext.Provider, { value: { position, isHovered, onMouseMove }, children: (0, jsx_runtime_1.jsx)("div", { className: className, style: style, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: children }) }));
};
exports.SpotlightGroup = SpotlightGroup;
exports.default = exports.SpotlightGroup;
