"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("tsconfig-paths/register"); // Enables path aliases
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const db_1 = require("./configs/db");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const env_1 = require("./constants/env");
// Routes
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const vehicle_routes_1 = __importDefault(require("./routes/vehicle.routes"));
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
const app = (0, express_1.default)();
app.set("trust proxy", true);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: env_1.FRONTEND_URL,
    credentials: true,
}));
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
app.use("/api/auth", auth_routes_1.default);
app.use("/api/vehicle", vehicle_routes_1.default);
app.use("/api/contact", contact_routes_1.default);
// This must be the last route
app.use((req, res) => {
    res.status(404).send("Route not found. This is the fallback handler.");
});
app.use(errorHandler_1.default);
app.listen(env_1.PORT, async () => {
    console.log(`Server running on ${env_1.PORT} in ${env_1.NODE_ENV} environment`);
    await (0, db_1.connectToDatabase)();
});
//# sourceMappingURL=server.js.map