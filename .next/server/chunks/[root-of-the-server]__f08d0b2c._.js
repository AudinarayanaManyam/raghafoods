module.exports = [
"[project]/Downloads/raagafoods (2)/raagafoods/.next-internal/server/app/api/reviews/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/Downloads/raagafoods (2)/raagafoods/src/app/api/reviews/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/raagafoods (2)/raagafoods/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
const dynamic = 'force-dynamic';
const runtime = 'nodejs';
// Path to the reviews JSON file
function getReviewsFilePath() {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'data', 'reviews.json');
}
// Read reviews from JSON file
async function readReviews() {
    try {
        const filePath = getReviewsFilePath();
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        return data.reviews || [];
    } catch (error) {
        console.error('[Read Reviews Error]', error);
        return [];
    }
}
// Write reviews to JSON file
async function writeReviews(reviews) {
    try {
        const filePath = getReviewsFilePath();
        const data = {
            reviews
        };
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log('[Write Reviews] Successfully saved to JSON file');
    } catch (error) {
        console.error('[Write Reviews Error]', error);
        throw error;
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        console.log('[POST Review] Received review:', body);
        // Validation
        const errors = [];
        if (!body.productId?.trim()) errors.push('Product ID required');
        if (!body.userName?.trim()) errors.push('User name required');
        if (!body.title?.trim()) errors.push('Title required');
        if (!body.content?.trim()) errors.push('Content required');
        if (!body.rating || body.rating < 1 || body.rating > 5) {
            errors.push('Rating must be 1-5');
        }
        if (errors.length > 0) {
            console.log('[POST Review] Validation errors:', errors);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                errors
            }, {
                status: 400
            });
        }
        // Read existing reviews from JSON file
        const reviews = await readReviews();
        // Create new review
        const newReview = {
            id: `review_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            productId: body.productId.trim(),
            userId: body.userId || `user_${Date.now()}`,
            userName: body.userName.trim(),
            rating: body.rating,
            title: body.title.trim(),
            content: body.content.trim(),
            location: body.location?.trim() || null,
            verifiedPurchase: body.verifiedPurchase || false,
            helpfulVotes: 0,
            totalVotes: 0,
            createdAt: new Date().toISOString()
        };
        // Add to reviews array
        reviews.push(newReview);
        // Write back to JSON file
        await writeReviews(reviews);
        console.log(`[POST Review] Review stored successfully. Total reviews: ${reviews.length}`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Review submitted successfully',
            review: newReview
        }, {
            status: 201
        });
    } catch (error) {
        console.error('[POST Review Error]', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to submit review',
            message: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const productId = searchParams.get('productId');
        const sortBy = searchParams.get('sortBy') || 'newest';
        const filterRating = searchParams.get('filterRating');
        console.log(`[GET Reviews] productId=${productId}, sortBy=${sortBy}, filterRating=${filterRating}`);
        if (!productId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Product ID required'
            }, {
                status: 400
            });
        }
        // Read reviews from JSON file
        const allReviews = await readReviews();
        console.log(`[GET Reviews] Total reviews in file: ${allReviews.length}`);
        // Get reviews for product
        let reviews = allReviews.filter((r)=>r.productId === productId);
        console.log(`[GET Reviews] Found ${reviews.length} reviews for product ${productId}`);
        // Filter by rating
        if (filterRating) {
            const rating = parseInt(filterRating);
            if (!isNaN(rating)) {
                reviews = reviews.filter((r)=>r.rating === rating);
            }
        }
        // Sort
        reviews.sort((a, b)=>{
            switch(sortBy){
                case 'oldest':
                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                case 'highest':
                    return b.rating - a.rating;
                case 'lowest':
                    return a.rating - b.rating;
                case 'helpful':
                    return b.helpfulVotes / Math.max(b.totalVotes, 1) - a.helpfulVotes / Math.max(a.totalVotes, 1);
                case 'newest':
                default:
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }
        });
        // Calculate summary
        const summary = {
            averageRating: reviews.length > 0 ? reviews.reduce((sum, r)=>sum + r.rating, 0) / reviews.length : 0,
            totalReviews: reviews.length,
            ratingBreakdown: {
                1: reviews.filter((r)=>r.rating === 1).length,
                2: reviews.filter((r)=>r.rating === 2).length,
                3: reviews.filter((r)=>r.rating === 3).length,
                4: reviews.filter((r)=>r.rating === 4).length,
                5: reviews.filter((r)=>r.rating === 5).length
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                reviews,
                summary,
                total: reviews.length
            }
        }, {
            status: 200
        });
    } catch (error) {
        console.error('[GET Reviews Error]', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to fetch reviews',
            message: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    try {
        const body = await request.json();
        const { reviewId, productId, isHelpful } = body;
        if (!reviewId || !productId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Review ID and Product ID required'
            }, {
                status: 400
            });
        }
        // Read reviews from JSON file
        const reviews = await readReviews();
        // Find the review
        const review = reviews.find((r)=>r.id === reviewId && r.productId === productId);
        if (!review) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Review not found'
            }, {
                status: 404
            });
        }
        // Update votes
        if (isHelpful) {
            review.helpfulVotes++;
        }
        review.totalVotes++;
        // Write updated reviews back to JSON file
        await writeReviews(reviews);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Vote recorded',
            review
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Vote error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$raagafoods__$28$2$292f$raagafoods$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to record vote',
            message: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f08d0b2c._.js.map