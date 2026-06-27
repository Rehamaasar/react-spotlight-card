"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotlightCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SpotlightGroup_1 = require("./SpotlightGroup");
const SpotlightCard = ({ children, className = "", style = {}, spotlightColor = "rgba(255, 255, 255, 0.15)", spotlightSize = 300, spotlightBorder = false, borderColor = "rgba(255, 255, 255, 0.4)", disabled = false, }) => {
    const cardRef = (0, react_1.useRef)(null);
    const [localPosition, setLocalPosition] = (0, react_1.useState)({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const groupContext = (0, react_1.useContext)(SpotlightGroup_1.SpotlightGroupContext);
    const hovered = groupContext ? groupContext.isHovered : isHovered;
    const handleMouseMove = (e) => {
        if (disabled)
            return;
        if (!cardRef.current)
            return;
        if (groupContext) {
            groupContext.onMouseMove(e.clientX, e.clientY);
        }
        else {
            const rect = cardRef.current.getBoundingClientRect();
            setLocalPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
    };
    const getResolvedPosition = () => {
        if (!groupContext || !cardRef.current)
            return localPosition;
        const rect = cardRef.current.getBoundingClientRect();
        return {
            x: groupContext.position.x - rect.left,
            y: groupContext.position.y - rect.top,
        };
    };
    const resolvedPosition = getResolvedPosition();
    const borderValue = spotlightBorder && hovered
        ? "1px solid " + borderColor
        : "1px solid rgba(255,255,255,0.08)";
    return ((0, jsx_runtime_1.jsxs)("div", { ref: cardRef, className: className, onMouseMove: handleMouseMove, onMouseEnter: () => { if (!groupContext)
            setIsHovered(true); }, onMouseLeave: () => { if (!groupContext)
            setIsHovered(false); }, style: Object.assign({ position: "relative", borderRadius: "12px", overflow: "hidden", background: "#1a1a2e", border: borderValue }, style), children: [!disabled && ((0, jsx_runtime_1.jsx)("div", { style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    borderRadius: "inherit",
                    opacity: hovered ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    background: "radial-gradient(" +
                        spotlightSize +
                        "px circle at " +
                        resolvedPosition.x +
                        "px " +
                        resolvedPosition.y +
                        "px, " +
                        spotlightColor +
                        ", transparent 70%)",
                } })), (0, jsx_runtime_1.jsx)("div", { style: { position: "relative", zIndex: 1 }, children: children })] }));
};
exports.SpotlightCard = SpotlightCard;
exports.default = exports.SpotlightCard;
